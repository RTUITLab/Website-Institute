import Section from '@/components/sections';
import Screensaver from '@/components/screensaver';
import DirectionsImage from '@/public/image/Направления.webp';
import DownTransition from '@/components/downTransition';
import InstituteImage from '@/public/image/институт.webp';
import TitleText from '@/components/titleText';
import { StaticImageData } from 'next/image';
import elementsManager, { PropsManager } from '@/elementsManager';
import RTUITLab from '@/public/image/Лаба_Переход.webp';

type Api = {
  menuSection: {
    image: StaticImageData;
    text: string;
  };
  sections: {
    sectionId: {
      link: string;
      text: string;
    };
    titleText: {
      heading: string;
      text: string[];
    };
    elements: PropsManager[];
  }[];
};
export default async function PageEquipment() {
  let data: Api;
  try {
    const response = await fetch('http://localhost:3000/equipment/api');
    data = await response.json();
  } catch (e) {
    throw e;
  }

  const DownCell = {
    element1: { linkImage: InstituteImage, linkPage: '/institute', text: 'ОБ ИНСТИТУТЕ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ' },
    element2: { linkImage: DirectionsImage, linkPage: '/directions', text: 'ПРОГРАММЫ ОБУЧЕНИЯ И ИХ ПРОФИЛИ' },
    element3: { linkImage: RTUITLab, linkPage: 'https://rtuitlab.dev', text: 'IT лабораториЯ ИИТ', targetBlank: true },
  };

  return (
    <>
      <Screensaver
        id={data.sections.map((elem) => elem.sectionId)}
        linkImage={data.menuSection.image}
        text={data.menuSection.text}
        alt={'Заставка - оборудование'}
      />
      <main>
        {data.sections.map((elem, index) => (
          <Section key={'equipment_section_' + index} id={elem.sectionId.link}>
            <TitleText key={'title_text_' + index} heading={elem.titleText.heading} text={elem.titleText.text} />
            {elem.elements.map((elem2, index2) =>
              Object.keys(elem2).length !== 0 ? elementsManager(elem2 as PropsManager, index, index2) : <></>,
            )}
          </Section>
        ))}
        <DownTransition array={[DownCell.element1, DownCell.element2, DownCell.element3]} />
      </main>
    </>
  );
}

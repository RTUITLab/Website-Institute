import Screensaver from '@/components/screensaver';
import TitleText from '../../components/titleText';
import Section from '@/components/sections';
import RTUITLab from '@/public/image/Лаба_Переход.webp';
import Infrastructure from '@/public/image/Инфраструктура.webp';
import DownTransition from '@/components/downTransition';
import InstituteImage from '@/public/image/институт.webp';
import elementsManager, { PropsManager } from '@/elementsManager';
import { StaticImageData } from 'next/image';
import getRequest from '@/api_logic/get';

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

export default async function Directions() {
  const data: Api = await getRequest('http://localhost:3000/directions/api');

  const DownCell = {
    element1: { linkImage: InstituteImage, linkPage: '/institute', text: 'ОБ ИНСТИТУТЕ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ' },
    element2: { linkImage: RTUITLab, linkPage: 'https://rtuitlab.dev', text: 'IT лабораториЯ ИИТ', targetBlank: true },
    element3: { linkImage: Infrastructure, linkPage: '/infrastructure', text: 'КАМПУС, ИНФРАСТРУКТУРА И МЕГАЛАБОРАТОРИИ' },
  };

  return (
    <>
      <Screensaver
        id={data.sections.map((elem) => elem.sectionId)}
        linkImage={data.menuSection.image}
        text={data.menuSection.text}
        alt={'Заставка - направления'}
      />
      <main>
        {data.sections.map((elem, index) => (
          <Section key={'directions_section_' + index} id={elem.sectionId.link}>
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

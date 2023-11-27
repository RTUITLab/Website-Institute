import Screensaver from '@/components/screensaver';
import Section from '@/components/sections';
import TitleText from '@/components/titleText';
import elementsManager, { PropsManager } from '@/elementsManager';
import { StaticImageData } from 'next/image';

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
export default async function Home() {
  let data: Api;
  try {
    const response = await fetch('http://localhost:3000/api');
    data = await response.json();
  } catch (e) {
    throw e;
  }

  return (
    <>
      <Screensaver
        id={data.sections.map((elem) => elem.sectionId)}
        linkImage={data.menuSection.image}
        text={data.menuSection.text}
        alt={'Заставка - главная страница'}
      />
      <main>
        {data.sections.map((elem, index) => (
          <Section key={'home_section_' + index} id={elem.sectionId.link}>
            <TitleText key={'title_text_' + index} heading={elem.titleText.heading} text={elem.titleText.text} />
            {elem.elements.map((elem2, index2) =>
              Object.keys(elem2).length !== 0 ? elementsManager(elem2 as PropsManager, index, index2) : <></>,
            )}
          </Section>
        ))}
      </main>
    </>
  );
}

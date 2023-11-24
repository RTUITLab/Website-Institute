import Screensaver from '@/components/screensaver';
import Section from '@/components/sections';
import TitleText from '@/components/titleText';
import elementsManager, { PropsManager } from '@/elementsManager';
import { StaticImageData } from 'next/image';
import { notFound } from 'next/navigation';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

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
    elements:
      | {
          type: 'transition';
          array: {
            linkImage: StaticImageData;
            text: string;
            linkPage: string;
            alt: string;
          }[];
          reverse: boolean;
        }[]
      | {
          type: 'table';
          array: {
            numberOrImage: StaticImageData | number | string;
            heading: string;
            text: string[];
          }[];
          side: 'left' | 'center';
          background: 'white' | 'gray';
          gapInside: '36px' | '36px/auto' | '48px';
          gapOutside: '48px' | '32px' | '16px' | '24px';
        }[];
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

import { StaticImageData } from 'next/image';
import BuilderComponents, { PropsBuilderComponents } from '@/builderPages/builderComponents';
import Screensaver from '@/components/screensaver';
import Section from '@/components/sections';
import TitleText from '@/components/titleText';
import DownTransition from '@/components/downTransition';

export type PropsBuilderPages = {
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
    elements: PropsBuilderComponents[];
  }[];
  downTransition: null | {
    heading: string | null;
    element1: { linkImage: StaticImageData; linkPage: string; text: string; targetBlank?: boolean };
    element2: { linkImage: StaticImageData; linkPage: string; text: string; targetBlank?: boolean };
    element3: { linkImage: StaticImageData; linkPage: string; text: string; targetBlank?: boolean };
  };
};

export default function BuilderPages(data: PropsBuilderPages, page: string) {
  return (
    <>
      <Screensaver
        id={data.sections.map((elem) => elem.sectionId)}
        linkImage={data.menuSection.image}
        text={data.menuSection.text}
        alt={''}
      />
      <main>
        {data.sections.map((elem, index) => (
          <Section key={page + '_section_' + index} id={elem.sectionId.link}>
            <TitleText key={'title_text_' + index} heading={elem.titleText.heading} text={elem.titleText.text} />
            {elem.elements.map((elem2, index2) =>
              Object.keys(elem2).length !== 0 ? BuilderComponents(elem2 as PropsBuilderComponents, index, index2) : <></>,
            )}
          </Section>
        ))}
        {data.downTransition !== null ? (
          <DownTransition
            array={[data.downTransition.element1, data.downTransition.element2, data.downTransition.element3]}
            heading={data.downTransition.heading}
          />
        ) : (
          <></>
        )}
      </main>
    </>
  );
}

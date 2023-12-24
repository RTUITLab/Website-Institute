import Screensaver from '@/components/screensaver';
import Section from '@/components/sections';
import ImageScreensaver1 from '@/public/image/лаба_инженерка.webp';
import ImageScreensaver2 from '@/public/image/лаба_кресла.webp';
import ImageScreensaver3 from '@/public/image/лаба_мокап.webp';
import ImageScreensaver4 from '@/public/image/лаба_вр.webp';
import TitleText from '@/components/titleText';
import Style from './megalaboratory.module.scss';
import { Table, TableImages } from '@/components/tables/table';
import DownTransition from '@/components/downTransition';
import UsageCardTable from '@/components/cards/usageCard';
import PhotoSection from '@/components/photo';
import getMegalaboratory from '@/api_logic/getMegalaboratory';
import elementsManager, { PropsManager } from '@/elementsManager';
import { StaticImageData } from 'next/image';

const DownCell = {
  laboratory_import_substitution_of_information_technologies: {
    element1: {
      linkImage: ImageScreensaver4,
      linkPage: '/infrastructure/laboratory_immersive_technologies',
      text: 'Лаборатория иммерсивных технологий',
    },
    element2: {
      linkImage: ImageScreensaver2,
      linkPage: '/infrastructure/laboratory_technology_analytics_modeling_design_and_digital_prototyping',
      text: 'Универсальная учебно-научная лаборатория технологий аналитики, моделирования, проектирования и цифрового прототипирования',
    },
    element3: {
      linkImage: ImageScreensaver3,
      linkPage: '/infrastructure/laboratory_motion_capture',
      text: 'Лаборатория захвата движения',
    },
  },
  laboratory_technology_analytics_modeling_design_and_digital_prototyping: {
    element1: {
      linkImage: ImageScreensaver1,
      linkPage: '/infrastructure/laboratory_import_substitution_of_information_technologies',
      text: 'Учебно-научный испытательный комплекс «Импортозамещение информационных технологий»',
    },
    element2: {
      linkImage: ImageScreensaver3,
      linkPage: '/infrastructure/laboratory_motion_capture',
      text: 'Лаборатория захвата движения',
      position: true,
    },
    element3: {
      linkImage: ImageScreensaver4,
      linkPage: '/infrastructure/laboratory_immersive_technologies',
      text: 'Лаборатория иммерсивных технологий',
    },
  },
  laboratory_motion_capture: {
    element1: {
      linkImage: ImageScreensaver2,
      linkPage: '/infrastructure/laboratory_technology_analytics_modeling_design_and_digital_prototyping',
      text: 'Универсальная учебно-научная лаборатория технологий аналитики, моделирования, проектирования и цифрового прототипирования',
    },
    element2: {
      linkImage: ImageScreensaver4,
      linkPage: '/infrastructure/laboratory_immersive_technologies',
      text: 'Лаборатория иммерсивных технологий',
      position: true,
    },
    element3: {
      linkImage: ImageScreensaver1,
      linkPage: '/infrastructure/laboratory_import_substitution_of_information_technologies',
      text: 'Учебно-научный испытательный комплекс «Импортозамещение информационных технологий»',
    },
  },
  laboratory_immersive_technologies: {
    element1: {
      linkImage: ImageScreensaver3,
      linkPage: '/infrastructure/laboratory_motion_capture',
      text: 'Лаборатория захвата движения',
    },
    element2: {
      linkImage: ImageScreensaver1,
      linkPage: '/infrastructure/laboratory_import_substitution_of_information_technologies',
      text: 'Учебно-научный испытательный комплекс «Импортозамещение информационных технологий»',
    },
    element3: {
      linkImage: ImageScreensaver2,
      linkPage: '/infrastructure/laboratory_technology_analytics_modeling_design_and_digital_prototyping',
      text: 'Универсальная учебно-научная лаборатория технологий аналитики, моделирования, проектирования и цифрового прототипирования',
    },
  },
};

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

export default async function Megalaboratory({ params }: { params: { megalaboratory: string } }) {
  const data: Api = await getMegalaboratory(params.megalaboratory);

  return (
    <>
      <Screensaver
        id={data.sections.map((elem) => elem.sectionId)}
        linkImage={data.menuSection.image}
        text={data.menuSection.text}
        alt={'Заставка - мегалаборатория'}
      />
      <main>
        {data.sections.map((elem, index) => (
          <Section key={'megalaboratory_section_' + index} id={elem.sectionId.link}>
            <TitleText key={'title_text_' + index} heading={elem.titleText.heading} text={elem.titleText.text} />
            {elem.elements.map((elem2, index2) =>
              Object.keys(elem2).length !== 0 ? elementsManager(elem2 as PropsManager, index, index2) : <></>,
            )}
          </Section>
        ))}
        <DownTransition
          heading={'ДРУГИЕ МЕГАЛАБАРАТОРИИ ИНСТИТУТА'}
          array={[
            DownCell[params.megalaboratory as keyof typeof DownCell].element1,
            DownCell[params.megalaboratory as keyof typeof DownCell].element2,
            DownCell[params.megalaboratory as keyof typeof DownCell].element3,
          ]}
        />
      </main>
    </>
  );
}

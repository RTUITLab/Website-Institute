import { StaticImageData } from 'next/image';
import Transition from '@/components/tables/transition';
import { Table } from '@/components/tables/table';
import DownTransition from '@/components/downTransition';
import DivAchievementCards from '@/components/cards/achievementCard';
import AdmissionCard from '@/components/cards/admissionCard';
import DivImageCards from '@/components/cards/imageCard';
import DivPartnersCards from '@/components/cards/partnersCard';
import DivTextCards from '@/components/cards/textCard';

export type PropsManager =
  | {
      type: 'transition';
      array: {
        linkImage: StaticImageData;
        text: string;
        linkPage: string;
        alt: string;
      }[];
      reverse: boolean;
    }
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
    }
  | {
      type: 'downTransition';
      array: {
        linkImage: StaticImageData;
        text: string;
        linkPage: string;
        targetBlank?: boolean | undefined;
      }[];
      heading?: string;
    }
  | {
      type: 'textCard';
      array: {
        image: StaticImageData;
        heading: string;
        text: string;
        backgroundBlue: boolean;
      }[];
    }
  | {
      type: 'imageCard';
      array: {
        image: StaticImageData;
        heading: string;
      }[];
    }
  | {
      type: 'partnersCard';
      array: {
        image: StaticImageData;
        heading: string;
        text: string;
      }[];
    }
  | {
      type: 'achievementCard';
      array: {
        image: StaticImageData;
        heading: string;
        text: string[];
      }[];
    }
  | {
      type: 'admissionCard';
      heading: string;
      buttonOne: {
        link: string;
        text: string;
      };
      buttonTwo: {
        link: string;
        text: string;
      };
      text: string;
      image: StaticImageData;
    };

export default function elementsManager(element: PropsManager, index: number, index2: number) {
  const data = element;

  switch (data.type) {
    case 'transition':
      return <Transition key={'section_' + index + '_transition_' + index2} array={data.array} reverse={data.reverse} />;
    case 'table':
      return (
        <Table
          key={'section_' + index + '_table_' + index2}
          array={data.array}
          side={data.side}
          gapInside={data.gapInside}
          gapOutside={data.gapOutside}
          background={data.background}
        />
      );
    case 'downTransition':
      return <DownTransition key={'section_' + index + '_transition_' + index2} heading={data.heading} array={data.array} />;
    case 'achievementCard':
      return <DivAchievementCards key={'section_' + index + '_transition_' + index2} array={data.array} />;
    case 'admissionCard':
      return (
        <AdmissionCard
          key={'section_' + index + '_transition_' + index2}
          heading={data.heading}
          text={data.text}
          image={data.image}
          buttonOne={data.buttonOne}
          buttonTwo={data.buttonTwo}
        />
      );
    case 'imageCard':
      return <DivImageCards key={'section_' + index + '_transition_' + index2} array={data.array} />;
    case 'partnersCard':
      return (
        <DivPartnersCards
          key={'section_' + index + '_transition_' + index2}
          element1={data.array[0]}
          element2={data.array[1]}
          element3={data.array[2]}
          element4={data.array[3]}
          element5={data.array[4]}
        />
      );
    case 'textCard':
      return <DivTextCards key={'section_' + index + '_transition_' + index2} textCard1={data.array[0]} textCard2={data.array[1]} />;
    default:
      return <></>;
  }
}

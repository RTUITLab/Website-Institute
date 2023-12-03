import { StaticImageData } from 'next/image';
import Transition from '@/components/tables/transition';
import { Table, TableImages } from '@/components/tables/table';
import DownTransition from '@/components/downTransition';
import DivAchievementCards from '@/components/cards/achievementCard';
import AdmissionCard from '@/components/cards/admissionCard';
import DivImageCards from '@/components/cards/imageCard';
import DivPartnersCards from '@/components/cards/partnersCard';
import DivTextCards from '@/components/cards/textCard';
import { BlockImage } from '@/components/blocks';
import ImageAndTextCard from '@/components/cards/imageAndTextCard';
import Images from '@/components/tables/images';

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
      imgSize: '110px' | '152px';
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
    }
  | {
      type: 'tableImages';
      array: {
        linkImage: StaticImageData;
        heading: string;
        text: string | null;
        position: boolean;
      }[];
      styleTableImages: 'twoToOne' | 'sixTable' | 'default';
    }
  | {
      type: 'imagesTable';
      array: StaticImageData[];
      titleKeyAndAlt: string;
    }
  | {
      type: 'imageAndTextCard';
      image: StaticImageData;
      heading: string;
      text: string[];
      buttons:
        | null
        | {
            targetBlank: boolean;
            link: string;
            text: string;
          }[];
      reverse: boolean;
    }
  | {
      type: 'blockImage';
      image: StaticImageData;
      heading: string;
      buttonBasic: string;
      buttonImportant: string;
      reverse: boolean;
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
          imgSize={data.imgSize}
        />
      );
    case 'downTransition':
      return <DownTransition key={'section_' + index + '_down_transition_' + index2} heading={data.heading} array={data.array} />;
    case 'achievementCard':
      return <DivAchievementCards key={'section_' + index + '_div_achievement_cards_' + index2} array={data.array} />;
    case 'admissionCard':
      return (
        <AdmissionCard
          key={'section_' + index + '_admission_card_' + index2}
          heading={data.heading}
          text={data.text}
          image={data.image}
          buttonOne={data.buttonOne}
          buttonTwo={data.buttonTwo}
        />
      );
    case 'imageCard':
      return <DivImageCards key={'section_' + index + '_div_image_cards_' + index2} array={data.array} />;
    case 'partnersCard':
      return (
        <DivPartnersCards
          key={'section_' + index + '_div_partners_cards_' + index2}
          element1={data.array[0]}
          element2={data.array[1]}
          element3={data.array[2]}
          element4={data.array[3]}
          element5={data.array[4]}
        />
      );
    case 'textCard':
      return <DivTextCards key={'section_' + index + '_div_text_cards_' + index2} textCard1={data.array[0]} textCard2={data.array[1]} />;
    case 'tableImages':
      return (
        <TableImages key={'section_' + index + '_table_images_' + index2} array={data.array} styleTableImages={data.styleTableImages} />
      );
    case 'blockImage':
      return (
        <BlockImage
          key={'section_' + index + '_block_image_' + index2}
          linkImage={data.image}
          heading={data.heading}
          reverse={data.reverse}
          buttonImportant={data.buttonImportant}
          buttonBasic={data.buttonBasic}
        />
      );
    case 'imageAndTextCard':
      return (
        <ImageAndTextCard
          key={'section_' + index + '_image_and_text_card_' + index2}
          reverse={data.reverse}
          image={data.image}
          heading={data.heading}
          text={data.text}
          buttons={data.buttons}
        />
      );
    case 'imagesTable':
      return <Images key={'section_' + index + '_images_table_' + index2} array={data.array} titleKeyAndAlt={data.titleKeyAndAlt} />;
    default:
      return <></>;
  }
}

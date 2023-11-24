import { StaticImageData } from 'next/image';
import Transition from '@/components/tables/transition';
import { Table } from '@/components/tables/table';
import DownTransition from '@/components/downTransition';

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
      return <DownTransition heading={data.heading} array={data.array} />;
    default:
      return <></>;
  }
}

import { StaticImageData } from 'next/image';
import SvgQualification from '@/public/svg/Qualification.svg';
import SvgFormTraining from '@/public/svg/FormTraining.svg';
import SvgDurationTraining from '@/public/svg/DurationTraining.svg';
import SvgEntranceTests from '@/public/svg/EntranceTests.svg';
import getRequest from '@/apiLogic/getRequest';
import SvgBudgetPlaces from '@/public/svg/BudgetPlaces.svg';
import SvgCost from '@/public/svg/Cost.svg';
import SvgOtherSources from '@/public/svg/OtherSources.svg';
import ReplaceApi from '@/public/image/приёмка_замена.webp';

async function ParserInformation(
  url: string,
  qualification: string[],
  form: string[],
  year: string[],
  exam: string[],
  linkMIREA: string,
  linkAdmissionsCommittee: string,
  ChatVK: string | null,
  ChatTG: string | null,
) {
  type Cell = {
    numberOrImage: StaticImageData | number | string;
    heading: string;
    text: null | string[];
    link?: string[] | undefined;
  };

  const data: Cell[] = [
    {
      numberOrImage: SvgQualification,
      heading: 'Квалификация',
      text: qualification,
    },
    {
      numberOrImage: SvgFormTraining,
      heading: 'Форма обучения',
      text: form,
    },
    {
      numberOrImage: SvgDurationTraining,
      heading: 'Срок обучения',
      text: year,
    },
    {
      numberOrImage: SvgEntranceTests,
      heading: 'Вступительные испытания',
      text: exam,
    },
  ];
  try {
    const request = await getRequest(url);
    if (request.guide_treshold_scores && request.places_budget && request.price) {
      data.splice(3, 0, {
        numberOrImage: SvgQualification,
        heading: 'Проходной балл',
        text: [request.guide_treshold_scores.at(-1).treshold_score + ' в ' + request.guide_treshold_scores.at(-1).year + ' году'],
      });
      const places = ['Всего мест: ' + request.places_budget];
      if (request.places_quota) {
        places.push('Особая квота: ' + request.places_quota);
      }
      if (request.places_special_quota) {
        places.push('Отдельная квота: ' + request.places_special_quota);
      }
      if (request.places_target) {
        places.push('Целевая квота: ' + request.places_target);
      }
      data.splice(4, 0, {
        numberOrImage: SvgBudgetPlaces,
        heading: 'Количество бюджетных мест',
        text: places,
      });
      const price = ['Полная стоимость: ' + request.price];
      if (request.price_discount_10) {
        price.push('С учётом базовой скидки: ' + request.price_discount_10);
      }
      if (request.price_discount_20) {
        price.push('С учётом специальной скидки: ' + request.price_discount_20);
      }
      data.push({
        numberOrImage: SvgCost,
        heading: 'Стоимость обучения в год',
        text: price,
      });
      const textOtherSources = ['Сайт РТУ МИРЭА', 'Сайт приёмной комиссии РТУ МИРЭА'];
      const linkOtherSources = [linkMIREA, linkAdmissionsCommittee];
      if (ChatVK) {
        textOtherSources.push('Чат для абитуриентов в VK');
        linkOtherSources.push(ChatVK);
      }
      if (ChatTG) {
        textOtherSources.push('Чат для абитуриентов в TG');
        linkOtherSources.push(ChatTG);
      }
      data.push({
        numberOrImage: SvgOtherSources,
        heading: ChatVK || ChatTG ? 'Другие источники информации и чаты' : 'Другие источники информации',
        text: textOtherSources,
        link: linkOtherSources,
      });
    }
  } catch (e) {}
  return data;
}

type elementsInformationType =
  | {
      type: 'table';
      array: {
        numberOrImage: StaticImageData | number | string;
        heading: string;
        text: string[] | null;
        link?: string[] | undefined;
      }[];
      side: 'left' | 'center';
      background: 'white' | 'gray';
      gapInside: '36px' | '36px/auto' | '48px';
      gapOutside: '48px' | '32px' | '16px' | '24px';
      imgSize: '110px' | '152px';
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

export async function createElementsInformation(
  urlInformation: string,
  qualification: string[],
  form: string[],
  year: string[],
  exam: string[],
  linkMIREA: string,
  linkAdmissionsCommittee: string,
  ChatVK: string | null,
  ChatTG: string | null,
) {
  const elementsInformation: elementsInformationType[] = [
    {
      type: 'table',
      array: await ParserInformation(urlInformation, qualification, form, year, exam, linkMIREA, linkAdmissionsCommittee, ChatVK, ChatTG),
      side: 'left',
      background: 'white',
      gapInside: '36px/auto',
      gapOutside: '16px',
      imgSize: '110px',
    },
  ];
  if (elementsInformation[0].type === 'table' && elementsInformation[0].array.length === 4) {
    elementsInformation.push({
      type: 'admissionCard',
      heading: 'ПРИЁМНАЯ КОММИССИЯ',
      text: 'На официальном сайте приёмной комиссии РТУ МИРЭА вы найдете всю необходимую информацию о поступлении: стоимость обучение, количество бюджетных мест и проходные баллы в предыдущие годы. Кроме того, вы сможете более детально ознакомиться с учебным направлением на официальном сайте РТУ МИРЭА.',
      image: ReplaceApi,
      buttonOne: {
        link: linkAdmissionsCommittee,
        text: 'Сайт приёмной комиссии РТУ МИРЭА',
      },
      buttonTwo: {
        link: linkMIREA,
        text: 'Сайт РТУ МИРЭА',
      },
    });
  }
  return elementsInformation;
}

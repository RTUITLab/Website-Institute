import Screensaver from '@/components/screensaver';
import TitleText from '@/components/titleText';
import Style from './direction.module.scss';
import { Table } from '@/components/tables/table';
import GeneralDisciplines from '@/public/svg/Выпускники_Вика.svg';
import ProfileDisciplines from '@/public/svg/Профильные_дисциплины_Вика.svg';
import DisciplinesToChoose from '@/public/svg/Дисциплины_на_выбор_Вика.svg';
import { StaticImageData } from 'next/image';
import SvgQualification from '@/public/svg/Qualification.svg';
import SvgFormTraining from '@/public/svg/FormTraining.svg';
import SvgDurationTraining from '@/public/svg/DurationTraining.svg';
import SvgEntranceTests from '@/public/svg/EntranceTests.svg';
import SvgBudgetPlaces from '@/public/svg/BudgetPlaces.svg';
import SvgPassingScore from '@/public/svg/PassingScore.svg';
import SvgCost from '@/public/svg/Cost.svg';
import SvgOtherSources from '@/public/svg/OtherSources.svg';
import SectionProfiles from '@/components/profiles/section';
import { ApiProfiles, StaticData } from '@/api';
import Section from '@/components/sections';
import AdmissionCard from '@/components/cards/admissionCard';
import ReplaceApi from '@/public/image/приёмка_замена.webp';
import DownTransition from '@/components/downTransition';

const arrayCurriculum = [
  {
    numberOrImage: GeneralDisciplines,
    heading: 'Общие дисциплины направления',
    text: null,
  },
  {
    numberOrImage: ProfileDisciplines,
    heading: 'Специализированные дисциплины профиля',
    text: null,
  },
  {
    numberOrImage: DisciplinesToChoose,
    heading: 'Блоки дисциплин профиля на выбор',
    text: null,
  },
];

async function getAPI(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      last_year_threshold: await data.last_year_threshold,
      places_budget: await data.places_budget,
      places_quota: await data.places_quota,
      places_special_quota: await data.places_special_quota,
      places_target: await data.places_target,
      price: await data.price,
      price_discount_10: await data.price_discount_10,
      price_discount_20: await data.price_discount_20,
    };
  } catch {
    return {
      last_year_threshold: null,
      places_budget: null,
      places_quota: null,
      places_special_quota: null,
      places_target: null,
      price: null,
      price_discount_10: null,
      price_discount_20: null,
    };
  }
}

export default async function Direction({ params }: { params: { direction: string } }) {
  const textCurriculum: string =
    'Учебный план включает три типа дисциплин: общие, специализированные дисциплины профиля и блок дисциплин профиля на выбор. Общие дисциплины изучаются независимо от выбранного профиля, их прохождение обязательно для всех студентов направления.  Специализированные дисциплины профиля предназначены для студентов определенных профилей и изучаются только ими. Блоки дисциплин профиля на выбор, предоставляет студентам возможность выбрать дисциплины, и изучать только их. ';

  const arraySpecializationFact: { numberOrImage: StaticImageData | string | number; heading: string; text: string[] | null }[] = [];

  if (StaticData(params.direction).specializationFact.partners !== null) {
    arraySpecializationFact.push({
      numberOrImage: String(StaticData(params.direction).specializationFact.partners!.number),
      heading: StaticData(params.direction).specializationFact.partners!.text,
      text: null,
    });
  }

  arraySpecializationFact.push({
    numberOrImage: String(StaticData(params.direction).specializationFact.quantity.number),
    heading: StaticData(params.direction).specializationFact.quantity.text,
    text: null,
  });

  arraySpecializationFact.push({
    numberOrImage: StaticData(params.direction).specializationFact.graduates + '%',
    heading: 'Выпускников работающих по специальности',
    text: null,
  });

  const arrayTable: { numberOrImage: StaticImageData | string | number; heading: string; text: string[] | null }[] = StaticData(
    params.direction,
  ).sphereDirection.map((elem) => {
    return { numberOrImage: elem.linkImage, heading: elem.heading, text: [elem.text] };
  });

  const arrayInformation: { numberOrImage: StaticImageData; heading: string; text: string[] | null; link?: string[] | null | undefined }[] =
    [
      {
        numberOrImage: SvgQualification,
        heading: 'Квалификация',
        text: [StaticData(params.direction).dataAdmission.Qualification],
      },
      {
        numberOrImage: SvgFormTraining,
        heading: 'Форма обучения',
        text: [StaticData(params.direction).dataAdmission.FormTraining],
      },
      {
        numberOrImage: SvgDurationTraining,
        heading: 'Срок обучения',
        text: StaticData(params.direction).dataAdmission.DurationTraining.map((elem) => elem),
      },
    ];

  if (StaticData(params.direction).dataAdmission.urlAPI !== null && StaticData(params.direction).dataAdmission.urlAPI !== undefined) {
    const getDataApi = await getAPI(StaticData(params.direction).dataAdmission.urlAPI!);

    if (
      getDataApi.places_budget !== null &&
      getDataApi.places_budget !== undefined &&
      getDataApi.last_year_threshold !== null &&
      getDataApi.last_year_threshold !== undefined &&
      getDataApi.price !== null &&
      getDataApi.price !== undefined
    ) {
      const textPlaces = ['Всего в 2023 году: ' + getDataApi.places_budget];
      if (getDataApi.places_quota !== null && getDataApi.places_quota !== undefined) {
        textPlaces.push('Особая квота: ' + getDataApi.places_quota);
      }
      if (getDataApi.places_special_quota !== null && getDataApi.places_special_quota !== undefined) {
        textPlaces.push('Отдельная квота: ' + getDataApi.places_special_quota);
      }
      if (getDataApi.places_target !== null && getDataApi.places_target !== undefined) {
        textPlaces.push('Целевая квота: ' + getDataApi.places_target);
      }

      const textPrice = ['Полная стоимость: ' + getDataApi.price];
      if (getDataApi.price_discount_10 !== null && getDataApi.price_discount_10 !== undefined) {
        textPrice.push('С учётом базовой скидки: ' + getDataApi.price_discount_10);
      }
      if (getDataApi.price_discount_20 !== null && getDataApi.price_discount_20 !== undefined) {
        textPrice.push('С учётом специальной скидки: ' + getDataApi.price_discount_20);
      }

      const textOtherSources = ['Сайт РТУ МИРЭА', 'Сайт приёмной комиссии РТУ МИРЭА'];
      const linkOtherSources = [
        StaticData(params.direction).dataAdmission.OtherSources.WebsiteMIREA,
        StaticData(params.direction).dataAdmission.OtherSources.WebsiteAdmissionsCommittee,
      ];
      if (
        StaticData(params.direction).dataAdmission.OtherSources.ChatVK !== null &&
        StaticData(params.direction).dataAdmission.OtherSources.ChatVK !== undefined
      ) {
        textOtherSources.push('Чат для абитуриентов в VK');
        linkOtherSources.push(StaticData(params.direction).dataAdmission.OtherSources.ChatVK as string);
      }
      if (
        StaticData(params.direction).dataAdmission.OtherSources.ChatTG !== null &&
        StaticData(params.direction).dataAdmission.OtherSources.ChatTG !== undefined
      ) {
        textOtherSources.push('Чат для абитуриентов в TG');
        linkOtherSources.push(StaticData(params.direction).dataAdmission.OtherSources.ChatTG as string);
      }

      arrayInformation.push(
        {
          numberOrImage: SvgPassingScore,
          heading: 'Проходной балл',
          text: [
            getDataApi.last_year_threshold +
              (params.direction === '01-04-04' ||
              params.direction === '09-04-01' ||
              params.direction === '09-04-03' ||
              params.direction === '09-04-04'
                ? ' в 2022 году'
                : ' в 2023 году'),
          ],
        },
        {
          numberOrImage: SvgEntranceTests,
          heading: 'Вступительные испытания',
          text: StaticData(params.direction).dataAdmission.EntranceTests.map((elem) => elem),
        },
        {
          numberOrImage: SvgBudgetPlaces,
          heading: 'Количество бюджетных мест',
          text: textPlaces,
        },
        {
          numberOrImage: SvgCost,
          heading: 'Стоимость обучения в год',
          text: textPrice,
        },
        {
          numberOrImage: SvgOtherSources,
          heading:
            typeof StaticData(params.direction).dataAdmission.OtherSources.ChatVK === 'string' ||
            typeof StaticData(params.direction).dataAdmission.OtherSources.ChatTG === 'string'
              ? 'Другие источники информации и чаты'
              : 'Другие источники информации',
          text: textOtherSources,
          link: linkOtherSources,
        },
      );
    } else {
      arrayInformation.push({
        numberOrImage: SvgEntranceTests,
        heading: 'Вступительные испытания',
        text: StaticData(params.direction).dataAdmission.EntranceTests.map((elem) => {
          return elem;
        }),
      });
    }
  } else {
    arrayInformation.push({
      numberOrImage: SvgEntranceTests,
      heading: 'Вступительные испытания',
      text: StaticData(params.direction).dataAdmission.EntranceTests.map((elem) => {
        return elem;
      }),
    });
  }

  const id = [
    { link: 'specificity', text: 'ЦЕЛЬ ПРОГРАММЫ' },
    { link: 'entrance', text: 'ИНФОРМАЦИЯ ПО ПОСТУПЛЕНИЮ' },
    { link: 'profiles', text: 'СПЕЦИАЛЬНОСТИ/ПРОФИЛИ' },
  ];

  if (StaticData(params.direction).video !== null) {
    id.push({ link: 'video', text: 'ПОСМОТРЕТЬ ВИДЕОРОЛИК' });
  }

  const DownCell = {
    '01-03-04': {
      heading: 'ДРУГИЕ НАПРАВЛЕНИЯ БАКАЛАВРИАТА ИНСТИТУТА ИТ',
      element1: { linkImage: StaticData('09-03-04').linkImage, linkPage: '/directions/09-03-04', text: '09.03.04 | Программная инженерия' },
      element2: {
        linkImage: StaticData('09-03-01').linkImage,
        linkPage: '/directions/09-03-01',
        text: '09.03.01 | Информатика и вычислительная техника',
      },
      element3: {
        linkImage: StaticData('09-03-03').linkImage,
        linkPage: '/directions/09-03-03',
        text: '09.03.03 | Прикладная информатика',
      },
    },
    '09-03-01': {
      heading: 'ДРУГИЕ НАПРАВЛЕНИЯ БАКАЛАВРИАТА ИНСТИТУТА ИТ',
      element1: { linkImage: StaticData('01-03-04').linkImage, linkPage: '/directions/01-03-04', text: '01.03.04 | Прикладная математика' },
      element2: {
        linkImage: StaticData('09-03-03').linkImage,
        linkPage: '/directions/09-03-03',
        text: '09.03.03 | Прикладная информатика',
      },
      element3: { linkImage: StaticData('09-03-04').linkImage, linkPage: '/directions/09-03-04', text: '09.03.04 | Программная инженерия' },
    },
    '09-03-03': {
      heading: 'ДРУГИЕ НАПРАВЛЕНИЯ БАКАЛАВРИАТА ИНСТИТУТА ИТ',
      element1: {
        linkImage: StaticData('09-03-01').linkImage,
        linkPage: '/directions/09-03-01',
        text: '09.03.01 | Информатика и вычислительная техника',
      },
      element2: { linkImage: StaticData('09-03-04').linkImage, linkPage: '/directions/09-03-04', text: '09.03.04 | Программная инженерия' },
      element3: { linkImage: StaticData('01-03-04').linkImage, linkPage: '/directions/01-03-04', text: '01.03.04 | Прикладная математика' },
    },
    '09-03-04': {
      heading: 'ДРУГИЕ НАПРАВЛЕНИЯ БАКАЛАВРИАТА ИНСТИТУТА ИТ',
      element1: {
        linkImage: StaticData('09-03-03').linkImage,
        linkPage: '/directions/09-03-03',
        text: '09.03.03 | Прикладная информатика',
      },
      element2: { linkImage: StaticData('01-03-04').linkImage, linkPage: '/directions/01-03-04', text: '01.03.04 | Прикладная математика' },
      element3: {
        linkImage: StaticData('09-03-01').linkImage,
        linkPage: '/directions/09-03-01',
        text: '09.03.01 | Информатика и вычислительная техника',
      },
    },
    '01-04-04': {
      heading: 'ДРУГИЕ НАПРАВЛЕНИЯ МАГИСТРАТУРЫ ИНСТИТУТА ИТ',
      element1: { linkImage: StaticData('09-04-04').linkImage, linkPage: '/directions/09-04-03', text: '09.04.03 | Программная инженерия' },
      element2: {
        linkImage: StaticData('09-04-01').linkImage,
        linkPage: '/directions/09-04-01',
        text: '09.04.01 | Информатика и вычислительная техника',
      },
      element3: {
        linkImage: StaticData('09-04-03').linkImage,
        linkPage: '/directions/09-04-03',
        text: '09.04.03 | Прикладная информатика',
      },
    },
    '09-04-01': {
      heading: 'ДРУГИЕ НАПРАВЛЕНИЯ МАГИСТРАТУРЫ ИНСТИТУТА ИТ',
      element1: { linkImage: StaticData('01-04-04').linkImage, linkPage: '/directions/01-04-04', text: '01.04.04 | Прикладная математика' },
      element2: {
        linkImage: StaticData('09-04-03').linkImage,
        linkPage: '/directions/09-04-03',
        text: '09.04.03 | Прикладная информатика',
      },
      element3: { linkImage: StaticData('09-04-04').linkImage, linkPage: '/directions/09-04-03', text: '09.04.03 | Программная инженерия' },
    },
    '09-04-03': {
      heading: 'ДРУГИЕ НАПРАВЛЕНИЯ МАГИСТРАТУРЫ ИНСТИТУТА ИТ',
      element1: {
        linkImage: StaticData('09-04-01').linkImage,
        linkPage: '/directions/09-04-01',
        text: '09.04.01 | Информатика и вычислительная техника',
      },
      element2: { linkImage: StaticData('09-04-04').linkImage, linkPage: '/directions/09-04-04', text: '09.04.03 | Программная инженерия' },
      element3: { linkImage: StaticData('01-04-04').linkImage, linkPage: '/directions/01-04-04', text: '01.04.04 | Прикладная математика' },
    },
    '09-04-04': {
      heading: 'ДРУГИЕ НАПРАВЛЕНИЯ МАГИСТРАТУРЫ ИНСТИТУТА ИТ',
      element1: {
        linkImage: StaticData('09-04-03').linkImage,
        linkPage: '/directions/09-04-03',
        text: '09.04.03 | Прикладная информатика',
      },
      element2: { linkImage: StaticData('01-04-04').linkImage, linkPage: '/directions/01-04-04', text: '01.04.04 | Прикладная математика' },
      element3: {
        linkImage: StaticData('09-04-01').linkImage,
        linkPage: '/directions/09-04-01',
        text: '09.04.01 | Информатика и вычислительная техника',
      },
    },
  };

  return (
    <>
      <Screensaver
        id={id}
        linkImage={StaticData(params.direction).linkImage}
        text={StaticData(params.direction).title}
        alt={'Заставка - инфраструктура'}
        backgroundBlack={true}
      />
      <main>
        <Section id={id[0].link}>
          <TitleText heading={StaticData(params.direction).heading} text={[StaticData(params.direction).text]} />
          <Table array={arrayTable} side={'left'} background={'gray'} gapInside={'36px'} gapOutside={'32px'} />
        </Section>
        <Section id={id[1].link}>
          <TitleText heading={'ИНФОРМАЦИЯ ПО ПОСТУПЛЕНИЮ'} />
          <Table array={arrayInformation} side={'left'} background={'white'} gapInside={'36px/auto'} gapOutside={'16px'} />
          {arrayInformation.length === 4 ? (
            <AdmissionCard
              heading={'ПРИЁМНАЯ КОММИССИЯ '}
              text={
                'На официальном сайте приёмной комиссии РТУ МИРЭА вы найдете всю необходимую информацию о поступлении: стоимость обучение, количество бюджетных мест и проходные баллы в предыдущие годы. Кроме того, вы сможете более детально ознакомиться с учебным направлением на официальном сайте РТУ МИРЭА.'
              }
              image={ReplaceApi}
              buttonOne={{
                link: StaticData(params.direction).dataAdmission.OtherSources.WebsiteAdmissionsCommittee,
                text: 'ПРИЁМНАЯ КОММИССИЯ РТУ МИРЭА',
              }}
              buttonTwo={{ link: StaticData(params.direction).dataAdmission.OtherSources.WebsiteMIREA, text: 'САЙТ РТУ МИРЭА' }}
            />
          ) : (
            <></>
          )}
        </Section>
        <Section id={id[2].link}>
          <TitleText heading={'СПЕЦИАЛЬНОСТИ / ПРОФИЛИ'} text={[StaticData(params.direction).specializationText]} />
          <Table array={arraySpecializationFact} side={'center'} background={'gray'} gapInside={'36px'} gapOutside={'24px'} />
          <SectionProfiles array={ApiProfiles(params.direction)} />
        </Section>
        {/*
                        <Section>
                            <TitleText heading={"УЧЕБНЫЙ ПЛАН"} text={[textCurriculum]} />
                            <Table array={arrayCurriculum} side={"center"} background={"white"} gapInside={"36px"} gapOutside={"24px"} />
                            <BookStudyPlan />
                        </Section>
                     */}
        {StaticData(params.direction).video === null ? (
          <></>
        ) : (
          <Section id={id[3].link}>
            <TitleText heading={'ВИДЕО'} text={[StaticData(params.direction).video!.text]} />
            <iframe
              className={Style.Video}
              src={StaticData(params.direction).video!.videoURL}
              frameBorder="0"
              allow="clipboard-write; autoplay"
              allowFullScreen
            />
          </Section>
        )}
        <DownTransition
          heading={DownCell[params.direction as keyof typeof DownCell].heading}
          array={[
            DownCell[params.direction as keyof typeof DownCell].element1,
            DownCell[params.direction as keyof typeof DownCell].element2,
            DownCell[params.direction as keyof typeof DownCell].element3,
          ]}
        />
      </main>
    </>
  );
}

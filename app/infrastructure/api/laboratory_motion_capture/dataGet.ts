import ImageScreensaver3 from '@/public/image/лаба_мокап.webp';
import Mokap_specificity_1 from '@/public/svg/мокап_фишка_1.svg';
import Mokap_specificity_2 from '@/public/svg/мокап_фишка_2.svg';
import Mokap_specificity_3 from '@/public/svg/мокап_фишка_3.svg';
import Mocap_equipment_1 from '@/public/image/мокап_оборудование_1.webp';
import Mocap_equipment_2 from '@/public/image/мокап_оборудование_2.webp';
import Mocap_equipment_3 from '@/public/image/мокап_оборудование_3.webp';
import Mocap_equipment_4 from '@/public/image/мокап_оборудование_4.webp';
import Game_Pr from '@/public/svg/game_pr.svg';
import Ind from '@/public/svg/ind.svg';
import Laba3Image1 from '@/public/image/megalaboratory/3/1.webp';
import Laba3Image2 from '@/public/image/megalaboratory/3/2.webp';
import Laba3Image3 from '@/public/image/megalaboratory/3/3.webp';
import Laba3Image4 from '@/public/image/megalaboratory/3/4.webp';
import Laba3Image5 from '@/public/image/megalaboratory/3/5.webp';
import Laba3Image6 from '@/public/image/megalaboratory/3/6.webp';
import Laba3Image7 from '@/public/image/megalaboratory/3/7.webp';
import Laba3Image8 from '@/public/image/megalaboratory/3/8.webp';
import Laba3Image9 from '@/public/image/megalaboratory/3/9.webp';
import Laba3Image10 from '@/public/image/megalaboratory/3/10.webp';
import Laba3Image11 from '@/public/image/megalaboratory/3/11.webp';
import Laba3Image12 from '@/public/image/megalaboratory/3/12.webp';
import Laba3Image13 from '@/public/image/megalaboratory/3/13.webp';
import Laba3Image14 from '@/public/image/megalaboratory/3/14.webp';
import Laba3Image15 from '@/public/image/megalaboratory/3/15.webp';
import Laba3Image16 from '@/public/image/megalaboratory/3/16.webp';
import Laba3Image17 from '@/public/image/megalaboratory/3/17.webp';
import Laba3Image18 from '@/public/image/megalaboratory/3/18.webp';
import Laba3Image19 from '@/public/image/megalaboratory/3/19.webp';
import Laba3Image20 from '@/public/image/megalaboratory/3/20.webp';
import Laba3Image21 from '@/public/image/megalaboratory/3/21.webp';
import Laba3Image22 from '@/public/image/megalaboratory/3/22.webp';
import Laba3Image23 from '@/public/image/megalaboratory/3/23.webp';
import Laba3Image24 from '@/public/image/megalaboratory/3/24.webp';
import Laba3Image25 from '@/public/image/megalaboratory/3/25.webp';
import Laba3Image26 from '@/public/image/megalaboratory/3/26.webp';
import Laba3Image27 from '@/public/image/megalaboratory/3/27.webp';
import Laba3Image28 from '@/public/image/megalaboratory/3/28.webp';
import Laba3Image29 from '@/public/image/megalaboratory/3/29.webp';
import Laba3Image30 from '@/public/image/megalaboratory/3/30.webp';
import Laba3Image31 from '@/public/image/megalaboratory/3/31.webp';
import Laba3Image32 from '@/public/image/megalaboratory/3/32.webp';
import Laba3Image33 from '@/public/image/megalaboratory/3/33.webp';
import Laba3Image34 from '@/public/image/megalaboratory/3/34.webp';
import Laba3Image35 from '@/public/image/megalaboratory/3/35.webp';
import ImageScreensaver2 from '@/public/image/лаба_кресла.webp';
import ImageScreensaver4 from '@/public/image/лаба_вр.webp';
import ImageScreensaver1 from '@/public/image/лаба_инженерка.webp';

export default async function dataGetLMC() {
  const data = {
    menuSection: {
      image: ImageScreensaver3,
      text: 'Лаборатория захвата движения',
    },
    sections: [
      {
        sectionId: {
          link: 'specificity',
          text: 'Информация про МЕГАЛАБОРАТОРИЮ',
        },
        titleText: {
          heading: 'Основные ПРЕИМУЩЕСТВА И направления работы лаборатории',
          text: [
            'На базе Института информационных технологий развёрнута лаборатория захвата движения (motion capture), позволяющая на площади более 40 квадратных метров с высокой точностью позиционирования выполнять запись перемещений и движений актёров, предметов и механизмов с последующим воссозданием их действий в цифровых моделях персонажей и объектов анимации.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: Mokap_specificity_1,
                heading: 'Системы Vicon для захвата движений объектов (MotionCapture)',
                text: null,
              },
              {
                numberOrImage: Mokap_specificity_2,
                heading: 'Системы захвата лицевой мимики Faceware Technologies',
                text: null,
              },
              {
                numberOrImage: Mokap_specificity_3,
                heading: 'Запись анимаций, кат-сцен и фильмов',
                text: null,
              },
            ],
            side: 'left',
            background: 'gray',
            gapInside: '36px/auto',
            gapOutside: '16px',
            imgSize: '110px',
          },
        ],
      },
      {
        sectionId: {
          link: 'equipment',
          text: 'ПОСМОТРЕТЬ ОБОРУДОВАНИЕ',
        },
        titleText: {
          heading: 'ОБОРУДОВАНИЕ',
          text: null,
        },
        elements: [
          {
            type: 'tableImages',
            array: [
              {
                linkImage: Mocap_equipment_1,
                heading: 'КОМПЬЮТЕРНАЯ СТАНЦИЯ VICON C ПРОГРАММНЫМ ПАКЕТОМ SHOGUN ДЛЯ ОБРАБОТКИ И ОТСЛЕЖИВАНИЯ МИМИКИ И ДВИЖЕНИЯ ОБЪЕКТОВ ',
                text: '1 устройство',
                position: false,
              },
              {
                linkImage: Mocap_equipment_2,
                heading: 'КАМЕРЫ ДЛЯ ЗАХВАТА ДВИЖЕНИЯ Vicon Vero',
                text: '16 устройств',
                position: false,
              },
              {
                linkImage: Mocap_equipment_3,
                heading: 'КОМПЛЕКТ ТРЕКИНГ КОСТЮМА ДЛЯ ЗАХВАТА ДВИЖЕНИЯ',
                text: '2 комплекта',
                position: false,
              },
              {
                linkImage: Mocap_equipment_4,
                heading: 'ШЛЕМ Mark IV Wireless Headcam System',
                text: '2 устройства',
                position: false,
              },
            ],
            styleTableImages: 'default',
          },
        ],
      },
      {
        sectionId: {
          link: 'usage',
          text: 'УЗНАТЬ КТО В НЕЙ ЗАНИМАЕТСЯ',
        },
        titleText: {
          heading: 'ОБУЧЕНИЕ И ИСПОЛЬЗОВАНИЕ ЛАБОРАТОРИИ',
          text: [
            'На начало 2020 года РТУ МИРЭА — первый и единственный университет в России, на базе которого функционирует полноценная студия захвата движения с профессиональным оборудованием компании Vicon, применяемым для производства лучших современных фильмов и высокобюджетных игр AAA-класса.',
          ],
        },
        elements: [
          {
            type: 'usageCardTable',
            array: [
              {
                image: Game_Pr,
                heading:
                  'Студенты профиля «Разработка и дизайн компьютерных игр и мультимедийных приложений» проходят обучение в этой лаборатории.',
                style: 'gamedev',
              },
              {
                image: Ind,
                heading:
                  'Обратившись к сотрудникам института в А-420, студенты могут воспользоваться лабораторным оборудованием под наблюдением сотрудников.',
                style: 'vika',
              },
            ],
          },
        ],
      },
      {
        sectionId: {
          link: 'video',
          text: 'ПОСМОТРЕТЬ ВИДЕОРОЛИК',
        },
        titleText: {
          heading: 'ВИДЕО',
          text: null,
        },
        elements: [
          {
            type: 'video',
            src: 'https://rutube.ru/play/embed/70aff27b537bfa168af1cf3738f65ef2',
          },
        ],
      },
      {
        sectionId: {
          link: 'photo',
          text: 'ПОСМОТРЕТЬ ФОТОГРАФИИ',
        },
        titleText: {
          heading: 'ФОТОГРАФИИ',
          text: null,
        },
        elements: [
          {
            type: 'photoSection',
            images: [
              Laba3Image1,
              Laba3Image2,
              Laba3Image3,
              Laba3Image4,
              Laba3Image5,
              Laba3Image6,
              Laba3Image7,
              Laba3Image8,
              Laba3Image9,
              Laba3Image10,
              Laba3Image11,
              Laba3Image12,
              Laba3Image13,
              Laba3Image14,
              Laba3Image15,
              Laba3Image16,
              Laba3Image17,
              Laba3Image18,
              Laba3Image19,
              Laba3Image20,
              Laba3Image21,
              Laba3Image22,
              Laba3Image23,
              Laba3Image24,
              Laba3Image25,
              Laba3Image26,
              Laba3Image27,
              Laba3Image28,
              Laba3Image29,
              Laba3Image30,
              Laba3Image31,
              Laba3Image32,
              Laba3Image33,
              Laba3Image34,
              Laba3Image35,
            ],
          },
        ],
      },
    ],
    downTransition: {
      heading: 'ДРУГИЕ МЕГАЛАБАРАТОРИИ ИНСТИТУТА',
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
  };
  return data;
}

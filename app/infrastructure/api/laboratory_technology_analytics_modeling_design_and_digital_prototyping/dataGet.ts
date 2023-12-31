import ImageScreensaver2 from '@/public/image/лаба_кресла.webp';
import Kresla_specificity_1 from '@/public/svg/кресла_фишка_1.svg';
import Kresla_specificity_2 from '@/public/svg/кресла_фишка_2.svg';
import Kresla_specificity_3 from '@/public/svg/кресла_фишка_3.svg';
import Kresla_specificity_4 from '@/public/svg/кресла_фишка_4.svg';
import Kresla_specificity_5 from '@/public/svg/кресла_фишка_5.svg';
import Kresla_specificity_6 from '@/public/svg/кресла_фишка_6.svg';
import Kresla_equipment_1 from '@/public/image/кресла_оборудование_1.webp';
import Kresla_equipment_2 from '@/public/image/кресла_оборудование_2.webp';
import Default from '@/public/svg/default.svg';
import Ind from '@/public/svg/ind.svg';
import Laba2Image1 from '@/public/image/megalaboratory/2/_R8A8096_result.webp';
import Laba2Image2 from '@/public/image/megalaboratory/2/_R8A8103_result.webp';
import Laba2Image3 from '@/public/image/megalaboratory/2/_R8A8121_result.webp';
import Laba2Image4 from '@/public/image/megalaboratory/2/DSC00658_result.webp';
import Laba2Image5 from '@/public/image/megalaboratory/2/DSC00663_result.webp';
import Laba2Image6 from '@/public/image/megalaboratory/2/DSC00665_result.webp';
import Laba2Image7 from '@/public/image/megalaboratory/2/DSC00670_result.webp';
import Laba2Image8 from '@/public/image/megalaboratory/2/DSC00674_result.webp';
import Laba2Image9 from '@/public/image/megalaboratory/2/DSC00677_result.webp';
import Laba2Image10 from '@/public/image/megalaboratory/2/DSC00678_result.webp';
import Laba2Image11 from '@/public/image/megalaboratory/2/DSC00680_result.webp';
import ImageScreensaver1 from '@/public/image/лаба_инженерка.webp';
import ImageScreensaver3 from '@/public/image/лаба_мокап.webp';
import ImageScreensaver4 from '@/public/image/лаба_вр.webp';

export default async function dataGetLTAMDADP() {
  const data = {
    menuSection: {
      image: ImageScreensaver2,
      text: 'Универсальная учебно-научная лаборатория технологий аналитики, моделирования, проектирования и цифрового прототипирования',
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
            'На базе Института информационных технологий работает универсальная учебно-научная лаборатория технологий аналитики, моделирования, проектирования и цифрового прототипирования. В ней студенты изучают различные аспекты и компоненты одного из самых перспективных направлений — создание «цифровых двойников» (digital twins), таких цифровых копий или прототипов физических объектов, процессов или целых предприятий, которые позволяют исследовать, прогнозировать и оптимизировать их параметры и характеристики.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: Kresla_specificity_1,
                heading: 'Комфортные условия для учёбы',
                text: null,
              },
              {
                numberOrImage: Kresla_specificity_2,
                heading: 'Условия для мультизадачной работы',
                text: null,
              },
              {
                numberOrImage: Kresla_specificity_3,
                heading: 'Моделирование 3D объектов и прототипирование',
                text: null,
              },
              {
                numberOrImage: Kresla_specificity_4,
                heading: 'Разработка программного обеспечения и систем',
                text: null,
              },
              {
                numberOrImage: Kresla_specificity_5,
                heading: 'Анализ, моделирование и проектирование IT продуктов и систем',
                text: null,
              },
              {
                numberOrImage: Kresla_specificity_6,
                heading: 'Аналитика больших данных и предиктивная аналитика',
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
                linkImage: Kresla_equipment_1,
                heading: 'Моноблок Apple iMac INTEL',
                text: '19 устройств',
                position: false,
              },
              {
                linkImage: Kresla_equipment_2,
                heading: 'Компьютерные кресла CyberCapsule',
                text: '26 устройств',
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
            'Лаборатория используется для проведения занятий с группами магистратуры и бакалавриата (начиная со второго курса) всех направлений подготовки Института информационных технологий вне зависимости от профиля обучения.',
          ],
        },
        elements: [
          {
            type: 'usageCardTable',
            array: [
              {
                image: Default,
                heading:
                  'Все студенты института информационных технологий могут проходить основное обучение в этой лаборатории со 2 курса бакалавриата.',
                style: 'default',
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
            src: 'https://rutube.ru/play/embed/de1c84b88bc5d95e7ae3410f7d2d6851',
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
              Laba2Image1,
              Laba2Image2,
              Laba2Image3,
              Laba2Image4,
              Laba2Image5,
              Laba2Image6,
              Laba2Image7,
              Laba2Image8,
              Laba2Image9,
              Laba2Image10,
              Laba2Image11,
            ],
          },
        ],
      },
    ],
    downTransition: {
      heading: 'ДРУГИЕ МЕГАЛАБАРАТОРИИ ИНСТИТУТА',
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
  };
  return data;
}

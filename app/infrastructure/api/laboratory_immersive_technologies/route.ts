import { NextResponse } from 'next/server';
import ImageScreensaver4 from '@/public/image/лаба_вр.webp';
import Vr_specificity_1 from '@/public/svg/вр_фишка_1.svg';
import Vr_specificity_2 from '@/public/svg/вр_фишка_2.svg';
import Vr_specificity_3 from '@/public/svg/вр_фишка_3.svg';
import Vr_specificity_4 from '@/public/svg/вр_фишка_4.svg';
import Vr_specificity_5 from '@/public/svg/вр_фишка_5.svg';
import Vr_specificity_6 from '@/public/svg/вр_фишка_6.svg';
import Vr_equipment_1 from '@/public/image/вр_оборудование_1.webp';
import Vr_equipment_2 from '@/public/image/вр_оборудование_2.webp';
import Vr_equipment_3 from '@/public/image/вр_оборудование_3.webp';
import Vr_equipment_4 from '@/public/image/вр_оборудование_4.webp';
import Vr_equipment_5 from '@/public/image/вр_оборудование_5.webp';
import Vr_equipment_6 from '@/public/image/вр_оборудование_6.webp';
import Vr_equipment_7 from '@/public/image/вр_оборудование_7.webp';
import Vr_equipment_8 from '@/public/image/вр_оборудование_8.webp';
import Vr_equipment_9 from '@/public/image/вр_оборудование_9.webp';
import Vr_equipment_10 from '@/public/image/вр_оборудование_10.webp';
import Vr_equipment_11 from '@/public/image/вр_оборудование_11.webp';
import Vr_equipment_12 from '@/public/image/вр_оборудование_12.webp';
import Vr_equipment_13 from '@/public/image/вр_оборудование_13.webp';
import Vr_equipment_14 from '@/public/image/вр_оборудование_14.webp';
import Vr_equipment_15 from '@/public/image/вр_оборудование_15.webp';
import Vr_Pr from '@/public/svg/vr_pr.svg';
import Ind from '@/public/svg/ind.svg';
import Laba4Image1 from '@/public/image/megalaboratory/4/1.webp';
import Laba4Image2 from '@/public/image/megalaboratory/4/2.webp';
import Laba4Image3 from '@/public/image/megalaboratory/4/3.webp';
import Laba4Image4 from '@/public/image/megalaboratory/4/4.webp';
import Laba4Image5 from '@/public/image/megalaboratory/4/5.webp';
import Laba4Image6 from '@/public/image/megalaboratory/4/6.webp';
import Laba4Image7 from '@/public/image/megalaboratory/4/7.webp';
import Laba4Image8 from '@/public/image/megalaboratory/4/8.webp';
import Laba4Image9 from '@/public/image/megalaboratory/4/9.webp';
import Laba4Image10 from '@/public/image/megalaboratory/4/10.webp';
import Laba4Image11 from '@/public/image/megalaboratory/4/11.webp';
import Laba4Image12 from '@/public/image/megalaboratory/4/12.webp';
import Laba4Image13 from '@/public/image/megalaboratory/4/13.webp';
import Laba4Image14 from '@/public/image/megalaboratory/4/14.webp';
import Laba4Image15 from '@/public/image/megalaboratory/4/15.webp';
import Laba4Image16 from '@/public/image/megalaboratory/4/16.webp';
import Laba4Image17 from '@/public/image/megalaboratory/4/17.webp';
import Laba4Image18 from '@/public/image/megalaboratory/4/18.webp';
import Laba4Image19 from '@/public/image/megalaboratory/4/19.webp';
import Laba4Image20 from '@/public/image/megalaboratory/4/20.webp';
import Laba4Image21 from '@/public/image/megalaboratory/4/21.webp';
import Laba4Image22 from '@/public/image/megalaboratory/4/22.webp';
import Laba4Image23 from '@/public/image/megalaboratory/4/23.webp';
import Laba4Image24 from '@/public/image/megalaboratory/4/24.webp';
import Laba4Image25 from '@/public/image/megalaboratory/4/25.webp';
import Laba4Image26 from '@/public/image/megalaboratory/4/26.webp';

export async function GET(request: Request) {
  const data = {
    menuSection: {
      image: ImageScreensaver4,
      text: 'Лаборатория иммерсивных технологий',
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
            'Лаборатория иммерсивных технологий работает на базе Института информационных технологий и создана для реализации возможностей погружения операторов в среды расширенной (виртуальной, дополненной и смешанной) реальности с целью обучения индивидуальным и/или групповым действиям в симулируемых окружающих условиях. Лаборатория занимается исследованием аспектов прикладного применения технологий расширенной (виртуальной, дополненной и смешанной) реальности в производственной, проектной, учебной, исследовательской и творческой деятельности.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: Vr_specificity_1,
                heading: 'Стенд для одновременной работы до 4 операторов',
                text: null,
              },
              {
                numberOrImage: Vr_specificity_2,
                heading: 'Мощная компьютерная станция для обработки и рендера 3D объектов',
                text: null,
              },
              {
                numberOrImage: Vr_specificity_3,
                heading: 'Оборудование дополненой реальности',
                text: null,
              },
              {
                numberOrImage: Vr_specificity_4,
                heading: 'Оборудование виртуальной реальности',
                text: null,
              },
              {
                numberOrImage: Vr_specificity_5,
                heading: 'Оборудование смешанной реальности',
                text: null,
              },
              {
                numberOrImage: Vr_specificity_6,
                heading: 'Оборудование расширенной реальности',
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
                linkImage: Vr_equipment_1,
                heading: 'Тактильные костюмы TACTOT с бронёй для рук и ног',
                text: '5 устройств',
                position: false,
              },
              {
                linkImage: Vr_equipment_2,
                heading: 'Стенд С БАЗОВЫМИ VR СТАНЦИЯМИ для одновременной И СОВМЕСТНОЙ работы до четырёх VR операторов',
                text: '1 устройство',
                position: false,
              },
              {
                linkImage: Vr_equipment_3,
                heading: 'НАБОР ТАКТИЛЬНЫХ VR ПЕРЧАТОК С ОТДАЧЕЙ',
                text: '2 комплекта',
                position: false,
              },
              {
                linkImage: Vr_equipment_4,
                heading: 'Шлем вирутальной реальности HTC Vive Pro',
                text: '5 устройств',
                position: false,
              },
              {
                linkImage: Vr_equipment_5,
                heading: 'Шлем вирутальной реальности HTC VIVE Cosmos',
                text: '2 устройства',
                position: false,
              },
              {
                linkImage: Vr_equipment_6,
                heading: 'Шлем вирутальной реальности HTC VIVE',
                text: '8 устройств',
                position: false,
              },
              {
                linkImage: Vr_equipment_7,
                heading: 'Переносные компьютеры в виде рюкзаков Zotac VR Go 2.0',
                text: '3 устройства',
                position: false,
              },
              {
                linkImage: Vr_equipment_8,
                heading: 'ДОПОЛНИТЕЛЬНЫЕ наборы VR ТРЕКЕРОВ И базовых vr станций',
                text: '6 наборов',
                position: false,
              },
              {
                linkImage: Vr_equipment_9,
                heading: 'Графическая КОМПЬЮТЕРНАЯ станция для рендера и обработки 3D моделей и анимаций',
                text: '1 устройство',
                position: false,
              },
              {
                linkImage: Vr_equipment_10,
                heading: 'Шлем вирутальной реальности Oculus Rift CV1',
                text: '11 устройств',
                position: false,
              },
              {
                linkImage: Vr_equipment_11,
                heading: 'Шлем вирутальной реальности Oculus Quest 2',
                text: '2 устройства',
                position: false,
              },
              {
                linkImage: Vr_equipment_12,
                heading: 'Устройство дополненной реальности EPSON BT-35E',
                text: '2 устройства',
                position: false,
              },
              {
                linkImage: Vr_equipment_13,
                heading: 'Устройство дополненной реальности EPSON BT-300 H756A',
                text: '3 устройства',
                position: false,
              },
              {
                linkImage: Vr_equipment_14,
                heading: 'Устройство смешанной реальности Hololens 2',
                text: '2 устройства',
                position: false,
              },
              {
                linkImage: Vr_equipment_15,
                heading: 'Устройство смешанной реальности Hololens',
                text: '9 устройств',
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
            'Имеющееся оборудование позволяет погружать одного или нескольких операторов в любые среды смешанной реальности с реализацией их визуального восприятия и воссозданием физических ощущений посредством воздействия на корпус и конечности.',
          ],
        },
        elements: [
          {
            type: 'usageCardTable',
            array: [
              {
                image: Vr_Pr,
                heading:
                  'Студенты профиля «Проектирование и разработка сред и приложений дополненной и виртуальной реальностей» проходят обучение в этой лаборатории.',
                style: 'vrdev',
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
          text: 'ПОСМОТРЕТЬ ВИДЕОРОЛИКИ',
        },
        titleText: {
          heading: 'ВИДЕО',
          text: null,
        },
        elements: [
          {
            type: 'video',
            src: 'https://rutube.ru/play/embed/2c3a87f34ebc6c9ca05e6c99fcd2b60c',
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
              Laba4Image1,
              Laba4Image2,
              Laba4Image3,
              Laba4Image4,
              Laba4Image5,
              Laba4Image6,
              Laba4Image7,
              Laba4Image8,
              Laba4Image9,
              Laba4Image10,
              Laba4Image11,
              Laba4Image12,
              Laba4Image13,
              Laba4Image14,
              Laba4Image15,
              Laba4Image16,
              Laba4Image17,
              Laba4Image18,
              Laba4Image19,
              Laba4Image20,
              Laba4Image21,
              Laba4Image22,
              Laba4Image23,
              Laba4Image24,
              Laba4Image25,
              Laba4Image26,
            ],
          },
        ],
      },
    ],
  };
  return NextResponse.json(data, { status: 200 });
}

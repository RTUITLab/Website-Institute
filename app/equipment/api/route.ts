import { NextResponse } from 'next/server';
import Fact_E_1 from '@/public/svg/fact_e_1.svg';
import Fact_E_2 from '@/public/svg/fact_e_2.svg';
import Fact_E_3 from '@/public/svg/fact_e_3.svg';
import Fact_E_4 from '@/public/svg/fact_e_4.svg';
import EquipmentImage1 from '@/public/image/equipment/Оборудование 1.png';
import EquipmentImage2 from '@/public/image/equipment/Оборудование 2.png';
import EquipmentImage3 from '@/public/image/equipment/Оборудование 3.png';
import EquipmentImage4 from '@/public/image/equipment/Оборудование 4.png';
import EquipmentImage5 from '@/public/image/equipment/Оборудование 5.png';
import EquipmentImage6 from '@/public/image/equipment/Оборудование 6.png';
import EquipmentImage7 from '@/public/image/equipment/Оборудование 7.png';
import EquipmentImage8 from '@/public/image/equipment/Оборудование 8.png';
import EquipmentImage9 from '@/public/image/equipment/Оборудование 9.png';
import EquipmentImage10 from '@/public/image/equipment/Оборудование 10.png';
import EquipmentImage11 from '@/public/image/equipment/Оборудование 11.png';
import EquipmentImage12 from '@/public/image/equipment/Оборудование 12.png';
import EquipmentImage13 from '@/public/image/equipment/Оборудование 13.png';
import EquipmentImage14 from '@/public/image/equipment/Оборудование 14.png';
import EquipmentImage15 from '@/public/image/equipment/Оборудование 15.png';
import Equipment from '@/public/image/Оборудование_Переход.webp';

export async function GET() {
  const data = {
    menuSection: {
      image: Equipment,
      text: 'Уникальное оборудование',
    },
    sections: [
      {
        sectionId: {
          link: 'info_equipment',
          text: 'ИНФОРМАЦИЯ ПРО ОБОРУДОВАНИЕ',
        },
        titleText: {
          heading: 'УНИКАЛЬНОЕ ОБОРУДОВАНИЕ ИНСТИТУТА',
          text: [
            'Институт информационных технологий располагает уникальным и современным оборудованием, необходимым для осуществления научной и образовательной деятельности. Это оборудование позволяет изучать и работать с такими областями IT, как виртуальная реальность (VR), дополненная реальность (AR), смешанная реальность (MR), расширенная реальность (XR), технологии motion capture, мобильная разработка, интернет вещей (IOT), робототехника, микропроцессорная архитектура и другие. Кроме того, по запросу студентов, это оборудование может быть предоставлено для использования в свободное время вне учебных занятий для реализации собственных проектов.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: Fact_E_1,
                heading: 'Мощное компьютерное оборудование от отечественных компаний и известных мировых брендов',
                text: null,
              },
              {
                numberOrImage: Fact_E_2,
                heading: 'Оборудование виртуальной, дополненной, смешанной и расширенной реальности',
                text: null,
              },
              {
                numberOrImage: Fact_E_3,
                heading: 'Платы, устройства и оборудование для инженеров-разработчиков и IOT',
                text: null,
              },
              {
                numberOrImage: Fact_E_4,
                heading: 'Уникальные сервера, роботы собаки, дроны и motion-capture оборудование',
                text: null,
              },
            ],
            side: 'center',
            background: 'gray',
            gapInside: '48px',
            gapOutside: '48px',
            imgSize: '152px',
          },
        ],
      },
      {
        sectionId: {
          link: 'table_equipment',
          text: 'ПОСМОТРЕТЬ ОБОРУДОВАНИЕ',
        },
        titleText: {
          heading: 'ТАБЛИЦА С ОБОРУДОВАНИЕМ',
          text: null,
        },
        elements: [
          {
            type: 'tableImages',
            array: [
              {
                linkImage: EquipmentImage1,
                heading: 'SAMSUNG - сервер удалённого тестирования Android-приложений',
                text: '1 устройство',
                position: false,
              },
              {
                linkImage: EquipmentImage2,
                heading: 'Mark IV Wireless Headcam System',
                text: '2 устройства',
                position: false,
              },
              {
                linkImage: EquipmentImage3,
                heading: 'Vicon Vero',
                text: '16 устройств',
                position: false,
              },
              {
                linkImage: EquipmentImage4,
                heading: 'HTC VIVE Cosmos',
                text: '2 устройства',
                position: false,
              },
              {
                linkImage: EquipmentImage5,
                heading: 'HTC Vive Pro',
                text: '5 устройств',
                position: false,
              },
              {
                linkImage: EquipmentImage6,
                heading: 'Oculus Rift CV1',
                text: '11 устройств',
                position: false,
              },
              {
                linkImage: EquipmentImage7,
                heading: 'HTC Vive',
                text: '8 устройств',
                position: false,
              },
              {
                linkImage: EquipmentImage8,
                heading: 'Hololens 2',
                text: '2 устройства',
                position: false,
              },
              {
                linkImage: EquipmentImage9,
                heading: 'Hololens',
                text: '9 устройств',
                position: false,
              },
              {
                linkImage: EquipmentImage10,
                heading: 'CyberCapsule',
                text: '26 устройств',
                position: false,
              },
              {
                linkImage: EquipmentImage11,
                heading: 'Лабораторное IOT оборудование WB-demo-kit v.2',
                text: '20  устройств',
                position: false,
              },
              {
                linkImage: EquipmentImage12,
                heading: 'GPRS Shield v3',
                text: '12 устройств',
                position: false,
              },
              {
                linkImage: EquipmentImage13,
                heading: 'NUCLEO F401RE',
                text: '32 устройства',
                position: false,
              },
              {
                linkImage: EquipmentImage14,
                heading: 'Unitree Aliengo',
                text: '1 устройство',
                position: false,
              },
              {
                linkImage: EquipmentImage15,
                heading: 'Unitree A1',
                text: '2 устройства',
                position: false,
              },
            ],
            styleTableImages: 'default',
          },
        ],
      },
    ],
  };

  return NextResponse.json(data, { status: 200 });
}

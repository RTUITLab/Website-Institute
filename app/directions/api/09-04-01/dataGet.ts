import Image090401 from '@/public/image/09.04.01.webp';
import SvgProIT from '@/public/svg/pro_it.svg';
import SvgBinary from '@/public/svg/binary.svg';
import SvgMicro from '@/public/svg/micro.svg';
import { createElementsInformation } from '@/app/directions/api/functions';
import D090301P2S1 from '@/public/svg/spheres/09-03-01/2/1.svg';
import D090301P2S2 from '@/public/svg/spheres/09-03-01/2/2.svg';
import D090301P2S3 from '@/public/svg/spheres/09-03-01/2/3.svg';
import D090301P2S4 from '@/public/svg/spheres/09-03-01/2/4.svg';
import D090301P2S5 from '@/public/svg/spheres/09-03-01/2/5.svg';
import D090301P2S6 from '@/public/svg/spheres/09-03-01/2/6.svg';
import D090301P2S7 from '@/public/svg/spheres/09-03-01/2/7.svg';
import D090301P2S8 from '@/public/svg/spheres/09-03-01/2/8.svg';
import D090301P2S9 from '@/public/svg/spheres/09-03-01/2/9.svg';
import Base from '@/public/svg/Base.svg';
import Spec from '@/public/svg/Spec.svg';
import Choice from '@/public/svg/Choise.svg';
import Image090403 from '@/public/image/09.04.03.webp';
import Image090404 from '@/public/image/09.04.04.webp';
import Image010404 from '@/public/image/01.04.04.webp';
import AVTUS from '@/public/image/автис.webp';

export default async function dataGet090401() {
  const urlInformation = 'https://priem.mirea.ru/lk/api/directions/get/5';

  const data = {
    menuSection: {
      image: Image090401,
      text: '09.04.01 | ИНФОРМАТИКА И ВЫЧИСЛИТЕЛЬНАЯ ТЕХНИКА',
    },
    sections: [
      {
        sectionId: {
          link: 'specificity',
          text: 'ЦЕЛЬ ПРОГРАММЫ',
        },
        titleText: {
          heading: 'Цель программы — подготовка инженерных кадров для информационного общества',
          text: [
            'В рамках направления осуществляется углублённая подготовка профессионалов в области разработки технических средств (машин, комплексов, систем) и программного обеспечения (комплексов и систем) вычислительной техники и компьютерных сетей. Изучаются автоматизированные и распределённые системы обработки информации и управления, а также системы автоматизированного проектирования (САПР) и информационной поддержки жизненного цикла промышленных изделий, их математическое, информационное, техническое, лингвистическое, программное, эргономическое и организационное обеспечение. В процессе обучения магистранты осваивают инструментальные средства САПР, обеспечивающие проектирование современной компьютерной аппаратуры, а также создание диагностических средств и тестов для её контроля.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: SvgProIT,
                heading: 'Высококвалифицированные знания и умения для IT специалиста',
                text: [
                  'Независимо от направления вы получите базовые знания профессиональной разработки и проектирования IT продуктов, изучите множество методологий, получите навыки по управлению и профессиональному ориентированию.',
                ],
              },
              {
                numberOrImage: SvgBinary,
                heading: 'Низкоуровневое программирование',
                text: [
                  'На данном направление вы научитесь разрабатывать низкоуровневой код и программное обеспечение под для информационно-вычислительных систем и машины различного назначения.',
                ],
              },
              {
                numberOrImage: SvgMicro,
                heading: 'Программирование вычислительных систем',
                text: [
                  'Также вы научитесь разрабатывать полноценные драйвера для операционных систем,  строить сети, программировать микропроцессоры и разрабатывать вычислительные комплексы.',
                ],
              },
            ],
            side: 'left',
            background: 'gray',
            gapInside: '36px',
            gapOutside: '32px',
            imgSize: '110px',
          },
        ],
      },
      {
        sectionId: {
          link: 'information',
          text: 'ИНФОРМАЦИЯ ПО ПОСТУПЛЕНИЮ',
        },
        titleText: {
          heading: 'ИНФОРМАЦИЯ ПО ПОСТУПЛЕНИЮ',
          text: null,
        },
        elements: await createElementsInformation(
          urlInformation,
          ['Магистратура'],
          ['Очная (дневная)'],
          ['2 года'],
          ['Высшая математика'],
          'https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/magistratura/09-04-01-informatics-and-computer-engineering/',
          'https://priem.mirea.ru/guide-direction?direction_id=5',
          null,
          null,
        ),
      },
      {
        sectionId: {
          link: 'profiles',
          text: 'СПЕЦИАЛЬНОСТИ / ПРОФИЛИ',
        },
        titleText: {
          heading: 'СПЕЦИАЛЬНОСТИ / ПРОФИЛИ',
          text: [
            'В рамках данного направления доступен всего 1 профиль. Однако в рамках этого профиля вы сможете выбрать обучение на институтской или базовой кафедре, перед началом обучения. Выбор кафедры производится на основе результатов вступительных испытаний, дополнительных достижений и личного желания. Обучение на базовой кафедре позволит получить дополнительный набор теоретических знаний и набор практического опыта.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: 1,
                heading: 'Профиль/Специальность',
                text: null,
              },
              {
                numberOrImage: '95%',
                heading: 'Выпускников работающих по специальности',
                text: null,
              },
            ],
            side: 'center',
            background: 'gray',
            gapInside: '36px',
            gapOutside: '24px',
            imgSize: '110px',
          },
          {
            type: 'sectionProfiles',
            array: [
              {
                heading: 'Архитектура вычислительной техники и информационных систем',
                linkImage: AVTUS,
                direction: null,
                partner: null,
                text:
                  'В ходе обучения студенты получают теоретическую и практическую подготовку в области проектирования, программирования, контроля и обеспечения функционирования элементов, устройств, комплексов и систем обработки данных, в том числе с применением методов интеллектуальной обработки.\n' +
                  'Студенты имеют доступ к современным средствам и системам автоматизированного проектирования, программным средствам интеллектуальной обработки информации, в том числе разработанным в университете. Программа подготовки адаптирована под запросы работодателей.',
                department: 'Кафедра вычислительной техники',
                areasStudy: [
                  {
                    image: D090301P2S1,
                    heading: 'Низкоуровневое ПО, драйвера и предметно-ориентированные языки программирования',
                    levelBase: false,
                  },
                  {
                    image: D090301P2S2,
                    heading: 'Схемотехника устройств компьютерных систем',
                    levelBase: false,
                  },
                  {
                    image: D090301P2S3,
                    heading: 'Разработка и программирование микропроцессоров',
                    levelBase: false,
                  },
                  {
                    image: D090301P2S4,
                    heading: 'Компьютерные интерфейсы и периферийные устройства',
                    levelBase: true,
                  },
                  {
                    image: D090301P2S5,
                    heading: 'Разработка, программирование и эксплуатация систем и вычислительных комплексов',
                    levelBase: false,
                  },
                  {
                    image: D090301P2S6,
                    heading: 'Автоматизированные системы и комплексы',
                    levelBase: false,
                  },
                  {
                    image: D090301P2S7,
                    heading: 'Надежность программно-аппаратных средств компьютерных систем',
                    levelBase: true,
                  },
                  {
                    image: D090301P2S8,
                    heading: 'Программирование нейропроцессоров',
                    levelBase: true,
                  },
                  {
                    image: D090301P2S9,
                    heading: 'Сетевая инфраструктура',
                    levelBase: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        sectionId: {
          link: 'study-plan',
          text: 'УЧЕБНЫЙ ПЛАН',
        },
        titleText: {
          heading: 'УЧЕБНЫЙ ПЛАН',
          text: [
            'Учебный план включает три типа дисциплин: общие, специализированные дисциплины профиля и блок дисциплин профиля на выбор. Общие дисциплины изучаются независимо от выбранного профиля, их прохождение обязательно для всех студентов направления.  Специализированные дисциплины профиля предназначены для студентов определенных профилей и изучаются только ими. Блоки дисциплин профиля на выбор, предоставляет студентам возможность выбрать дисциплины, и изучать только их.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: Base,
                heading: 'Общие дисциплины направления',
                text: null,
              },
              {
                numberOrImage: Spec,
                heading: 'Специализированные дисциплины профиля',
                text: null,
              },
              {
                numberOrImage: Choice,
                heading: 'Блоки дисциплин профиля на выбор',
                text: null,
              },
            ],
            side: 'center',
            background: 'white',
            gapInside: '36px',
            gapOutside: '24px',
            imgSize: '110px',
          },
        ],
      },
    ],
    downTransition: {
      heading: 'ДРУГИЕ НАПРАВЛЕНИЯ МАГИСТРАТУРЫ ИНСТИТУТА ИТ',
      element1: {
        linkImage: Image090403,
        linkPage: '/directions/09-04-03',
        text: '09.04.03 | Прикладная информатика',
      },
      element2: {
        linkImage: Image090404,
        linkPage: '/directions/09-04-04',
        text: '09.04.04 | Программная инженерия',
      },
      element3: { linkImage: Image010404, linkPage: '/directions/01-04-04', text: '01.04.04 | Прикладная математика' },
    },
  };

  return data;
}

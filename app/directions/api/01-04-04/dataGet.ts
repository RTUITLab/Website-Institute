import Image010404 from '@/public/image/01.04.04.webp';
import SvgProIT from '@/public/svg/pro_it.svg';
import SvgMathematics from '@/public/svg/mathematics.svg';
import SvgDataAnalytics from '@/public/svg/dataanalytics.svg';
import { createElementsInformation } from '@/app/directions/api/functions';
import D010304P1S1 from '@/public/svg/spheres/01-03-04/1/1.svg';
import D010304P1S2 from '@/public/svg/spheres/01-03-04/1/2.svg';
import D010304P1S3 from '@/public/svg/spheres/01-03-04/1/3.svg';
import D010304P1S4 from '@/public/svg/spheres/01-03-04/1/4.svg';
import D010304P1S5 from '@/public/svg/spheres/01-03-04/1/5.svg';
import D010304P1S6 from '@/public/svg/spheres/01-03-04/1/6.svg';
import D010304P1S7 from '@/public/svg/spheres/01-03-04/1/7.svg';
import Base from '@/public/svg/Base.svg';
import Spec from '@/public/svg/Spec.svg';
import IAD from '@/public/image/иад.webp';
import Choice from '@/public/svg/Choise.svg';
import Image090401 from '@/public/image/09.04.01.webp';
import Image090403 from '@/public/image/09.04.03.webp';
import Image090404 from '@/public/image/09.04.04.webp';

export default async function dataGet010404() {
  const urlInformation = 'https://priem.mirea.ru/lk/api/directions/get/213';

  const data = {
    menuSection: {
      image: Image010404,
      text: '01.04.04 | ПРИКЛАДНАЯ МАТЕМАТИКА',
    },
    sections: [
      {
        sectionId: {
          link: 'specificity',
          text: 'ЦЕЛЬ ПРОГРАММЫ',
        },
        titleText: {
          heading: 'Цель программы — подготовка АНАЛИТИКОВ и data scientist’ов, владеющих современными методами машинного обучения',
          text: [
            'В рамках программы реализуется углублённая подготовка профессионалов в сфере информационных технологий и математических методов анализа данных. Сделан акцент на технологиях реализации компьютерных моделей, применении специализированных программных средств и методов извлечения знаний из экспериментальных данных.',
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
                numberOrImage: SvgMathematics,
                heading: 'Углублённая вычислительная математика',
                text: [
                  'На данном направление вы изучите методологии и стандарты проектирования программного обеспечения, инструменты и технологии для реализации прототипов, бизнес-внедрения и программной интеграции IT продуктов и решений.',
                ],
              },
              {
                numberOrImage: SvgDataAnalytics,
                heading: 'Анализ больших данных и машинные вычисления',
                text: [
                  'Также вы научитесь анализировать бизнес процессы организаций и IT отрасль для эффективного проектирования ПО и цифровой трансформации, научитесь контролировать процессы разработки и бизнес-процессы IT организаций.',
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
          'https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/magistratura/applied-mathematics-01-04-04/',
          'https://priem.mirea.ru/guide-direction?direction_id=213',
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
                heading: 'Интеллектуальный анализ данных',
                linkImage: IAD,
                direction: null,
                partner: 'Реализовано совместно с госкорпорацией «ГИДРОМЕТЦЕНТР РОССИИ»',
                text:
                  'Профессиональная деятельность выпускников включает применение, разработку и исследование программного обеспечения, а также математических методов и моделей, предназначенных для анализа, выработки и подготовки решений во всех сферах деятельности и в конкретных предметных областях. Углублённо изучаются классические математические дисциплины, современные концепции и методы прикладной и вычислительной математики, методы математического моделирования и анализа данных применительно к различным предметным областям: экономике, физике, технике, исследованию природных процессов и т.д.\n' +
                  'Студенты программы имеют доступ к современным учебным лабораториям, иностранному и отечественному специализированному программному обеспечению, большим объёмам экспериментальных данных в сферах экономики, физики, техники, природных процессов и т.д.',
                department: 'Кафедра прикладной математики',
                areasStudy: [
                  {
                    image: D010304P1S1,
                    heading: 'Дополнительные главы вычислительной математики',
                    levelBase: true,
                  },
                  {
                    image: D010304P1S2,
                    heading: 'Технологии и инструментарий машинного обучения',
                    levelBase: true,
                  },
                  {
                    image: D010304P1S3,
                    heading: 'Методы анализ данных и математическая статистика',
                    levelBase: false,
                  },
                  {
                    image: D010304P1S4,
                    heading: 'Математическое моделирование и моделирования систем',
                    levelBase: false,
                  },
                  {
                    image: D010304P1S5,
                    heading: 'Системы управления, обработки и анализа данных',
                    levelBase: false,
                  },
                  {
                    image: D010304P1S6,
                    heading: 'Анализ данных в гидрометеорологии',
                    levelBase: false,
                  },
                  {
                    image: D010304P1S7,
                    heading: 'Технологии обработки и хранения данных',
                    levelBase: false,
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
      element1: { linkImage: Image090401, linkPage: '/directions/09-04-01', text: '09.04.01 | Информатика и вычислительная техника' },
      element2: {
        linkImage: Image090403,
        linkPage: '/directions/09-04-03',
        text: '09.04.03 | Прикладная информатика',
      },
      element3: {
        linkImage: Image090404,
        linkPage: '/directions/09-04-04',
        text: '09.04.04 | Программная инженерия',
      },
    },
  };

  return data;
}

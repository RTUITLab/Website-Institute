import Image090404 from '@/public/image/09.04.04.webp';
import SvgProIT from '@/public/svg/pro_it.svg';
import SvgApp from '@/public/svg/app.svg';
import SvgSystem from '@/public/svg/system.svg';
import { createElementsInformation } from '@/app/directions/api/functions';
import AIS from '@/public/image/аис.webp';
import D090304P1S1 from '@/public/svg/spheres/09-03-04/1/1.svg';
import D090304P1S2 from '@/public/svg/spheres/09-03-04/1/2.svg';
import D090304P1S3 from '@/public/svg/spheres/09-03-04/1/3.svg';
import D090304P1S4 from '@/public/svg/spheres/09-03-04/1/4.svg';
import D090304P1S5 from '@/public/svg/spheres/09-03-04/1/5.svg';
import D090304P1S6 from '@/public/svg/spheres/09-03-04/1/6.svg';
import SI from '@/public/image/си.webp';
import D090304P2S1 from '@/public/svg/spheres/09-03-04/2/1.svg';
import D090304P2S2 from '@/public/svg/spheres/09-03-04/2/2.svg';
import D090304P2S3 from '@/public/svg/spheres/09-03-04/2/3.svg';
import D090304P2S4 from '@/public/svg/spheres/09-03-04/2/4.svg';
import D090304P2S5 from '@/public/svg/spheres/09-03-04/2/5.svg';
import D090304P2S6 from '@/public/svg/spheres/09-03-04/2/6.svg';
import ISYRVP from '@/public/image/исурвп.webp';
import D090304P5S1 from '@/public/svg/spheres/09-03-04/5/1.svg';
import D090304P5S2 from '@/public/svg/spheres/09-03-04/5/2.svg';
import D090304P5S3 from '@/public/svg/spheres/09-03-04/5/3.svg';
import D090304P5S4 from '@/public/svg/spheres/09-03-04/5/4.svg';
import D090304P5S5 from '@/public/svg/spheres/09-03-04/5/5.svg';
import D090304P5S6 from '@/public/svg/spheres/09-03-04/5/6.svg';
import Base from '@/public/svg/Base.svg';
import Spec from '@/public/svg/Spec.svg';
import Choice from '@/public/svg/Choise.svg';
import Image010404 from '@/public/image/01.04.04.webp';
import Image090401 from '@/public/image/09.04.01.webp';
import Image090403 from '@/public/image/09.04.03.webp';

export default async function dataGet090404() {
  const urlInformation = 'https://priem.mirea.ru/lk/api/directions/get/7';

  const data = {
    menuSection: {
      image: Image090404,
      text: '09.04.04 | ПРОГРАММНАЯ ИНЖЕНЕРИЯ',
    },
    sections: [
      {
        sectionId: {
          link: 'specificity',
          text: 'ЦЕЛЬ ПРОГРАММЫ',
        },
        titleText: {
          heading: 'Цель программы — подготовка ведущих технических специалистов И разработчиков',
          text: [
            'В рамках данного направления осуществляется подготовка профессионалов в широком спектре разработки программного обеспечения для информационно-вычислительных систем различного назначения, включая сферы применения современных методов и технологий проектирования, а также стандартов, регламентирующих жизненный цикл ПО.',
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
                numberOrImage: SvgApp,
                heading: 'Разработка высокоуровневых приложений',
                text: [
                  'На данном направление вы научитесь разрабатывать полноценные высокоуровневые приложения с использованием различных методов и инструментов разработки программного продукта.',
                ],
              },
              {
                numberOrImage: SvgSystem,
                heading: 'Создание и проектирование информационных систем',
                text: [
                  'Также вы научитесь проектировать и создавать предметно-ориентированные информационные системы в широком спектре IT отрасли для различных информационно-вычислительных систем и организаций разного вида деятельности.',
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
          'https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/magistratura/09-04-04-software-engineering/',
          'https://priem.mirea.ru/guide-direction?direction_id=7',
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
            'В рамках данного направления доступно 3 профиля, один из которых вы сможете выбрать перед началом обучения. Выбор профиля производится на основе результатов вступительных испытаний, дополнительных достижений и личного желания. Выбранные профили позволят студентам овладеть определёнными дисциплинами IT сферы углублённо. В области направления программной инженерии это следующие профили: Web-разработка, мобильная разработка и разработка ERP-систем.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: 3,
                heading: 'Профиля/Специальности',
                text: null,
              },
              {
                numberOrImage: '89%',
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
                heading: 'Архитектура информационных систем',
                linkImage: AIS,
                direction: null,
                partner: null,
                text:
                  'В ходе обучения студенты получают теоретическую и практическую подготовку в сфере анализа, выбора и реализации архитектурных решений при проектировании программного обеспечения и информационно-вычислительных систем различного назначения в контексте их индустриального производства.\n' +
                  'Учебный процесс проходит в компьютерных классах, оснащённых современным аппаратно-программным обеспечением и мультимедийным оборудованием, изучаются отечественные и зарубежные практики индустриального производства программного обеспечения, анализа, выбора и реализации архитектурных решений.',
                department: 'Кафедра инструментального и прикладного программного обеспечения',
                areasStudy: [
                  {
                    image: D090304P1S1,
                    heading: 'Клиентские части интернет ресурсов (Frontend)',
                    levelBase: false,
                  },
                  {
                    image: D090304P1S2,
                    heading: 'Серверные части интернет ресурсов (Backend)',
                    levelBase: false,
                  },
                  {
                    image: D090304P1S3,
                    heading: 'Технологии(фреймворки) и разработка программного обеспечения',
                    levelBase: true,
                  },
                  {
                    image: D090304P1S4,
                    heading: 'Клиент-серверные приложения (Fullstack)',
                    levelBase: false,
                  },
                  {
                    image: D090304P1S5,
                    heading: 'Технологии обработки транкзаций, защиты и виртуализации клиент-серверных систем',
                    levelBase: false,
                  },
                  {
                    image: D090304P1S6,
                    heading: 'Архитектура и системы клиент-серверных приложений',
                    levelBase: false,
                  },
                ],
              },
              {
                heading: 'Системная инженерия',
                linkImage: SI,
                direction: null,
                partner: null,
                text: 'В ходе обучения студенты получают теоретическую и практическую подготовку в области стандартизации программной и системной инженерии, создания и развития сложных, многоверсионных, тиражируемых программных средств и баз данных высокого качества и надежности на основе междисциплинарного подхода. Лаборатории оснащены современным компьютерным, сетевым, мультимедийным и офисным оборудованием, обеспечивающим учебный процесс, исследовательские проекты и инициативные разработки. Студентам предоставляются возможности для самостоятельной работы, в том числе в области разработки и внедрения программного обеспечения, а также сетевого и системного администрирования.',
                department: 'Кафедра математического обеспечения и стандартизации информационных технологий',
                areasStudy: [
                  {
                    image: D090304P2S1,
                    heading: 'Разработка мобильных приложений (MobDev)',
                    levelBase: false,
                  },
                  {
                    image: D090304P2S2,
                    heading: 'Платформы и приложения Интернета Вещей (IOT)',
                    levelBase: false,
                  },
                  {
                    image: D090304P2S3,
                    heading: 'DevOps инженерия',
                    levelBase: true,
                  },
                  {
                    image: D090304P2S4,
                    heading: 'Программная инженерия (Software Engineer)',
                    levelBase: false,
                  },
                  {
                    image: D090304P2S5,
                    heading: 'Стандартизация, тестирование и сертификация программного обеспечения',
                    levelBase: false,
                  },
                  {
                    image: D090304P2S6,
                    heading: 'Распределенные системы управления базами данных',
                    levelBase: false,
                  },
                ],
              },
              {
                heading: 'Информационные системы управления ресурсами и взаимоотношениями предприятия',
                linkImage: ISYRVP,
                direction: null,
                partner: null,
                text: 'Программа направлена на углубленную подготовку профессионалов в вопросах внедрения, сопровождения, доработки и эксплуатации отечественных и зарубежных систем класса ERPII (ERRP, Enterprise Resource and Relationship Processing), включающих функционал синхронизированного планирования ресурсов предприятия (Customer Synchronized Resource Planning, CSRP), планирования потребностей в материалах (Material Requirements Planing, MRP), планирования потребностей в производственных ресурсах (Manufacturing Resource Planing, MRPII), управления взаимоотношениями с клиентами (Customer Relationship Management, CRM), а также управления цепочками поставок (Supply Chain Management, SCM).',
                department: 'Кафедра корпоративных информационных систем',
                areasStudy: [
                  {
                    image: D090304P5S1,
                    heading: '1С',
                    levelBase: false,
                  },
                  {
                    image: D090304P5S2,
                    heading: 'Системы управления ресурсами предприятий',
                    levelBase: false,
                  },
                  {
                    image: D090304P5S3,
                    heading: 'Информационное обеспечение предприятий',
                    levelBase: false,
                  },
                  {
                    image: D090304P5S4,
                    heading: 'Системы управления взаимоотношениями с клиентами',
                    levelBase: false,
                  },
                  {
                    image: D090304P5S5,
                    heading: 'Системы управления производством',
                    levelBase: false,
                  },
                  {
                    image: D090304P5S6,
                    heading: 'Системы электронного документооборота, отчётности и бухгалтерии',
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
      element1: { linkImage: Image010404, linkPage: '/directions/01-04-04', text: '01.04.04 | Прикладная математика' },
      element2: {
        linkImage: Image090401,
        linkPage: '/directions/09-04-01',
        text: '09.01.04 | Информатика и вычислительная техника',
      },
      element3: {
        linkImage: Image090403,
        linkPage: '/directions/09-04-03',
        text: '09.04.03 | Прикладная информатика',
      },
    },
  };
  return data;
}

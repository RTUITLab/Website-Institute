import DirectionsImage from '@/public/image/Направления.webp';
import Analytics from '@/public/svg/Analytics2.svg';
import Engineer from '@/public/svg/Engineer.svg';
import Architect from '@/public/svg/Architect.svg';
import SoftwareEngineer from '@/public/svg/SoftwareEngineer.svg';
import FactGraduates from '@/public/svg/Выпускники_Вика.svg';
import FactPay from '@/public/svg/Платка_Вика.svg';
import FactMilitary from '@/public/svg/Военная_кафедра_Вика.svg';
import FactProfiles from '@/public/svg/Профили_Вика.svg';
import getRequest from '@/apiLogic/getRequest';
import Direction010404 from '@/public/image/01.04.04_Переход.webp';
import Direction090401 from '@/public/image/09.04.01_Переход.webp';
import Direction090403 from '@/public/image/09.04.03_Переход.webp';
import Direction090404 from '@/public/image/09.04.04_Переход.webp';
import Direction010304 from '@/public/image/01.03.04_Переход.webp';
import Direction090301 from '@/public/image/09.03.01_Переход.webp';
import Direction090303 from '@/public/image/09.03.03_Переход.webp';
import Direction090304 from '@/public/image/09.03.04_Переход.webp';
import Direction122 from '@/public/image/1.2.2_Переход.webp';
import Direction232 from '@/public/image/2.3.2_Переход.webp';
import Direction234 from '@/public/image/2.3.4_Переход.webp';
import Direction235 from '@/public/image/2.3.5_Переход.webp';
import Direction238 from '@/public/image/2.3.8_Переход.webp';
import InstituteImage from '@/public/image/институт.webp';
import RTUITLab from '@/public/image/Лаба_Переход.webp';
import Infrastructure from '@/public/image/Инфраструктура.webp';

async function ParserDirections(directions: string[]) {
  const array = [];
  for (let i = 0; i < directions.length; i++) {
    const data = await getRequest(directions[i]);
    if (data.guide_treshold_scores) {
      array.push(
        'Проходной балл в ' + data.guide_treshold_scores.at(-1).year + ' году: ' + data.guide_treshold_scores.at(-1).treshold_score,
      );
    } else {
      array.push(null);
    }
  }
  return array;
}

export async function GET(request: Request) {
  const directionsBachelor = [
    'https://priem.mirea.ru/lk/api/directions/get/53',
    'https://priem.mirea.ru/lk/api/directions/get/1',
    'https://priem.mirea.ru/lk/api/directions/get/2',
    'https://priem.mirea.ru/lk/api/directions/get/3',
  ];

  const directionsMagistracy = [
    'https://priem.mirea.ru/lk/api/directions/get/213',
    'https://priem.mirea.ru/lk/api/directions/get/5',
    'https://priem.mirea.ru/lk/api/directions/get/6',
    'https://priem.mirea.ru/lk/api/directions/get/7',
  ];

  const scoreBachelor = await ParserDirections(directionsBachelor);
  const scoreMagistracy = await ParserDirections(directionsMagistracy);

  const data = {
    menuSection: {
      image: DirectionsImage,
      text: 'НАПРАВЛЕНИЯ И ПРОФИЛИ ОБУЧЕНИЯ',
    },
    sections: [
      {
        sectionId: {
          link: 'education',
          text: 'КОГО МЫ ОБУЧАЕМ?',
        },
        titleText: {
          heading: 'КОГО МЫ ОБУЧАЕМ?',
          text: [
            'Образовательные направления Института информационных технологий прежде всего направлены на подготовку специалистов для современной IT-индустрии, что выделяет нас среди других институтов РТУ МИРЭА. Наши программы предоставляют обширный спектр знаний с акцентом на программирование, разработку программного обеспечения, анализ предметных областей, проектирование цифровых продуктов и систем, математическое моделирование с использованием специализированного ПО, 3D-моделирование, искусственный интеллект и другие аспекты IT-индустрии.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: Analytics,
                heading: 'Аналитиков больших данных, дата-инженеров и математиков',
                text: null,
              },
              {
                numberOrImage: Engineer,
                heading: 'Инженеров разработчиков низкоуровневого ПО и вычислительных систем',
                text: null,
              },
              {
                numberOrImage: Architect,
                heading: 'Проектировщиков программного обеспечения, менеджеров, бизнес и IT аналитиков',
                text: null,
              },
              {
                numberOrImage: SoftwareEngineer,
                heading: 'Программистов разработчиков приложений и информационных систем',
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
          link: 'facts',
          text: 'ЦИФРЫ И ФАКТЫ',
        },
        titleText: {
          heading: 'ЦИФРЫ И ФАКТЫ',
          text: null,
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: '4',
                heading: 'Направления бакалавриата',
                text: null,
              },
              {
                numberOrImage: '4',
                heading: 'Направления магистратуры',
                text: null,
              },
              {
                numberOrImage: '5',
                heading: 'Направлений аспирантуры',
                text: null,
              },
              {
                numberOrImage: '8',
                heading: 'Профилей совместно реализованных с партнёрами',
                text: null,
              },
              {
                numberOrImage: FactGraduates,
                heading: 'Выпускники - одни из самых востребованных среди работодателей в стране',
                text: null,
              },
              {
                numberOrImage: FactPay,
                heading: 'Неограниченное количество учебных мест на платную основу обучения',
                text: null,
              },
              {
                numberOrImage: FactMilitary,
                heading: 'Военная кафедра на лейтенанта запаса (3 года) с отбором в конце 2 курса бакалавриата',
                text: null,
              },
              {
                numberOrImage: FactProfiles,
                heading: 'Студенты раньше изучают профильные дисциплины, чем в других высших учебных заведениях ',
                text: null,
              },
            ],
            side: 'left',
            background: 'white',
            gapInside: '36px/auto',
            gapOutside: '16px',
            imgSize: '110px',
          },
        ],
      },
      {
        sectionId: {
          link: 'bachelor',
          text: 'НАПРАВЛЕНИЯ БАКАЛАВРИАТА',
        },
        titleText: {
          heading: 'НАПРАВЛЕНИЯ БАКАЛАВРИАТА',
          text: [
            'В рамках данных направлений осуществляется комплексная подготовка будущих IT-специалистов с дипломом бакалавриата. Наша программа обучает студентов в широком спектре IT-сферы, включая разработку, проектирование, математику, информатику и анализ, а также позволяет им специализироваться в выбранной ими сфере IT. Учебный процесс начинается с основных дисциплин и постепенно переходит к более специализированным предметам. Каждый семестр студенты приобретают все больше знаний и навыков в выбранной ими области.',
          ],
        },
        elements: [
          {
            type: 'transition',
            reverse: false,
            array: [
              {
                linkImage: Direction010304,
                text: '01.03.04 | Прикладная математика',
                linkPage: '/directions/01-03-04',
                alt: 'Прик мат',
                additionalText: scoreBachelor[0],
                targetBlank: false,
              },
              {
                linkImage: Direction090301,
                text: '09.03.01 | Информатика и вычислительная техника',
                linkPage: '/directions/09-03-01',
                alt: 'ИВТ',
                additionalText: scoreBachelor[1],
                targetBlank: false,
              },
              {
                linkImage: Direction090303,
                text: '09.03.03 | Прикладная информатика',
                linkPage: '/directions/09-03-03',
                alt: 'Прик инф',
                additionalText: scoreBachelor[2],
                targetBlank: false,
              },
              {
                linkImage: Direction090304,
                text: '09.03.04 | Программная инженерия',
                linkPage: '/directions/09-03-04',
                alt: 'Приг инж',
                additionalText: scoreBachelor[3],
                targetBlank: false,
              },
            ],
          },
        ],
      },
      {
        sectionId: {
          link: 'magistracy',
          text: 'НАПРАВЛЕНИЯ МАГИСТРАТУРЫ',
        },
        titleText: {
          heading: 'НАПРАВЛЕНИЯ МАГИСТРАТУРЫ',
          text: [
            'Магистерская программа в сфере информационных технологий образует высококвалифицированных профессионалов. Студенты обретают навыки, связанные с профессиональной ориентацией, различными методологиями, управлением, проектированием и разработкой. Перед началом обучения абитуриенты могут выбрать свои индивидуальные направления и специализации в определенных областях IT.',
          ],
        },
        elements: [
          {
            type: 'transition',
            reverse: false,
            array: [
              {
                linkImage: Direction010404,
                text: '01.04.04 | Прикладная математика',
                linkPage: '/directions/01-04-04',
                alt: 'Прик мат',
                additionalText: scoreMagistracy[0],
                targetBlank: false,
              },
              {
                linkImage: Direction090401,
                text: '09.04.01 | Информатика и вычислительная техника',
                linkPage: '/directions/09-04-01',
                alt: 'ИВТ',
                additionalText: scoreMagistracy[1],
                targetBlank: false,
              },
              {
                linkImage: Direction090403,
                text: '09.04.03 | Прикладная информатика',
                linkPage: '/directions/09-04-03',
                alt: 'Прик инф',
                additionalText: scoreMagistracy[2],
                targetBlank: false,
              },
              {
                linkImage: Direction090404,
                text: '09.04.04 | Программная инженерия',
                linkPage: '/directions/09-04-04',
                alt: 'Приг инж',
                additionalText: scoreMagistracy[3],
                targetBlank: false,
              },
            ],
          },
        ],
      },
      {
        sectionId: {
          link: 'postgraduate',
          text: 'НАПРАВЛЕНИЯ АСПИРАНТУРЫ',
        },
        titleText: {
          heading: 'НАПРАВЛЕНИЯ АСПИРАНТУРЫ',
          text: [
            'Наш институт также занимается подготовкой научных и научно-педагогических кадров, в рамках второй или третей ступени высшего образования под названием аспирантура. Поступление в аспирантуру на основании диплома специалиста или магистра возможно как на бюджетной, так и на договорной основе. По окончании обучения вы получаете заключение о соответствии диссертации критериям, установленным в соответствии с Федеральным законом и от 23 августа 1996 г. № 127-ФЗ «О науке и государственной научно-технической политике» и свидетельство об окончании аспирантуры.',
          ],
        },
        elements: [
          {
            type: 'transition',
            reverse: false,
            array: [
              {
                linkImage: Direction122,
                text: '1.2.2 | Математическое моделирование, численные методы и комплексы программ',
                linkPage: 'https://priem.mirea.ru/guide-direction?direction_id=582',
                alt: 'Мат моделирование',
                additionalText: null,
                targetBlank: true,
              },
              {
                linkImage: Direction232,
                text: '2.3.2 | Вычислительные системы и их элементы',
                linkPage: 'https://priem.mirea.ru/guide-direction?direction_id=609',
                alt: 'Вычислительные системы',
                additionalText: null,
                targetBlank: true,
              },
              {
                linkImage: Direction234,
                text: '2.3.4 | Управление в организационных системах',
                linkPage: 'https://priem.mirea.ru/guide-direction?direction_id=611',
                alt: 'Управление',
                additionalText: null,
                targetBlank: true,
              },
              {
                linkImage: Direction235,
                text: '2.3.5 | Математическое и программное обеспечение вычислительных систем, комплексов и компьютерных сетей',
                linkPage: 'https://priem.mirea.ru/guide-direction?direction_id=612',
                alt: 'Мат и ПО систем',
                additionalText: null,
                targetBlank: true,
              },
              {
                linkImage: Direction238,
                text: '2.3.8 | Информатика и информационные процессы',
                linkPage: 'https://priem.mirea.ru/guide-direction?direction_id=613',
                alt: 'Информатика и процессы',
                additionalText: null,
                targetBlank: true,
              },
            ],
          },
        ],
      },
    ],
    downTransition: {
      element1: { linkImage: InstituteImage, linkPage: '/institute', text: 'ОБ ИНСТИТУТЕ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ' },
      element2: { linkImage: RTUITLab, linkPage: 'https://rtuitlab.dev', text: 'IT лабораториЯ ИИТ', targetBlank: true },
      element3: { linkImage: Infrastructure, linkPage: '/infrastructure', text: 'КАМПУС, ИНФРАСТРУКТУРА И МЕГАЛАБОРАТОРИИ' },
    },
  };
  return Response.json(data);
}

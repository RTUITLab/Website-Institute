import Image090301 from '@/public/image/09.03.01.webp';
import SvgBasicIT from '@/public/svg/basic_it.svg';
import SvgBinary from '@/public/svg/binary.svg';
import SvgMicro from '@/public/svg/micro.svg';
import { createElementsInformation } from '@/app/directions/api/functions';
import IIT from '@/public/image/иит.webp';
import D090301P1S1 from '@/public/svg/spheres/09-03-01/1/1.svg';
import D090301P1S2 from '@/public/svg/spheres/09-03-01/1/2.svg';
import D090301P1S3 from '@/public/svg/spheres/09-03-01/1/3.svg';
import D090301P1S4 from '@/public/svg/spheres/09-03-01/1/4.svg';
import D090301P1S5 from '@/public/svg/spheres/09-03-01/1/5.svg';
import D090301P1S6 from '@/public/svg/spheres/09-03-01/1/6.svg';
import D090301P1S7 from '@/public/svg/spheres/09-03-01/1/7.svg';
import D090301P1S8 from '@/public/svg/spheres/09-03-01/1/8.svg';
import CKSS from '@/public/image/цксс.webp';
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
import Image090303 from '@/public/image/09.03.03.webp';
import Image090304 from '@/public/image/09.03.04.webp';
import Image010304 from '@/public/image/01.03.04.webp';

export default async function dataGet090301() {
  const urlInformation = 'https://priem.mirea.ru/lk/api/directions/get/1';

  const data = {
    menuSection: {
      image: Image090301,
      text: '09.03.01 | ИНФОРМАТИКА И ВЫЧИСЛИТЕЛЬНАЯ ТЕХНИКА',
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
            'Направление ориентировано на подготовку профессионалов в широком спектре технологий, связанных с компьютерной и вычислительной техникой, среди которых аппаратная платформа компьютеров, серверов, вычислительных машин, комплексов, систем и сетей; операционные системы и системное программное обеспечение; автоматизированные информационно-аналитические и управляющие системы, все виды обеспечивающих подсистем.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: SvgBasicIT,
                heading: 'Базовые знания и умения для IT специалиста',
                text: [
                  'Независимо от направления вы получите базовые знания программирования на разных языках программирования, умения анализировать и проектировать бизнес-процессы, базовые знания высшей математики и информатики.',
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
            background: 'white',
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
          ['Бакалавр'],
          ['Очная (дневная)'],
          ['4 года'],
          ['Информатика и ИКТ ИЛИ Физика', 'Математика профильная', 'Русский язык'],
          'https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/bakalavriat/09-03-01-informatics-and-computer-engineering/',
          'https://priem.mirea.ru/guide-direction?direction_id=1',
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
            'В рамках данного направления предлагаются 2 профиля, которые станут доступными для вас после завершения первого курса обучения, на основе результатов вашей успеваемости, достижений и личного выбора. Выбранные профили позволят студентам овладеть определёнными дисциплинами, связанными с низкоуровневой разработкой ПО, проектированием сетей и работой с электронными вычислительными системами. Профиль “Цифровые комплексы, системы и сети” реализован при поддержке стороннего партнера, компании Samsung.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: 1,
                heading: 'Ключевой партнёр направления',
                text: null,
              },
              {
                numberOrImage: 2,
                heading: 'Профиля/Специальности',
                text: null,
              },
              {
                numberOrImage: '68%',
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
                heading: 'ИНФРАСТРУКТУРА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ',
                linkImage: IIT,
                direction: null,
                partner: 'Реализовано совместно с компанией Huawei',
                department: 'Кафедра практической и прикладной информатики',
                text:
                  'В ходе обучения студенты получают теоретическую и практическую подготовку в сфере проектирования, разработки, сопровождения и эксплуатации ИТ-инфраструктуры организации. То есть студенты учатся работать с целым комплексом программных и аппаратных компонент, который включает объекты физической инфраструктуры, сервера, центры обработки данных, коммутаторы, маршрутизаторы, концентраторы, рабочие места пользователей и т.д. и функционирующее на них программное обеспечение. \n' +
                  'В учебной, проектной и исследовательской деятельности студенты имеют доступ к современному серверному и сетевому оборудованию различных иностранных и отечественных производителей.\n' +
                  'Особое внимание уделяется изучению отечественных и зарубежных практик формирования и сопровождения традиционных и облачных инфраструктур. По результатам изучения профильных дисциплин имеется возможность прохождения соответствующей бесплатной аттестации в Академии Huawei. ',
                areasStudy: [
                  {
                    image: D090301P1S1,
                    heading: 'Схемотехника устройств компьютерных систем',
                    levelBase: false,
                  },
                  {
                    image: D090301P1S2,
                    heading: 'Информационно-технологическая инфраструктура',
                    levelBase: false,
                  },
                  {
                    image: D090301P1S3,
                    heading: 'Технологии облачных сервисов',
                    levelBase: true,
                  },
                  {
                    image: D090301P1S4,
                    heading: 'Технологии сетевой безопасности',
                    levelBase: false,
                  },
                  {
                    image: D090301P1S5,
                    heading: 'Системы и сети передачи данных',
                    levelBase: false,
                  },
                  {
                    image: D090301P1S6,
                    heading: 'Технологии мобильной связи, маршрутизации и коммутации',
                    levelBase: false,
                  },
                  {
                    image: D090301P1S7,
                    heading: 'Технологии искусственного интеллекта в облачных сервисах',
                    levelBase: true,
                  },
                  {
                    image: D090301P1S8,
                    heading: 'Технологии хранения и передачи данных',
                    levelBase: true,
                  },
                ],
              },
              {
                heading: 'ЦИФРОВЫЕ КОМПЛЕКСЫ, СИСТЕМЫ И СЕТИ',
                linkImage: CKSS,
                direction: null,
                partner: 'Реализовано совместно с компанией Samsung',
                text: 'В ходе обучения студенты получают теоретическую и практическую подготовку в области проектирования, разработки, сопровождения, эксплуатации и программирования устройств, комплексов, систем и сетей, предназначенных как для хранения и обработки данных, так и для решения задач автоматизации. Студенты имеют доступ к современным учебным лабораториям по электротехнике, электронике и микропроцессорной технике. Лабораторные стенды соответствуют современному уровню развития вычислительной техники, а отладочные платы с промышленными микропроцессорами позволяют прототипировать программно-аппаратные комплексы для широкого спектра задач.',
                department: 'Кафедра Вычислительной техники',
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
            background: 'gray',
            gapInside: '36px',
            gapOutside: '24px',
            imgSize: '110px',
          },
        ],
      },
      {
        sectionId: {
          link: 'video',
          text: 'ВИДЕО ПРО НАПРАВЛЕНИЕ',
        },
        titleText: {
          heading: 'ВИДЕО ПРО НАПРАВЛЕНИЕ',
          text: [
            'Видеоролик рассказывает о направлении «информатика и вычислительная техника» и её профилях. Видеоролик был записан ответственным по работе со студентами - Ярославом Алексеевичем Акатьевым. Видео актуально на момент приёмной кампании 2022 года. ',
          ],
        },
        elements: [
          {
            type: 'video',
            src: 'https://rutube.ru/play/embed/0a755dc0a2c0203d38d68b06020c8286',
          },
        ],
      },
    ],
    downTransition: {
      heading: 'ДРУГИЕ НАПРАВЛЕНИЯ БАКАЛАВРИАТА НАШЕГО ИНСТИТУТА',
      element1: {
        linkImage: Image090303,
        linkPage: '/directions/09-03-03',
        text: '09.03.03 | Прикладная информатика',
      },
      element2: { linkImage: Image090304, linkPage: '/directions/09-03-04', text: '09.03.04 | Программная инженерия' },
      element3: {
        linkImage: Image010304,
        linkPage: '/directions/01-03-04',
        text: '01.03.04 | Прикладная математика',
      },
    },
  };

  return data;
}

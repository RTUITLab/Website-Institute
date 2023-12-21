import { NextResponse } from 'next/server';
import InstituteImage from '@/public/image/институт.webp';
import MIREASvg from '@/public/svg/MIREA_Gerb_Colour.svg';
import IitSvg from '@/public/svg/it_svg_logo.svg';
import GameDev from '@/public/svg/gamedev.webp';
import Data from '@/public/svg/data.webp';
import IOT from '@/public/svg/iot.webp';
import Network from '@/public/svg/network.webp';
import AI from '@/public/svg/ai.webp';
import Mobile from '@/public/svg/mobile.webp';
import Frontend from '@/public/svg/frontend.webp';
import OneC from '@/public/svg/1c.webp';
import RosAtomLogo from '@/public/svg/RosAtomLogo.svg';
import SamsungLogo from '@/public/svg/SamsungLogo.svg';
import VkLogo from '@/public/svg/VkLogo.svg';
import YandexLogo from '@/public/svg/YandexLogo.svg';
import RostelecomLogo from '@/public/svg/RostelecomLogo.svg';
import Fact1 from '@/public/image/fact1.webp';
import Fact3 from '@/public/image/fact3.webp';
import Fact2 from '@/public/image/fact2.webp';
import Fact4 from '@/public/image/fact4.webp';
import AdmissionImage from '@/public/image/admission.webp';

export async function GET() {
  const data = {
    menuSection: {
      image: InstituteImage,
      text: 'ИНСТИТУТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ РТУ МИРЭА',
    },
    sections: [
      {
        sectionId: {
          link: 'structure',
          text: 'Узнать про институт',
        },
        titleText: {
          heading: 'Начните своЁ творческое приключение сегодня!',
          text: null,
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: Number('4'),
                heading: 'Мегалаборатории института информационных технологий',
                text: null,
              },
              {
                numberOrImage: Number('18'),
                heading: 'Кафедр института и базовых кафедр партнёров ИИТ',
                text: null,
              },
              {
                numberOrImage: Number('6965'),
                heading: 'Студентов института ИТ, учится в 2023 году',
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
            type: 'textCard',
            array: [
              {
                image: MIREASvg,
                heading: 'РОССЙИСКИЙ ТЕХНОЛОГИЧЕСКИЙ УНИВЕРСИТЕТ МИРЭА',
                text: 'Институт информационных технологий, находящийся в составе МИРЭА - Российского технологического университета, является структурным подразделением, которое активно занимается подготовкой студентов на бакалавриате и магистратуре по важнейшим направлениям, включая программную инженерию, прикладную информатику, информатику и вычислительную технику, а также прикладную математику. Кроме того, институт обеспечивает подготовку аспирантов в пяти ключевых областях.',
                backgroundBlue: true,
              },
              {
                image: IitSvg,
                heading: 'ИНСТИТУТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ',
                text: 'В отличие от других институтов РТУ МИРЭА, наш институт в первую очередь ориентирован на подготовку студентов в области программирования, разработки программного обеспечения и IT-сферы. При этом мы также уделяем внимание инженерным, математическим и бизнес-информационным наукам, но в меньшей степени. Например, студенты направления "Информатика и вычислительная техника" в основном занимаются разработкой программного обеспечения для различных устройств, а прикладные математики именно занимаются практическим применением математические методов в анализе данных и в области искусственного интеллекта.',
                backgroundBlue: false,
              },
            ],
          },
        ],
      },
      {
        sectionId: {
          link: 'mission',
          text: 'Деятельность института',
        },
        titleText: {
          heading: 'НАША МИССИЯ И УНИКАЛЬНЫЕ «ФИШКИ»',
          text: [
            'Нашей задачей является подготовка будущих специалистов в IT-отрасли, предоставляя им образовательные программы и современное оборудование. Наш институт выделяется среди других институтов и факультетов тем, что мы специализируемся исключительно на подготовке IT-специалистов, способных разрабатывать IT-продукты и программное обеспечение.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: Number('8'),
                heading: 'Направлений бакалавриата и магистратуры',
                text: null,
              },
              {
                numberOrImage: Number('19'),
                heading: 'Профилей направлений бакалавриата и магистратуры',
                text: null,
              },
              {
                numberOrImage: Number('36'),
                heading: 'Программ дополнительной подготовки ИИТ и РТУ МИРЭА',
                text: null,
              },
            ],
            side: 'center',
            background: 'white',
            gapInside: '36px',
            gapOutside: '24px',
            imgSize: '110px',
          },
          {
            type: 'imageCard',
            array: [
              {
                image: GameDev,
                heading: 'Motion Capture, 3D,  VR/AR, видеоигры',
              },
              {
                image: Data,
                heading: 'Big Data и анализ данных',
              },
              {
                image: IOT,
                heading: 'Облачные технологии, вычисления и IOT',
              },
              {
                image: Network,
                heading: 'Драйвера, сети и низкоуровневые системы',
              },
              {
                image: AI,
                heading: 'ИИ и машинное обучение',
              },
              {
                image: Mobile,
                heading: 'Мобильные приложения и технологии',
              },
              {
                image: Frontend,
                heading: 'Frontend, Backend разработка и WEB технологии',
              },
              {
                image: OneC,
                heading: 'Средства автоматизации и информатизации организаций',
              },
            ],
          },
        ],
      },
      {
        sectionId: {
          link: 'partners',
          text: 'Посмотреть партнёров',
        },
        titleText: {
          heading: 'ПАРТНЁРЫ ИНСТИТУТА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ',
          text: null,
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: Number('16'),
                heading: 'Ключевых партнёров института',
                text: null,
              },
              {
                numberOrImage: Number('8'),
                heading: 'Профилей реализованных совместно с партнёрами',
                text: null,
              },
              {
                numberOrImage: Number('6'),
                heading: 'Программ дополнительной подготовки от партнёров',
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
            type: 'partnersCard',
            array: [
              {
                image: RosAtomLogo,
                heading: 'Росатом',
                text: 'Госкорпорация «Росатом», АО «Консист-ОС» и АО «Гринатом»',
              },
              {
                image: SamsungLogo,
                heading: 'SAMSUNG',
                text: 'Samsung Group — южнокорейская группа IT компаний, IT академия Samsung',
              },
              {
                image: VkLogo,
                heading: 'VK',
                text: 'Российская инвестиционная технологическая корпорация «VK»',
              },
              {
                image: YandexLogo,
                heading: 'ЯНДЕКС',
                text: '«Яндекс» — российская транснациональная компания в отрасли IT',
              },
              {
                image: RostelecomLogo,
                heading: 'РОСТЕЛЕКОМ',
                text: 'ПАО «Ростелеком»',
              },
            ],
          },
        ],
      },
      {
        sectionId: {
          link: 'facts',
          text: 'Факты о институте',
        },
        titleText: {
          heading: 'ИНТЕРЕСНЫЕ ФАКТЫ ИНСТИТУТА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ',
          text: null,
        },
        elements: [
          {
            type: 'achievementCard',
            array: [
              {
                image: Fact1,
                heading: 'ЛОГОТИП',
                text: [
                  'В 2017 году институтом был утвержден новый логотип, символизирующий информационные сети, где каждый узел - нейрон, а связи между ними отражают взаимосвязь всех кафедр института.',
                  'Несмотря на уникальность каждой кафедры и их неповторимую деятельность, взаимодействие с остальными кафедрами, также как IT специалисты, становится неотъемлемой частью работы. Ведь с одного человека сложно требовать одновременно выполнять роль дизайнера, проектировщика, разработчика, аналитика и менеджера проекта.',
                ],
              },
              {
                image: Fact2,
                heading: 'ПАНДА КАК СИМВОЛ',
                text: [
                  'Животные испокон веков считаются талисманами — одних считают символами любви и веры, других — приносящими удачу, а есть те, которые символизирует трудолюбие и целеустремлённость.',
                  'Символ Института информационных технологий — панда, а панда — это символ мира, спокойствия и дружелюбия. Студенты нашего Института, точно как панды: спокойны на экзамене, сосредоточены на парах, всегда готовы прийти на помощь и поддержать в трудную минуту.',
                  'Логотип «медвежьей кошки» является символом не только у нас, но и у других больших компаний.',
                ],
              },
              {
                image: Fact3,
                heading: 'ПЕРВАЯ И ЕДИНСТВЕННАЯ MOTION CAPTURE ЛАБОРАТОРИЯ',
                text: [
                  'В 2020 году создана первая и единственная на базе вузов РФ лаборатория технологий трекинга и захвата движения, оснащенная оборудованием компаний Vicon и Faceware Technologies. Оснащение лаборатории позволяет выполнять полный цикл работ в сфере анимации для лучших современных фильмов и игр AAA-класса.',
                  'С 2022 года оборудование данной лаборатории применяется в учебном процессе студентов направления 09.03.04 по профилю «Разработка и дизайн компьютерных игр и мультимедийных приложений», реализуемому с ключевым отечественным технологическим партнёром — VK.',
                ],
              },
              {
                image: Fact4,
                heading: 'IT АКАДЕМИЯ SAMSUNG',
                text: [
                  'В 2017 году в ИИТ РТУ МИРЭА и МФТИ совместно с Samsung Electronics созданы первые в России лаборатории технологий интернета вещей, а к концу 2022 года РТУ МИРЭА является единственным вузом в Москве и одним из восьми в России, реализующим обучение студентов по всем четырём трекам проекта «IT Академия Samsung».',
                ],
              },
            ],
          },
        ],
      },
      {
        sectionId: {
          link: 'entrance',
          text: 'Узнать про поступление',
        },
        titleText: {
          heading: 'ХОТИТЕ ПОСТУПИТЬ К НАМ?',
          text: null,
        },
        elements: [
          {
            type: 'admissionCard',
            heading: 'ПРИЁМНАЯ КОММИССИЯ ',
            buttonOne: {
              link: 'https://priem.mirea.ru',
              text: 'ПРИЁМНАЯ КОММИССИЯ',
            },
            buttonTwo: {
              link: 'https://www.mirea.ru/education/the-institutes-and-faculties/',
              text: 'ДРУГИЕ ИНСТИТУТЫ РТУ МИРЭА',
            },
            text: 'Поступление в РТУ МИРЭА и Институт информационных технологий осуществляется через приемную комиссию как на платной, так и на бюджетной основе. Подробную информацию о процедуре приема и ее правилах вы можете найти на официальном сайте приемной комиссии.',
            image: AdmissionImage,
          },
        ],
      },
    ],
  };

  return NextResponse.json(data, { status: 200 });
}

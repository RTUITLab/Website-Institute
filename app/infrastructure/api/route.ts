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
import InfrastructureImage from '@/public/image/Инфраструктура.webp';
import Map from '@/public/svg/карта.svg';
import Metro from '@/public/svg/метро.svg';
import Square from '@/public/svg/площадь.svg';
import Campus_photo_1 from '@/public/image/кампус_фото1.webp';
import Campus_photo_2 from '@/public/image/кампус_фото2.webp';
import Campus_photo_3 from '@/public/image/кампус_фото3.webp';
import CampusUp from '@/public/image/CampusUp.webp';
import Campus_last from '@/public/image/last_campus.webp';
import Hostel from '@/public/image/hostel.webp';
import Laboratory1 from '@/public/image/лаба_инженерка.webp';
import Laboratory2 from '@/public/image/лаба_кресла.webp';
import Laboratory3 from '@/public/image/лаба_мокап.webp';
import Laboratory4 from '@/public/image/лаба_вр.webp';
import GameDev from '@/public/svg/gamedev.webp';
import Data from '@/public/svg/data.webp';
import IOT from '@/public/svg/iot.webp';
import Network from '@/public/svg/network.webp';
import AI from '@/public/svg/ai.webp';
import Mobile from '@/public/svg/mobile.webp';
import Frontend from '@/public/svg/frontend.webp';
import OneC from '@/public/svg/1c.webp';
import ClassroomIIT1 from '@/public/image/самсунг_лаба.webp';
import ClassroomIIT2 from '@/public/image/ии_аудитория.webp';
import ClassroomIIT3 from '@/public/image/итаэ_аудитория.webp';
import ClassroomIIT4 from '@/public/image/мосит_аудитория.webp';
import ClassroomIIT5 from '@/public/image/ппи_аудитория.webp';
import ClassroomIIT6 from '@/public/image/иппо_аудитория.webp';
import ClassroomIIT7 from '@/public/image/вт_аудитория.webp';
import ClassroomIIT8 from '@/public/image/цт_аудитория.webp';
import ClassroomIIT9 from '@/public/image/кис_аудитория.webp';
import ClassroomIIT10 from '@/public/image/вм_аудитория.webp';
import ClassroomAll1 from '@/public/image/лекционная.webp';
import ClassroomAll2 from '@/public/image/техноковоркинг_аудитории.webp';
import ClassroomAll3 from '@/public/image/компы_библиотека.webp';
import ClassroomAll4 from '@/public/image/ивц.webp';
import ClassroomAll5 from '@/public/image/англ.webp';
import ClassroomAll6 from '@/public/image/лаба_физика.webp';
import ExtracurricularInfrastructure1 from '@/public/image/столовая.webp';
import ExtracurricularInfrastructure2 from '@/public/image/спорт_комплекс.webp';
import ExtracurricularInfrastructure3 from '@/public/image/военный_центр.webp';
import ExtracurricularInfrastructure4 from '@/public/image/полигон_спасателей.webp';
import ExtracurricularInfrastructure5 from '@/public/image/столы.webp';
import ExtracurricularInfrastructure6 from '@/public/image/чилл_в_кз.webp';
import ExtracurricularInfrastructure7 from '@/public/image/проектная_зона.webp';
import ExtracurricularInfrastructure8 from '@/public/image/библиотека.webp';
import ExtracurricularInfrastructure10 from '@/public/image/актовый_зал.webp';
import ExtracurricularInfrastructure9 from '@/public/image/киберзона.webp';

export async function GET() {
  const data = {
    menuSection: {
      image: InfrastructureImage,
      text: 'КАМПУС, ИНФРАСТРУКТУРА И МЕГАЛАБОРАТОРИИ',
    },
    sections: [
      {
        sectionId: {
          link: 'info_equipment',
          text: 'ИНФОРМАЦИЯ ПРО ОБОРУДОВАНИЕ',
        },
        titleText: {
          heading: 'ОСНОВНОЙ КАМПУС',
          text: [
            'Рассказываем и показываем, основной кампус РТУ МИРЭА, на территории которого будет проходить 95% всех занятий студентов института информационных технологий.',
            'Долгое время после своего создания в 1947 году вуз базировался на разных площадках. Собственный дом он начал обретать только в 1969 году, тогда началось строительство на тот момент современного учебного комплекса общей площадью 100 тыс. м2 на Юго-Западе Москвы.',
            'В 1976 году первым введен в строй корпус Б. Здесь размещались ректорат и деканаты (ныне институт радиоэлектроники и информатики). Занятия всех факультетов в здании на проспекте Вернадского, 78 в корпусе А начались в 1979/1980 учебном году. Строительство здания МИРЭА завершилось в 80-е годы. Учебные площади институтов разместились в 6-ти корпусах.',
            'Именно здесь сегодня расположено большинство мегалабораторий, аудиторий, внеучебной инфраструктуры и институт информационных технологий. В кампусе на проспекте Вернадского, 78 находится и легендарный коридор длиной 459 метров. В его центре — не менее легендарные «Штаны», лестницы на нижний этаж. Предшествующие поколения окрестили их так потому, что лестницы напоминают ноги гимнаста, который присаживается на шпагат.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: Map,
                heading: 'Адрес: г. Москва, ул. проспект Вернадского, д. 78, стр. 4',
                text: null,
              },
              {
                numberOrImage: Metro,
                heading: 'Станция метро «Юго-Западная», 5 минут пешком до кампуса',
                text: null,
              },
              {
                numberOrImage: Square,
                heading: 'Площадь всех сооружений этого кампуса 113 тыс. м2',
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
            type: 'imagesTable',
            array: [Campus_photo_1, Campus_photo_2, Campus_photo_3, CampusUp],
            titleKeyAndAlt: 'photo_campus',
          },
          {
            type: 'imageAndTextCard',
            image: Campus_last,
            heading: 'ДРУГИЕ КАМПУСЫ',
            text: [
              'Оставшиеся 5% учебных занятий проводятся в другом кампусе РТУ МИРЭА, который находится по адресу "г. Москва, улица Малая Пираговка, д. 1, стр. 5". В этом кампусе студенты изучают такие дисциплины, как "Философия", а также могут заниматься "Правоведением" и "Искусственным интеллектом". Однако занятия по последним двум дисциплинам также могут проводиться и в кампусе на Проспекте Вернадского, д. 78.',
              'В дополнение к этому, существуют ещё пять кампусов и отделений, где у студентов ИТ не проводятся академические занятия. Однако, в этих местах могут проходить различные внеучебные мероприятия.',
              'Например, на проспекте Вернадского, дом 86, кампус института тонких химических технологий  предоставляет возможность проведения разнообразных развлекательных студенческих мероприятий.',
              'Большой бассейн на улице Стромынка, дом 20, подходит для водных спортивных мероприятий.',
              'А при похождение обучения на военнкой кафере, студенты могут проходить обучение в строение, расположенном на улице Усачёва, дом 7/1.',
            ],
            buttons: null,
            reverse: false,
          },
          {
            type: 'imageAndTextCard',
            image: Hostel,
            heading: 'ОБЩЕЖИТИЯ',
            text: [
              'Абитуриентам, проживающим за автодорогой А-108, и поступающим на направления бакалавриата и магистратуры нашего университета, предоставляется возможность получить общежитие в РТУ МИРЭА. Возможность получения места в общежитие также доступна во время учебы через включение в специальную очередь.',
              'На момент проведения приемной компании в 2023 году РТУ МИРЭА имеет в своём распоряжение шесть общежитий для студентов. Расстояние до основного кампуса может варьироваться от 10 минут до 1 часа в зависимости от выбранного общежития. Кроме того, университет имеет возможность размещения абитуриентов, в общежитиях своих партнеров.',
            ],
            buttons: [
              { targetBlank: true, link: 'https://www.mirea.ru/about/hostel/', text: 'УСЛОВИЯ ПОЛУЧЕНИЯ МЕСТА В ОБЩЕЖИТИЕ' },
              { targetBlank: true, link: 'https://priem.mirea.ru/about/campus/about', text: 'ПОДРОБНЕЕ ПРО ОБЩЕЖИТИЯ' },
            ],
            reverse: true,
          },
        ],
      },
      {
        sectionId: {
          link: 'megalaboratory',
          text: 'Узнать про мегалаборатории',
        },
        titleText: {
          heading: 'МЕГАЛАБОРАТОРИИ ИНСТИТУТА',
          text: [
            'На базе института информационных технологий были созданы четыре мегалаборатории, в которых осуществляется полноценное обучение студентов, проведение научных исследований, а также реализация производственных проектов, соответствующих специфике каждой лаборатории. Все мегалаборатории имеют свои уникальные особенности и оснащены ценным и передовым оборудованием, которое студенты имеют возможность использовать как во время обучения, так и при необходимости для реализации собственных исследовательских задач.',
            'Часть лабораторий создана при активном взаимодействии с различными партнёрами, среди которых компании "ВКонтакте" и корпорация "Ростелеком". Это сотрудничество позволяет не только обогатить учебный процесс богатым практическим опытом, но и создает условия для разработки инновационных проектов, направленных на решение актуальных задач в сфере информационных технологий.',
            'Каждая мегалаборатория имеет свою уникальную специализацию и направленность, обеспечивая студентам богатый и разносторонний опыт работы с передовым оборудованием и реальными проектами, что способствует их успешной подготовке к будущей профессиональной деятельности.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: '4',
                heading: 'Уникальных мегалаборатории',
                text: null,
              },
              {
                numberOrImage: '110+',
                heading: 'Учебных и рабочих мест',
                text: null,
              },
              {
                numberOrImage: '210+',
                heading: 'Устройств и компьютерного оборудования',
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
            type: 'blockImage',
            image: Laboratory1,
            heading: 'Учебно-научный испытательный комплекс «Импортозамещение информационных технологий»',
            buttonBasic:
              'https://www.mirea.ru/education/megalaboratories/uchebno-nauchnyy-ispytatelnyy-kompleks-importozameshchenie-informatsionnykh-tekhnologiy/',
            buttonImportant: './infrastructure/laboratory_import_substitution_of_information_technologies',
            reverse: true,
          },
          {
            type: 'blockImage',
            image: Laboratory2,
            heading:
              'Универсальная учебно-научная лаборатория технологий аналитики, моделирования, проектирования и цифрового прототипирования',
            buttonBasic:
              'https://www.mirea.ru/education/megalaboratories/universal-educational-scientific-laboratory-technology-analytics-modeling-design-and-digital-prototy/',
            buttonImportant: './infrastructure/laboratory_technology_analytics_modeling_design_and_digital_prototyping',
            reverse: false,
          },
          {
            type: 'blockImage',
            image: Laboratory3,
            heading: 'Лаборатория захвата движения (Motion capture)',
            buttonBasic: 'https://www.mirea.ru/education/megalaboratories/lab-motion-capture/',
            buttonImportant: './infrastructure/laboratory_motion_capture',
            reverse: true,
          },
          {
            type: 'blockImage',
            image: Laboratory4,
            heading: 'Лаборатория иммерсивных технологий (VR/AR/MR/XR)',
            buttonBasic: 'https://www.mirea.ru/education/megalaboratories/laboratory-of-immersive-technologies/',
            buttonImportant: './infrastructure/laboratory_immersive_technologies',
            reverse: false,
          },
        ],
      },
      {
        sectionId: {
          link: 'classroom_iit',
          text: 'Посмотреть аудитории института',
        },
        titleText: {
          heading: 'АУДИТОРИИ ИНСТИТУТА',
          text: [
            'Институт информационных технологий располагает более чем 28 компьютерными учебными аудиториями и стандартными лабораториями, предназначенными для проведения семинаров и практических занятий с использованием передового, мощного и специализированного оборудования, идеально подходящего для охвата различных дисциплин. Эти помещения находятся в корпусе «Г», а также в локации института в корпусе «А».',
            'Компьютерное оборудование, предоставляемое в аудиториях, подходит как для решения базовых задач, так и для выполнения тяжелых и сложных заданий, таких как 3D-моделирование, анализ данных, создание моделей поведения объектов, проектирование логических схем, работа с нейронными сетями, а также работа с инженерным оборудованием в требовательных средах разработки. Это позволяет студентам эффективно осваивать программирование и технологии, подготавливая их к дальнейшей реализации сложных проектов.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: '28+',
                heading: 'Компьютерных аудиторий',
                text: null,
              },
              {
                numberOrImage: '650+',
                heading: 'Учебных и рабочих мест',
                text: null,
              },
              {
                numberOrImage: '900+',
                heading: 'Устройств и компьютерного оборудования',
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
            type: 'tableImages',
            array: [
              {
                linkImage: ClassroomIIT1,
                heading: 'СПЕЦИАЛИЗИРОВАННАЯ УЧЕБНО-НАУЧНАЯ ЛАБОРАТОРИЯ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ ИНТЕРНЕТА ВЕЩЕЙ',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomIIT2,
                heading: 'Аудитория кафедры ИГРОВОЙ ИНДУСТРИИ',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomIIT3,
                heading: 'Аудитория кафедры ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ В АТОМНОЙ ЭНЕРГЕТИКЕ',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomIIT4,
                heading: 'Аудитория кафедры МАТЕМАТИЧЕСКОГО ОБЕСПЕЧЕНИЯ И СТАНДАРТИЗАЦИИ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomIIT5,
                heading: 'Аудитория кафедры ПРАКТИЧЕСКОЙ И ПРИКЛАДНОЙ ИНФОРМАТИКИ',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomIIT6,
                heading: 'Аудитория кафедры ИНСТРУМЕНТАЛЬНОГО И ПРИКЛАДНОГО ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomIIT7,
                heading: 'Аудитория кафедры ВЫЧИСЛИТЕЛЬНОЙ ТЕХНИКИ',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomIIT8,
                heading: 'Аудитория кафедры цифровой трансформации',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomIIT9,
                heading: 'Аудитория кафедры КОРПОРАТИВНЫХ ИНФОРМАЦИОННЫХ СИСТЕМ',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomIIT10,
                heading: 'Аудитория кафедры ВЫЧИСЛИТЕЛЬНОЙ МАТЕМАТИКИ',
                position: false,
                text: null,
              },
            ],
            styleTableImages: 'twoToOne',
          },
        ],
      },
      {
        sectionId: {
          link: 'classroom_mirea',
          text: 'Посмотреть аудитории университета',
        },
        titleText: {
          heading: 'ОБЩИЕ АУДИТОРИИ УНИВЕРСИТЕТА',
          text: [
            'В дополнение к вышеуказанным аудиториям и лабораториям, обучение студентов также будет проводиться в общих аудиториях, где предоставленное оборудование ориентировано на более простых и малых заданий, таких как ведение документации, написание простых программ и алгоритмов, проектирование блок-схем ПО и другие подобные задания. Такие аудитории расположены в информационно-вычислительном центре под корпусом «А», а также в корпусе «И».',
            'Студенты также будут заниматься в обычных аудиториях без электронно-вычислительной техники, где изучают иностранные, математические и гуманитарные дисциплины. Кроме того, учебные лекции будут проводиться в просторных и удобных аудиториях, оснащенных демонстрационным оборудованием и розетками.',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: '28+',
                heading: 'Компьютерных аудиторий',
                text: null,
              },
              {
                numberOrImage: '650+',
                heading: 'Учебных и рабочих мест',
                text: null,
              },
              {
                numberOrImage: '900+',
                heading: 'Устройств и компьютерного оборудования',
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
            type: 'tableImages',
            array: [
              {
                linkImage: ClassroomAll1,
                heading: 'ЛЕКЦИОННЫЕ АУДИТОРИИ УНИВЕРСИТЕТА',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomAll2,
                heading: 'УЧЕБНЫЕ КОМПЬЮТЕРНЫЕ АУДИТОРИИ И ЛЕКТОРИИ ТЕХНОКОВОРКИНГА',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomAll3,
                heading: 'КОМПЬЮТЕРНЫЕ АУДИТОРИИ КОРПУСА «И»',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomAll4,
                heading: 'ЛЕКЦИОННЫЕ АУДИТОРИИ УНИВЕРСИТЕТА',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomAll5,
                heading: 'Аудитории для занятий по иностранным языкам, математическим и гуманитарным дисциплинам',
                position: false,
                text: null,
              },
              {
                linkImage: ClassroomAll6,
                heading: 'Аудитории КАФЕДР ДРУГИХ ИНСТИТУТОВ ДЛЯ ЗАНЯТИЙ ПО ИХ ДИСЦИПЛИНАМ',
                position: false,
                text: null,
              },
            ],
            styleTableImages: 'twoToOne',
          },
        ],
      },
      {
        sectionId: {
          link: 'infrastructure',
          text: 'Посмотреть внеучебную инфраструктура',
        },
        titleText: {
          heading: 'ВНЕУЧЕБНАЯ ИНФРАСТРУКТУРА',
          text: [
            'На территории кампуса по адресу Проспект Вернадского, д. 78, созданы все необходимые условия и пространства для внеучебной деятельности, доступные всем студентам РТУ МИРЭА, независимо от их института. В числе них: столовые, кафетерии, чилл-зоны, проектные зоны и коворкинг, киберспортивный центр (игровой клуб), библиотека с читальным залом, игровая зона с теннисными и бильярдными столами, конференц-залы для проведения мероприятий, а также медицинские пункты и спортивная инфраструктура — от тренажерного зала до обширного спортивного комплекса с зоной для офп, баскетбола, волейбола и других видов спорта.',
          ],
        },
        elements: [
          {
            type: 'tableImages',
            array: [
              {
                linkImage: ExtracurricularInfrastructure1,
                heading: 'СТОЛОВЫЕ, КАФЕТЕРИИ И БУФЕТЫ',
                position: false,
                text: null,
              },
              {
                linkImage: ExtracurricularInfrastructure2,
                heading: 'Физкультурно-оздоровительный комплекс',
                position: false,
                text: null,
              },
              {
                linkImage: ExtracurricularInfrastructure3,
                heading: 'СТРАЙКБОЛЬНЫЙ КЛУБ И ВОЕННЫЙ УЧЕБНЫЙ ЦЕНТР',
                position: false,
                text: null,
              },
              {
                linkImage: ExtracurricularInfrastructure4,
                heading: 'Универсальный учебно-тренировочный комплекс подготовки студентов-спасателей',
                position: false,
                text: null,
              },
              {
                linkImage: ExtracurricularInfrastructure5,
                heading: 'ТЕННИСНЫЕ И БИЛЬЯРДНЫЕ ЗОНЫ',
                position: false,
                text: null,
              },
              {
                linkImage: ExtracurricularInfrastructure6,
                heading: 'ЧИЛЛ-ЗОНЫ (ЗОНЫ ОТДЫХА)',
                position: false,
                text: null,
              },
              {
                linkImage: ExtracurricularInfrastructure7,
                heading: 'ПРОЕКТНАЯ ЗОНА И ТЕХНОКОВОРКИНГ',
                position: false,
                text: null,
              },
              {
                linkImage: ExtracurricularInfrastructure8,
                heading: 'Информационно-библиотечный центр И ЧИТАЛЬНЫЙ ЗАЛ',
                position: false,
                text: null,
              },
              {
                linkImage: ExtracurricularInfrastructure10,
                heading: 'КОНФЕРЕНЦ-ЗАЛЫ ДЛЯ МЕРОПРИЯТИЙ',
                position: false,
                text: null,
              },
              {
                linkImage: ExtracurricularInfrastructure9,
                heading: 'КИБЕРСПОРТИВНЫЙ, ИГРОВОЙ И VR ЦЕНТР «КИБЕРЗОНА»',
                position: false,
                text: null,
              },
            ],
            styleTableImages: 'sixTable',
          },
        ],
      },
    ],
  };

  return NextResponse.json(data, { status: 200 });
}

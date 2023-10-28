import DirectionsImage from "@/public/image/Направления.webp";
import Screensaver from "@/components/screensaver";
import TitleText from "@/components/titleText";
import Style from "./direction.module.scss";
import {Table, TableInformation, TableStroke} from "@/components/tables/table";
import GeneralDisciplines from "@/public/svg/Выпускники_Вика.svg";
import ProfileDisciplines from "@/public/svg/Профильные_дисциплины_Вика.svg";
import DisciplinesToChoose from "@/public/svg/Дисциплины_на_выбор_Вика.svg";
import {StaticImageData} from "next/image";
import Image010304 from "@/public/image/01.03.04.webp";
import Image090301 from "@/public/image/09.03.01.webp";
import Image090303 from "@/public/image/09.03.03.webp";
import Image090304 from "@/public/image/09.03.04.webp";
import Image010404 from "@/public/image/01.04.04.webp";
import Image090401 from "@/public/image/09.04.01.webp";
import Image090403 from "@/public/image/09.04.03.webp";
import Image090404 from "@/public/image/09.04.04.webp";
import SvgAnalytics from "@/public/svg/analytics.svg";
import SvgApp from "@/public/svg/app.svg";
import SvgBasicIT from "@/public/svg/basic_it.svg";
import SvgBinary from "@/public/svg/binary.svg";
import SvgDataAnalytics from "@/public/svg/dataanalytics.svg";
import SvgDesigning from "@/public/svg/designing.svg";
import SvgMathematics from "@/public/svg/mathematics.svg";
import SvgMicro from "@/public/svg/micro.svg";
import SvgProIT from "@/public/svg/pro_it.svg";
import SvgSystem from "@/public/svg/system.svg";
import SvgQualification from "@/public/svg/Qualification.svg";
import SvgFormTraining from "@/public/svg/FormTraining.svg";
import SvgDurationTraining from "@/public/svg/DurationTraining.svg";
import SvgEntranceTests from "@/public/svg/EntranceTests.svg";
import SvgBudgetPlaces from "@/public/svg/BudgetPlaces.svg";
import SvgPassingScore from "@/public/svg/PassingScore.svg";
import SvgCost from "@/public/svg/Cost.svg";
import SvgOtherSources from "@/public/svg/OtherSources.svg";
import axios from "axios";

type typeStaticData = {
    linkImage: StaticImageData,
    title: string,
    heading: string,
    text: string,
    specializationText: string,
    video: null | {
        text: string,
        videoURL: string
    },
    specializationFact: {
        partners: null | {number: number, text: string},
        quantity: {number: number, text: string},
        graduates: number
    },
    sphereDirection: {
        linkImage: StaticImageData,
        heading: string,
        text: string
    }[],
    dataAdmission: {
        Qualification: string,
        FormTraining: string,
        DurationTraining: string[],
        EntranceTests: string[],
        OtherSources: {WebsiteMIREA: string, WebsiteAdmissionsCommittee: string, ChatVK: string | null, ChatTG: string | null},
        urlAPI: string | null
    }
}
function StaticData(direction: string)
{
    const data: {
        "01-03-04": typeStaticData,
        "09-03-01": typeStaticData,
        "09-03-03": typeStaticData,
        "09-03-04": typeStaticData,
        "01-04-04": typeStaticData,
        "09-04-01": typeStaticData,
        "09-04-03": typeStaticData,
        "09-04-04": typeStaticData
    } = {
        "01-03-04": {
            linkImage: Image010304,
            title: "01.03.04 | ПРИКЛАДНАЯ МАТЕМАТИКА",
            heading: "Цель программы — подготовка АНАЛИТИКОВ и data scientist’ов, владеющих современными методами машинного обучения",
            text: "Подготовка по направлению включает изучение современных концепций и методов анализа больших данных с целью выявления закономерностей и зависимостей, прогнозирования тенденций и значений параметров, составления аналитических обзоров и справок, подготовки управленческих решений и материалов бизнес-аналитики. Отдельное внимание уделяется программированию и освоению прикладного программного обеспечения для проведения расчётов и исследований – прогнозно- аналитических платформ отечественных и зарубежных разработчиков, а также изучению архитектуры и принципов построения и эксплуатации хранилищ данных.",
            specializationText: "В рамках данного направления доступен всего 1 профиль. Однако в рамках этого профиля вы сможете выбрать обучение на институтской или базовой кафедре, выбор которой для вас станет доступен после завершения первого курса обучения, на основе результатов вашей успеваемости, достижений и личного выбора. Обучение на базовой кафедре позволит вам применять полученные знания в области метеорологии и реальный практический опыт разработки в организации. Также, независимо от кафедры, вы получите знания по углублённой высшей математике, анализу данных, искусственному интеллекту и большим данным (Big Data). Базовая кафедра реализуется при поддержке госкорпорации \"ГИДРОМЕТЦЕНТР РОССИИ\".",
            video: {
                text: "Видеоролик рассказывает о направлении «прикладная математика» и её профиле. Видеоролик был записан ответственным по работе со студентами - Ярославом Алексеевичем Акатьевым. Видео актуально на момент приёмной кампании 2022 года. ",
                videoURL: "https://rutube.ru/play/embed/5694496609c2143008328d306259315f"
            },
            specializationFact: {
                partners: {number: 1, text: "Ключевой партнёр направления"},
                quantity: {number: 1, text: "Профиль/Специльность"},
                graduates: 79
            },
            sphereDirection: [
                {
                    linkImage: SvgBasicIT,
                    heading: "Базовые знания и умения для IT специалиста",
                    text: "Независимо от направления вы получите базовые знания программирования на разных языках программирования, умения анализировать и проектировать бизнес-процессы, базовые знания высшей математики и информатики."
                },
                {
                    linkImage: SvgMathematics,
                    heading: "Углублённая вычислительная математика ",
                    text: "На данном направление вы изучите методологии и стандарты проектирования программного обеспечения, инструменты и технологии для реализации прототипов, бизнес-внедрения и программной интеграции IT продуктов и решений."
                },
                {
                    linkImage: SvgDataAnalytics,
                    heading: "Анализ больших данных и машинные вычисления",
                    text: "Также вы научитесь анализировать бизнес процессы организаций и IT отрасль для эффетивного проектирования ПО и цифровой трансформации, научитесь контролировать процессы разработки и бизнес-процессы IT организаций."
                }],
            dataAdmission: {
                Qualification: "Бакалавр",
                FormTraining: "Очная (дневная)",
                DurationTraining: ["4 года"],
                EntranceTests: ["Информатика и ИКТ","Математика профильная","Русский язык"],
                OtherSources: {WebsiteMIREA: "https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/bakalavriat/01-03-04-applied-mathematics/", WebsiteAdmissionsCommittee: "https://priem.mirea.ru/guide-direction?direction_id=53", ChatTG: null, ChatVK: null},
                urlAPI: "https://priem.mirea.ru/lk/api/directions/get/53"
            }
        },
        "09-03-01": {
            linkImage: Image090301,
            title: "09.03.01 | ИНФОРМАТИКА И ВЫЧИСЛИТЕЛЬНАЯ ТЕХНИКА",
            heading: "Цель программы — подготовка инженерных кадров для информационного общества",
            text: "Направление ориентировано на подготовку профессионалов в широком спектре технологий, связанных с компьютерной и вычислительной техникой, среди которых аппаратная платформа компьютеров, серверов, вычислительных машин, комплексов, систем и сетей; операционные системы и системное программное обеспечение; автоматизированные информационно-аналитические и управляющие системы, все виды обеспечивающих подсистем.",
            specializationText: "В рамках данного направления предлагаются 2 профиля, которые станут доступными для вас после завершения первого курса обучения, на основе результатов вашей успеваемости, достижений и личного выбора. Выбранные профили позволят студентам овладеть определёнными дисциплинами, связанными с низкоуровневой разработкой ПО, проектированием сетей и работой с электронными вычислительными системами. Профиль “Цифровые комплексы, системы и сети” реализован при поддержке стороннего партнера, компании Samsung.",
            video: {
                text: "Видеоролик рассказывает о направлении «информатика и вычислительная техника» и её профилях. Видеоролик был записан ответственным по работе со студентами - Ярославом Алексеевичем Акатьевым. Видео актуально на момент приёмной кампании 2022 года. ",
                videoURL: "https://rutube.ru/play/embed/0a755dc0a2c0203d38d68b06020c8286"
            },
            specializationFact: {
                partners: {number: 1, text: "Ключевой партнёр направления"},
                quantity: {number: 2, text: "Профиля/Специльности"},
                graduates: 68
            },
            sphereDirection: [
                {
                    linkImage: SvgBasicIT,
                    heading: "Базовые знания и умения для IT специалиста",
                    text: "Независимо от направления вы получите базовые знания программирования на разных языках программирования, умения анализировать и проектировать бизнес-процессы, базовые знания высшей математики и информатики."
                },
                {
                    linkImage: SvgBinary,
                    heading: "Низкоуровневое программирование",
                    text: "На данном направление вы научитесь разрабатывать низкоуровневой код и программное обеспечение под для информационно-вычислительных систем и машины различного назначения."
                },
                {
                    linkImage: SvgMicro,
                    heading: "Программирование вычислительных систем",
                    text: "Также вы научитесь разрабатывать полноценные драйвера для операционных систем,  строить сети, программировать микропроцессоры и разрабатывать вычислительные комплексы."
                }],
            dataAdmission: {
                Qualification: "Бакалавр",
                FormTraining: "Очная (дневная)",
                DurationTraining: ["4 года"],
                EntranceTests: ["Информатика и ИКТ ИЛИ Физика","Математика профильная","Русский язык"],
                OtherSources: {WebsiteMIREA: "https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/bakalavriat/09-03-01-informatics-and-computer-engineering/", WebsiteAdmissionsCommittee: "https://priem.mirea.ru/guide-direction?direction_id=1", ChatTG: null, ChatVK: null},
                urlAPI: "https://priem.mirea.ru/lk/api/directions/get/1"
            }
        },
        "09-03-03": {
            linkImage: Image090303,
            title: "09.03.03 | ПРИКЛАДНАЯ ИНФОРМАТИКА",
            heading: "Цель программы — подготовка IT АНАЛИТИКОВ, АРХИТЕКТОРОВ ПО И ТЕХНИЧЕСКИХ СПЕЦИАЛИСТОВ",
            text: "В рамках направления ведётся подготовка квалифицированных профессионалов в сферах системного анализа прикладной области информатизации и цифровизации; формализации решения прикладных задач и процессов информационных систем; разработки проектов автоматизации и информатизации прикладных процессов и создания информационных систем в прикладных областях; разработки проектов цифровизации; выполнения работ по созданию, модификации, внедрению и сопровождению информационных систем и управления этими работами. Студенты изучают прикладные и информационные процессы, информационные системы и технологии, требующие применения практических навыков анализа, моделирования, реинжиниринга, проектирования, разработки и сопровождения. Особое внимание уделяется вопросам моделирования и проектирования бизнес-процессов и хранилищ данных, вопросам внедрения цифровых технологий в различные направления и виды деятельности государственных и коммерческих организаций, корпоративных и государственных структур.",
            specializationText: "В рамках данного направления предлагаются 3 профиля, которые станут доступными для вас после завершения первого курса обучения, на основе результатов вашей успеваемости, достижений и личного выбора. Выбранные профили позволят студентам овладеть определёнными дисциплинами, связанными с цифровизацией организаций и различных процессов, аналитикой данных и анализом предметной области, бизнес-процессами, менеджментом и внедрением ПО. Некоторые профили реализованы при поддержке сторонних партнеров, таких как \"Яндекс\", “Робин” и \"Директум\".",
            video: {
                text: "Видеоролик рассказывает о направлении «прикладная информатика» и её профилях. Видеоролик был записан ответственным по работе со студентами - Ярославом Алексеевичем Акатьевым. Видео актуально на момент приёмной кампании 2022 года. ",
                videoURL: "https://rutube.ru/play/embed/b7ccc4797d42d196b9fd152a35d69b60"
            },
            specializationFact: {
                partners: {number: 3, text: "Ключевых партнёра направления"},
                quantity: {number: 3, text: "Профиля/Специльности"},
                graduates: 73
            },
            sphereDirection: [
                {
                    linkImage: SvgBasicIT,
                    heading: "Базовые знания и умения для IT специалиста",
                    text: "Независимо от направления вы получите базовые знания программирования на разных языках программирования, умения анализировать и проектировать бизнес-процессы, базовые знания высшей математики и информатики."
                },
                {
                    linkImage: SvgDesigning,
                    heading: "Проектирование и внедрение программного обеспечения",
                    text: "На данном направление вы изучите методологии и стандарты проектирования программного обеспечения, инструменты и технологии для реализации прототипов, бизнес-внедрения и программной интеграции IT продуктов и решений."
                },
                {
                    linkImage: SvgAnalytics,
                    heading: "Анализ бизнес процессов, менеджмент и IT аналитика",
                    text: "Также вы научитесь анализировать бизнес процессы организаций и IT отрасль для эффетивного проектирования ПО и цифровой трансформации, научитесь контролировать процессы разработки и бизнес-процессы IT организаций."
                }],
            dataAdmission: {
                Qualification: "Бакалавр",
                FormTraining: "Очная (дневная)",
                DurationTraining: ["4 года"],
                EntranceTests: ["Информатика и ИКТ","Математика профильная","Русский язык"],
                OtherSources: {WebsiteMIREA: "https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/bakalavriat/09-03-03-applied-computer-science/", WebsiteAdmissionsCommittee: "https://priem.mirea.ru/guide-direction?direction_id=2", ChatTG: null, ChatVK: null},
                urlAPI: "https://priem.mirea.ru/lk/api/directions/get/2"
            }
        },
        "09-03-04": {
            linkImage: Image090304,
            title: "09.03.04 | ПРОГРАММНАЯ ИНЖЕНЕРИЯ",
            heading: "Цель программы — подготовка ведущих технических специалистов И разработчиков",
            text: "В рамках направления ведётся подготовка профессионалов в широком спектре технологий индустриального производства программного обеспечения для информационно-вычислительных систем различного назначения, в том числе в сферах применения современных методов и технологий проектирования, а также стандартов, регламентирующих жизненный цикл ПО. Обучение включает овладение навыками программирования на различных инструментальных платформах, а также изучение подходов к использованию готовых программных компонентов и методов их интеграции. Студенты изучают методы и инструменты разработки программного продукта, а также концепцию его жизненного цикла, установленную российскими и международными стандартами ГОСТ 34.601-90, ISO/IEC/IEEE 12207:2017 и ГОСТ Р ИСО/МЭК 12207-2010.",
            specializationText: "В рамках данного направления доступно 7 профилей, которые станут доступными для вас после завершения первого курса обучения, на основе результатов вашей успеваемости, достижений и личного выбора. Выбранные профили позволят студентам овладеть определёнными дисциплинами IT сферы: Web-разработка, мобильная разработка, разработка ERP-систем, искусственный интеллект, разработка и дизайн компьютерных игр, разработка приложений виртуальной и дополненной реальности, а также разработка ПО в атомной отрасли. Некоторые профили реализованы при поддержке сторонних партнеров, таких как \"Росатом\" и \"ВК\".",
            video: {
                text: "Видеоролик рассказывает о направлении «программная инженерия» и её профилях. Видеоролик был записан ответственным по работе со студентами - Ярославом Алексеевичем Акатьевым. Видео актуально на момент приёмной кампании 2022 года. ",
                videoURL: "https://rutube.ru/play/embed/c395636255629def72f50e4619cba1c5"
            },
            specializationFact: {
                partners: {number: 2, text: "Ключевых партнёра направления"},
                quantity: {number: 7, text: "Профилей/Специальностей"},
                graduates: 74
            },
            sphereDirection: [
                {
                    linkImage: SvgBasicIT,
                    heading: "Базовые знания и умения для IT специалиста",
                    text: "Независимо от направления вы получите базовые знания программирования на разных языках программирования, умения анализировать и проектировать бизнес-процессы, базовые знания высшей математики и информатики."
                },
                {
                    linkImage: SvgApp,
                    heading: "Разработка высокоуровневых приложений ",
                    text: "На данном направление вы научитесь разрабатывать полноценные высокоуровневые приложения с использованием различных методов и инструментов разработки программного продукта."
                },
                {
                    linkImage: SvgSystem,
                    heading: "Создание и проектирование информационных систем",
                    text: "Также вы научитесь проектировать и создавать предметно-ориентированные информационные системы в широком спектре IT отрасли для различных информационно-вычислительных систем и организаций разного вида деятельности."
                }],
            dataAdmission: {
                Qualification: "Бакалавр",
                FormTraining: "Очная (дневная)",
                DurationTraining: ["4 года"],
                EntranceTests: ["Информатика и ИКТ","Математика профильная","Русский язык"],
                OtherSources: {WebsiteMIREA: "https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/bakalavriat/09-03-04-software-engineering/", WebsiteAdmissionsCommittee: "https://priem.mirea.ru/guide-direction?direction_id=3", ChatTG: null, ChatVK: null},
                urlAPI: "https://priem.mirea.ru/lk/api/directions/get/3"
            }
        },
        "01-04-04": {
            linkImage: Image010404,
            title: "01.04.04 | ПРИКЛАДНАЯ МАТЕМАТИКА",
            heading: "Цель программы — подготовка АНАЛИТИКОВ и data scientist’ов, владеющих современными методами машинного обучения",
            text: "В рамках программы реализуется углублённая подготовка профессионалов в сфере информационных технологий и математических методов анализа данных. Сделан акцент на технологиях реализации компьютерных моделей, применении специализированных программных средств и методов извлечения знаний из экспериментальных данных.",
            specializationText: "В рамках данного направления доступен всего 1 профиль. Однако в рамках этого профиля вы сможете выбрать обучение на институтской или базовой кафедре, перед началом обучения. Выбор кафедры производится на основе результатов вступительных испытаний, дополнительных достижений и личного желания. Обучение на базовой кафедре позволит получить дополнительный набор теоретических знаний и набор практического опыта.",
            video: null,
            specializationFact: {
                partners: null,
                quantity: {number: 1, text: "Профиль/Специальность"},
                graduates: 95
            },
            sphereDirection: [
                {
                    linkImage: SvgProIT,
                    heading: "Высококвалифицированные знания и умения для IT специалиста",
                    text: "Независимо от направления вы получите базовые знания профессиональной разработки и проектирования IT продуктов, изучите множество методологий, получите навыки по управлению и профессиональному ориентированию."
                },
                {
                    linkImage: SvgMathematics,
                    heading: "Углублённая вычислительная математика ",
                    text: "На данном направление вы изучите методологии и стандарты проектирования программного обеспечения, инструменты и технологии для реализации прототипов, бизнес-внедрения и программной интеграции IT продуктов и решений."
                },
                {
                    linkImage: SvgDataAnalytics,
                    heading: "Анализ больших данных и машинные вычисления",
                    text: "Также вы научитесь анализировать бизнес процессы организаций и IT отрасль для эффетивного проектирования ПО и цифровой трансформации, научитесь контролировать процессы разработки и бизнес-процессы IT организаций."
                }],
            dataAdmission: {
                Qualification: "Магистратура",
                FormTraining: "Очная (дневная)",
                DurationTraining: ["2 года"],
                EntranceTests: ["Высшая математика"],
                OtherSources: {WebsiteMIREA: "https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/magistratura/applied-mathematics-01-04-04/", WebsiteAdmissionsCommittee: "https://priem.mirea.ru/guide-direction?direction_id=213", ChatTG: null, ChatVK: null},
                urlAPI: "https://priem.mirea.ru/lk/api/directions/get/213"
            }
        },
        "09-04-01": {
            linkImage: Image090401,
            title: "09.04.01 | ИНФОРМАТИКА И ВЫЧИСЛИТЕЛЬНАЯ ТЕХНИКА",
            heading: "Цель программы — подготовка инженерных кадров для информационного общества",
            text: "В рамках направления осуществляется углублённая подготовка профессионалов в области разработки технических средств (машин, комплексов, систем) и программного обеспечения (комплексов и систем) вычислительной техники и компьютерных сетей. Изучаются автоматизированные и распределённые системы обработки информации и управления, а также системы автоматизированного проектирования (САПР) и информационной поддержки жизненного цикла промышленных изделий, их математическое, информационное, техническое, лингвистическое, программное, эргономическое и организационное обеспечение. В процессе обучения магистранты осваивают инструментальные средства САПР, обеспечивающие проектирование современной компьютерной аппаратуры, а также создание диагностических средств и тестов для её контроля.",
            specializationText: "В рамках данного направления доступен всего 1 профиль. Однако в рамках этого профиля вы сможете выбрать обучение на институтской или базовой кафедре, перед началом обучения. Выбор кафедры производится на основе результатов вступительных испытаний, дополнительных достижений и личного желания. Обучение на базовой кафедре позволит получить дополнительный набор теоретических знаний и набор практического опыта.",
            video: null,
            specializationFact: {
                partners: null,
                quantity: {number: 1, text: "Профиль/Специальность"},
                graduates: 92
            },
            sphereDirection: [
                {
                    linkImage: SvgProIT,
                    heading: "Высококвалифицированные знания и умения для IT специалиста",
                    text: "Независимо от направления вы получите базовые знания профессиональной разработки и проектирования IT продуктов, изучите множество методологий, получите навыки по управлению и профессиональному ориентированию."
                },
                {
                    linkImage: SvgBinary,
                    heading: "Низкоуровневое программирование",
                    text: "На данном направление вы научитесь разрабатывать низкоуровневой код и программное обеспечение под для информационно-вычислительных систем и машины различного назначения."
                },
                {
                    linkImage: SvgMicro,
                    heading: "Программирование вычислительных систем",
                    text: "Также вы научитесь разрабатывать полноценные драйвера для операционных систем,  строить сети, программировать микропроцессоры и разрабатывать вычислительные комплексы."
                }],
            dataAdmission: {
                Qualification: "Магистратура",
                FormTraining: "Очная (дневная)",
                DurationTraining: ["2 года"],
                EntranceTests: ["Высшая математика"],
                OtherSources: {WebsiteMIREA: "https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/magistratura/09-04-01-informatics-and-computer-engineering/", WebsiteAdmissionsCommittee: "https://priem.mirea.ru/guide-direction?direction_id=5", ChatTG: null, ChatVK: null},
                urlAPI: "https://priem.mirea.ru/lk/api/directions/get/5"
            }
        },
        "09-04-03": {
            linkImage: Image090403,
            title: "09.04.03 | ПРИКЛАДНАЯ ИНФОРМАТИКА",
            heading: "Цель программы — подготовка IT АНАЛИТИКОВ, АРХИТЕКТОРОВ ПО И ТЕХНИЧЕСКИХ СПЕЦИАЛИСТОВ",
            text: "В рамках данного направления ведётся углублённая подготовка профессионалов в области реализации информационных процессов и построения информационных систем в прикладных областях на основе использования современных информационно-коммуникационных технологий и стандартов. В том числе оно включает системный анализ, моделирование и реинжиниринг прикладных и информационных процессов; разработку требований к созданию и развитию информационных систем; разработку и управление проектами автоматизации и информатизации прикладных процессов, предприятий и организаций; проектирование и организацию эксплуатации информационных систем в прикладных областях; технико-экономическое обоснование проектных решений для информационных систем, прикладных и информационных процессов.",
            specializationText: "В рамках данного направления доступен всего 1 профиль. Однако в рамках этого профиля вы сможете выбрать обучение на институтской или базовой кафедре, перед началом обучения. Выбор кафедры производится на основе результатов вступительных испытаний, дополнительных достижений и личного желания. Обучение на базовой кафедре позволит получить дополнительный набор теоретических знаний и набор практического опыта.",
            video: null,
            specializationFact: {
                partners: null,
                quantity: {number: 1, text: "Профиль/Специальность"},
                graduates: 91
            },
            sphereDirection: [
                {
                    linkImage: SvgProIT,
                    heading: "Высококвалифицированные знания и умения для IT специалиста",
                    text: "Независимо от направления вы получите базовые знания профессиональной разработки и проектирования IT продуктов, изучите множество методологий, получите навыки по управлению и профессиональному ориентированию."
                },
                {
                    linkImage: SvgDesigning,
                    heading: "Проектирование и внедрение программного обеспечения",
                    text: "На данном направление вы изучите методологии и стандарты проектирования программного обеспечения, инструменты и технологии для реализации прототипов, бизнес-внедрения и программной интеграции IT продуктов и решений."
                },
                {
                    linkImage: SvgAnalytics,
                    heading: "Анализ бизнес процессов, менеджмент и IT аналитика",
                    text: "Также вы научитесь анализировать бизнес процессы организаций и IT отрасль для эффетивного проектирования ПО и цифровой трансформации, научитесь контролировать процессы разработки и бизнес-процессы IT организаций."
                }],
            dataAdmission: {
                Qualification: "Магистратура",
                FormTraining: "Очная (дневная)",
                DurationTraining: ["2 года"],
                EntranceTests: ["Высшая математика"],
                OtherSources: {WebsiteMIREA: "https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/magistratura/09-04-03-applied-informatics/", WebsiteAdmissionsCommittee: "https://priem.mirea.ru/guide-direction?direction_id=6", ChatTG: null, ChatVK: null},
                urlAPI: "https://priem.mirea.ru/lk/api/directions/get/6"
            }
        },
        "09-04-04": {
            linkImage: Image090404,
            title: "09.04.04 | ПРОГРАММНАЯ ИНЖЕНЕРИЯ",
            heading: "Цель программы — подготовка ведущих технических специалистов И разработчиков",
            text: "",
            specializationText: "В рамках данного направления доступно 3 профиля, один из которых вы сможете выбрать перед началом обучения. Выбор профиля производится на основе результатов вступительных испытаний, дополнительных достижений и личного желания. Выбранные профили позволят студентам овладеть определёнными дисциплинами IT сферы углублённо. В области направления программной инженерии это следующие профили: Web-разработка, мобильная разработка и разработка ERP-систем.",
            video: null,
            specializationFact: {
                partners: null,
                quantity: {number: 3, text: "Профиля/Специальности"},
                graduates: 89
            },
            sphereDirection: [
                {
                    linkImage: SvgProIT,
                    heading: "Высококвалифицированные знания и умения для IT специалиста",
                    text: "Независимо от направления вы получите базовые знания профессиональной разработки и проектирования IT продуктов, изучите множество методологий, получите навыки по управлению и профессиональному ориентированию."
                },
                {
                    linkImage: SvgApp,
                    heading: "Разработка высокоуровневых приложений ",
                    text: "На данном направление вы научитесь разрабатывать полноценные высокоуровневые приложения с использованием различных методов и инструментов разработки программного продукта."
                },
                {
                    linkImage: SvgSystem,
                    heading: "Создание и проектирование информационных систем",
                    text: "Также вы научитесь проектировать и создавать предметно-ориентированные информационные системы в широком спектре IT отрасли для различных информационно-вычислительных систем и организаций разного вида деятельности."
                }],
            dataAdmission: {
                Qualification: "Магистратура",
                FormTraining: "Очная (дневная)",
                DurationTraining: ["2 года"],
                EntranceTests: ["Высшая математика"],
                OtherSources: {WebsiteMIREA: "https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/training-programs/magistratura/09-04-04-software-engineering/", WebsiteAdmissionsCommittee: "https://priem.mirea.ru/guide-direction?direction_id=7", ChatTG: null, ChatVK: null},
                urlAPI: "https://priem.mirea.ru/lk/api/directions/get/7"
            }
        }
    }

    return data[direction as keyof typeof data];
}

const arrayCurriculum = [
    {
        ImageOrHeading: GeneralDisciplines,
        text: "Общие дисциплины направления",
        alt: "Общие дисциплины",
        h2: true
    },
    {
        ImageOrHeading: ProfileDisciplines,
        text: "Специализированные дисциплины профиля",
        alt: "Специализированные дисциплины",
        h2: true
    },
    {
        ImageOrHeading: DisciplinesToChoose,
        text: "Блоки дисциплин профиля на выбор",
        alt: "Дисциплины на выбор",
        h2: true
    }
];

async function getAPI(url: string)
{
    const data = await axios({
        method: 'get',
        url: url
    })
    return {
        last_year_threshold: await data.data.last_year_threshold,
        places_budget: await data.data.places_budget,
        places_quota: await data.data.places_quota,
        places_special_quota: await data.data.places_special_quota,
        places_target: await data.data.places_target,
        price: await data.data.price,
        price_discount_10: await data.data.price_discount_10,
        price_discount_20: await data.data.price_discount_20
    }
}


export default async function Direction({ params } : { params: { direction: string } })
{

    const textCurriculum: string = "Учебный план включает три типа дисциплин: общие, специализированные дисциплины профиля и блок дисциплин профиля на выбор. Общие дисциплины изучаются независимо от выбранного профиля, их прохождение обязательно для всех студентов направления.  Специализированные дисциплины профиля предназначены для студентов определенных профилей и изучаются только ими. Блоки дисциплин профиля на выбор, предоставляет студентам возможность выбрать дисциплины, и изучать только их. ";

    const arraySpecializationFact: {ImageOrHeading: StaticImageData | string, text: string, alt: string | null | undefined, h2: boolean}[] = [];

    if (StaticData(params.direction).specializationFact.partners !== null)
    {
        arraySpecializationFact.push({
            ImageOrHeading: String(StaticData(params.direction).specializationFact.partners!.number),
            text: StaticData(params.direction).specializationFact.partners!.text,
            alt: null,
            h2: true
        });
    }

    arraySpecializationFact.push({
        ImageOrHeading: String(StaticData(params.direction).specializationFact.quantity.number),
        text: StaticData(params.direction).specializationFact.quantity.text,
        alt: null,
        h2: true
    });

    arraySpecializationFact.push({
        ImageOrHeading: StaticData(params.direction).specializationFact.graduates+"%",
        text: "Выпускников работающих по специальности",
        alt: null,
        h2: true
    });

    const arrayTable: {linkImage: StaticImageData, heading: string, text: string, alt: string}[] = StaticData(params.direction).sphereDirection.map((elem) => {return {linkImage: elem.linkImage, heading: elem.heading, text: elem.text, alt: elem.heading}});

    const arrayInformation: {linkImage: StaticImageData, heading: string, text: {text: string, link: string | null}[], alt: string}[] = [
        {
            linkImage: SvgQualification,
            heading: "Квалификация",
            text: [{text: StaticData(params.direction).dataAdmission.Qualification, link: null}],
            alt: "Квалификация"
        },
        {
            linkImage: SvgFormTraining,
            heading: "Форма обучения",
            text: [{text: StaticData(params.direction).dataAdmission.FormTraining, link: null}],
            alt: "Форма обучения"
        },
        {
            linkImage: SvgDurationTraining,
            heading: "Срок обучения",
            text: StaticData(params.direction).dataAdmission.DurationTraining.map((elem, index) => {return {text: elem, link: null}}),
            alt: "Срок обучения"
        }
    ]

    if (StaticData(params.direction).dataAdmission.urlAPI !== null && StaticData(params.direction).dataAdmission.urlAPI !== undefined)
    {

        const getDataApi = await getAPI(StaticData(params.direction).dataAdmission.urlAPI!)

        if (getDataApi.places_budget !== null && getDataApi.places_budget !== undefined && getDataApi.last_year_threshold !== null && getDataApi.last_year_threshold !== undefined && getDataApi.price !== null && getDataApi.price !== undefined)
        {
            arrayInformation.push(
                {
                    linkImage: SvgPassingScore,
                    heading: "Проходной балл",
                    text: [
                        {
                            text: getDataApi.last_year_threshold+" в 2023 году",
                            link: null
                        }
                    ],
                    alt: "Проходной балл"
                },
                {
                    linkImage: SvgEntranceTests,
                    heading: "Вступительные испытания",
                    text: StaticData(params.direction).dataAdmission.EntranceTests.map((elem, index) => {return {text: elem, link: null}}),
                    alt: "Вступительные испытания"
                },
                {
                    linkImage: SvgBudgetPlaces,
                    heading: "Количество бюджетных мест",
                    text: [
                        {
                            text: "Всего в 2023 году: "+getDataApi.places_budget,
                            link: null
                        }, (getDataApi.places_quota !== null && getDataApi.places_quota) ?
                        {
                            text: "Особая квота: "+getDataApi.places_quota,
                            link: null
                        } : {} as { text: string, link: string | null }, (getDataApi.places_special_quota !== null && getDataApi.places_special_quota) ?
                        {
                            text: "Отдельная квота: "+getDataApi.places_special_quota,
                            link: null
                        } : {} as { text: string, link: string | null }, (getDataApi.places_target !== null && getDataApi.places_target) ?
                        {
                            text: "Целевая квота: "+getDataApi.places_target,
                            link: null
                        } : {} as { text: string, link: string | null }
                    ],
                    alt: "Количество бюджетных мест"
                },
                {
                    linkImage: SvgCost,
                    heading: "Стоимость обучения в год",
                    text: [
                        {
                            text: "Полная стоимость: "+getDataApi.price,
                            link: null
                        }, (getDataApi.price_discount_10 !== null && getDataApi.price_discount_10) ?
                        {
                            text: "С учётом базовой скидки: "+getDataApi.price_discount_10,
                            link: null
                        } : {} as { text: string, link: string | null }, (getDataApi.price_discount_20 !== null && getDataApi.price_discount_20) ?
                        {
                            text: "С учётом специальной скидки: "+getDataApi.price_discount_20,
                            link: null
                        } : {} as { text: string, link: string | null }
                    ],
                    alt: "Стоимость обучения в год"
                },
                {
                    linkImage: SvgOtherSources,
                    heading: (typeof(StaticData(params.direction).dataAdmission.OtherSources.ChatVK) === 'string' || typeof(StaticData(params.direction).dataAdmission.OtherSources.ChatTG) === 'string') ? "Другие источники информации и чаты" : "Другие источники информации",
                    text: [
                        {
                            text: "Сайт РТУ МИРЭА",
                            link: StaticData(params.direction).dataAdmission.OtherSources.WebsiteMIREA
                        },
                        {
                            text: "Сайт приёмной комиссии РТУ МИРЭА",
                            link: StaticData(params.direction).dataAdmission.OtherSources.WebsiteAdmissionsCommittee
                        }, (StaticData(params.direction).dataAdmission.OtherSources.ChatVK !== null && StaticData(params.direction).dataAdmission.OtherSources.ChatVK !== undefined) ?
                        {
                            text: "Чат для абитуриентов в VK",
                            link: StaticData(params.direction).dataAdmission.OtherSources.ChatVK
                        } : {} as { text: string, link: string | null },
                        (StaticData(params.direction).dataAdmission.OtherSources.ChatTG !== null && StaticData(params.direction).dataAdmission.OtherSources.ChatTG !== undefined) ?
                            {
                                text: "Чат для абитуриентов в TG",
                                link: StaticData(params.direction).dataAdmission.OtherSources.ChatTG
                            } : {} as { text: string, link: string | null }
                    ],
                    alt: "Источники информации"
                })
        }
        else
        {
            arrayInformation.push({
                linkImage: SvgEntranceTests,
                heading: "Вступительные испытания",
                text: StaticData(params.direction).dataAdmission.EntranceTests.map((elem, index) => {return {text: elem, link: null}}),
                alt: "Вступительные испытания"
            })
        }
    }
    else
    {
        arrayInformation.push({
            linkImage: SvgEntranceTests,
            heading: "Вступительные испытания",
            text: StaticData(params.direction).dataAdmission.EntranceTests.map((elem, index) => {return {text: elem, link: null}}),
            alt: "Вступительные испытания"
        })
    }

    return (
        <>
            <Screensaver linkImage={StaticData(params.direction).linkImage} text={StaticData(params.direction).title} alt={"Заставка - инфраструктура"} backgroundBlack={true} />
            <main>
                <section>
                    <div>
                        <TitleText heading={StaticData(params.direction).heading} text={[StaticData(params.direction).text]} />
                        <Table array={arrayTable} />
                    </div>
                </section>
                <section>
                    <div>
                        <TitleText heading={"ИНФОРМАЦИЯ ПО ПОСТУПЛЕНИЮ"} text={null} />
                        <TableInformation array={arrayInformation} />
                    </div>
                </section>
                <section>
                    <div>
                        <TitleText heading={"СПЕЦИАЛЬНОСТИ / ПРОФИЛИ"} text={[StaticData(params.direction).specializationText]} />
                        <TableStroke array={arraySpecializationFact} />
                    </div>
                </section>
                <section>
                    <div>
                        <TitleText heading={"УЧЕБНЫЙ ПЛАН"} text={[textCurriculum]} />
                        <TableStroke array={arrayCurriculum} />
                    </div>
                </section>
                {StaticData(params.direction).video === null ? <></> :
                    <section>
                        <div>
                            <TitleText heading={"ВИДЕО"} text={[StaticData(params.direction).video!.text]} />
                            <iframe className={Style.Video} src={StaticData(params.direction).video!.videoURL} frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen />
                        </div>
                    </section>
                }
            </main>
        </>
    )
}

/* <TableStroke array={array} /> */
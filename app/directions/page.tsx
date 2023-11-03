import NoImage from "@/public/image/NoImage.webp";
import Screensaver from "@/components/screensaver";
import DirectionsImage from "@/public/image/Направления.webp";
import {IconInformationCircle} from "@/components/iconInformation";
import Analytics from "@/public/svg/АналитикаВика.svg";
import Engineer from "@/public/svg/ИвтВика.svg";
import Architect from "@/public/svg/ПрикИнфВика.svg";
import SoftwareEngineer from "@/public/svg/ПрогИнжВика.svg";
import Style from "./directions.module.scss";
import TitleText from "../../components/titleText";
import axios from "axios";
import Transition from "@/components/tables/transition";
import Direction010304 from "@/public/image/01.03.04_Переход.webp";
import Direction090301 from "@/public/image/09.03.01_Переход.webp";
import Direction090303 from "@/public/image/09.03.03_Переход.webp";
import Direction090304 from "@/public/image/09.03.04_Переход.webp";
import Direction010404 from "@/public/image/01.04.04_Переход.webp";
import Direction090401 from "@/public/image/09.04.01_Переход.webp";
import Direction090403 from "@/public/image/09.04.03_Переход.webp";
import Direction090404 from "@/public/image/09.04.04_Переход.webp";
import Direction122 from "@/public/image/1.2.2_Переход.webp";
import Direction232 from "@/public/image/2.3.2_Переход.webp";
import Direction234 from "@/public/image/2.3.4_Переход.webp";
import Direction235 from "@/public/image/2.3.5_Переход.webp";
import Direction238 from "@/public/image/2.3.8_Переход.webp";
import FactGraduates from "@/public/svg/Выпускники_Вика.svg";
import FactPay from "@/public/svg/Платка_Вика.svg";
import FactMilitary from "@/public/svg/Военная_кафедра_Вика.svg";
import FactProfiles from "@/public/svg/Профили_Вика.svg";
import {TableStroke} from "@/components/tables/table";
import Section from "@/components/sections";

export default async function Directions()
{
    const directionsBachelor = [{urlAdmission: "https://priem.mirea.ru/lk/api/directions/get/53", scores: null},{urlAdmission: "https://priem.mirea.ru/lk/api/directions/get/1", scores: null},{urlAdmission: "https://priem.mirea.ru/lk/api/directions/get/2", scores: null},{urlAdmission: "https://priem.mirea.ru/lk/api/directions/get/3", scores: null}];
    for (let i = 0; i < directionsBachelor.length; ++i)
    {
        const data = await axios({
            method: 'get',
            url: directionsBachelor[i].urlAdmission
        })
        directionsBachelor[i].scores = await data.data.last_year_threshold;
    }

    const dataBachelor = [
        {
        linkImage: Direction010304,
        text: "01.03.04 | Прикладная математика",
        linkPage: "/directions/01-03-04",
        alt: "Прик мат",
        additionalText: "Проходной балл в 2023 году: " + directionsBachelor[0].scores
    },{
        linkImage: Direction090301,
        text: "09.03.01 | Информатика и вычислительная техника",
        linkPage: "/directions/09-03-01",
        alt: "ИВТ",
        additionalText: "Проходной балл в 2023 году: " + directionsBachelor[1].scores
    },{
        linkImage: Direction090303,
        text: "09.03.03 | Прикладная информатика",
        linkPage: "/directions/09-03-03",
        alt: "Прик инф",
        additionalText: "Проходной балл в 2023 году: " + directionsBachelor[2].scores
    },{
        linkImage: Direction090304,
        text: "09.03.04 | Программная инженерия",
        linkPage: "/directions/09-03-04",
        alt: "Приг инж",
        additionalText: "Проходной балл в 2023 году: " + directionsBachelor[3].scores
    }]

    const directionsMagistracy = [{urlAdmission: "https://priem.mirea.ru/lk/api/directions/get/213", scores: null},{urlAdmission: "https://priem.mirea.ru/lk/api/directions/get/5", scores: null},{urlAdmission: "https://priem.mirea.ru/lk/api/directions/get/6", scores: null},{urlAdmission: "https://priem.mirea.ru/lk/api/directions/get/7", scores: null}];
    for (let i = 0; i < directionsMagistracy.length; ++i)
    {
        const data = await axios({
            method: 'get',
            url: directionsMagistracy[i].urlAdmission
        })
        directionsMagistracy[i].scores = await data.data.last_year_threshold;
    }

    const dataMagistracy = [
        {
        linkImage: Direction010404,
        text: "01.04.04 | Прикладная математика",
        linkPage: "/directions/01-04-04",
        alt: "Прик мат",
        additionalText: "Проходной балл в 2022 году: " + directionsMagistracy[0].scores
    },{
        linkImage: Direction090401,
        text: "09.04.01 | Информатика и вычислительная техника",
        linkPage: "/directions/09-04-01",
        alt: "ИВТ",
        additionalText: "Проходной балл в 2022 году: " + directionsMagistracy[1].scores
    },{
        linkImage: Direction090403,
        text: "09.04.03 | Прикладная информатика",
        linkPage: "/directions/09-04-03",
        alt: "Прик инф",
        additionalText: "Проходной балл в 2022 году: " + directionsMagistracy[2].scores
    },{
        linkImage: Direction090404,
        text: "09.04.04 | Программная инженерия",
        linkPage: "/directions/09-04-04",
        alt: "Приг инж",
        additionalText: "Проходной балл в 2022 году: " + directionsMagistracy[3].scores
    }]

    const dataPostgraduate = [
        {
        linkImage: Direction122,
        text: "1.2.2 | Математическое моделирование, численные методы и комплексы программ",
        linkPage: "https://priem.mirea.ru/guide-direction?direction_id=582",
        alt: "Мат моделирование",
        additionalText: null
    }, {
        linkImage: Direction232,
        text: "2.3.2 | Вычислительные системы и их элементы",
        linkPage: "https://priem.mirea.ru/guide-direction?direction_id=609",
        alt: "Вычислительные системы",
        additionalText: null
    },{
        linkImage: Direction234,
        text: "2.3.4 | Управление в организационных системах",
        linkPage: "https://priem.mirea.ru/guide-direction?direction_id=611",
        alt: "Управление",
        additionalText: null
    },{
        linkImage: Direction235,
        text: "2.3.5 | Математическое и программное обеспечение вычислительных систем, комплексов и компьютерных сетей",
        linkPage: "https://priem.mirea.ru/guide-direction?direction_id=612",
        alt: "Мат и ПО систем",
        additionalText: null
    },{
        linkImage: Direction238,
        text: "2.3.8 | Информатика и информационные процессы",
        linkPage: "https://priem.mirea.ru/guide-direction?direction_id=613",
        alt: "Информатика и процессы",
        additionalText: null
    }]

    const array = [
        {
            ImageOrHeading: "4",
            text: "Направления бакалавриата",
            alt: null,
            h2: false
        },
        {
            ImageOrHeading: "4",
            text: "Направления магистратуры",
            alt: null,
            h2: false
        },
        {
            ImageOrHeading: "5",
            text: "Направлений аспирантуры",
            alt: null,
            h2: false
        },
        {
            ImageOrHeading: "8",
            text: "Профилей реализованы совместно с партнёрами",
            alt: null,
            h2: false
        },
        {
            ImageOrHeading: FactGraduates,
            text: "Выпускники - одни из самых востребованных среди работодателей в стране",
            alt: "Выпускники",
            h2: false
        },
        {
            ImageOrHeading: FactPay,
            text: "Неограниченное количество учебных мест на платную основу обучения",
            alt: "Платное обучение",
            h2: false
        },
        {
            ImageOrHeading: FactMilitary,
            text: "Военная кафедра на лейтенанта запаса (3 года) с отбором в конце 2 курса бакалавриата",
            alt: "Военная кафедра",
            h2: false
        },
        {
            ImageOrHeading: FactProfiles,
            text: "Студенты раньше и больше изучают профильные дисциплины, чем в других высших учебных заведениях ",
            alt: "Профили",
            h2: false
        }
    ]

    return(
        <>
            <Screensaver linkImage={DirectionsImage} text={"НАПРАВЛЕНИЯ И ПРОФИЛИ ОБУЧЕНИЯ"} alt={"Заставка - инфраструктура"} backgroundBlack={true} />
            <main>
                <Section>
                    <TitleText heading={"КОГО МЫ ОБУЧАЕМ?"} text={["Образовательные направления Института информационных технологий прежде всего направлены на подготовку специалистов для современной IT-индустрии, что выделяет нас среди других институтов РТУ МИРЭА. Наши программы предоставляют обширный спектр знаний с акцентом на программирование, разработку программного обеспечения, анализ предметных областей, проектирование цифровых продуктов и систем, математическое моделирование с использованием специализированного ПО, 3D-моделирование, искусственный интеллект и другие аспекты IT-индустрии."]} />
                    <div className={Style.DirectionsSVG}>
                        <div>
                            <IconInformationCircle icon={Analytics} alt={"Аналитика"} text={"Аналитиков больших данных, дата-инженеров и математиков"} />
                            <IconInformationCircle icon={Engineer} alt={"Информатика и вычислительная техника"} text={"Инженеров разработчиков низкоуровневого ПО и вычислительных систем"} />
                        </div>
                        <div>
                            <IconInformationCircle icon={Architect} alt={"Прикладная математика"} text={"Проектировщиков ПО, менеджеров, бизнес и IT аналитиков"} />
                            <IconInformationCircle icon={SoftwareEngineer} alt={"Программная инженерия"} text={"Программистов разработчиков высокоуровневого ПО и информационных систем"} />
                        </div>
                    </div>
                </Section>
                <Section>
                    <TitleText heading={"ЦИФРЫ И ФАКТЫ"} text={null} />
                    <TableStroke array={array} />
                </Section>
                <Section>
                    <TitleText heading={"БАКАЛАВРИАТ"} text={["В рамках данных направлений осуществляется комплексная подготовка будущих IT-специалистов с дипломом бакалавриата. Наша программа обучает студентов в широком спектре IT-сферы, включая разработку, проектирование, математику, информатику и анализ, а также позволяет им специализироваться в выбранной ими сфере IT. Учебный процесс начинается с основных дисциплин и постепенно переходит к более специализированным предметам. Каждый семестр студенты приобретают все больше знаний и навыков в выбранной ими области."]} />
                    <Transition array={dataBachelor} />
                </Section>
                <Section>
                    <TitleText heading={"МАГИСТРАТУРА"} text={["Магистерская программа в сфере информационных технологий образует высококвалифицированных профессионалов. Студенты обретают навыки, связанные с профессиональной ориентацией, различными методологиями, управлением, проектированием и разработкой. Перед началом обучения абитуриенты могут выбрать свои индивидуальные направления и специализации в определенных областях IT."]} />
                    <Transition array={dataMagistracy} />
                </Section>
                <Section>
                    <TitleText heading={"АСПИРАНТУРА"} text={["Наш институт также занимается подготовкой научных и научно-педагогических кадров, в рамках второй или третей ступени высшего образования под названием аспирантура. Поступление в аспирантуру на основании диплома специалиста или магистра возможно как на бюджетной, так и на договорной основе. По окончании обучения вы получаете заключение о соответствии диссертации критериям, установленным в соответствии с Федеральным законом и от 23 августа 1996 г. № 127-ФЗ «О науке и государственной научно-технической политике» и свидетельство об окончании аспирантуры."]} />
                    <Transition array={dataPostgraduate} />
                </Section>
            </main>
        </>
    )
}
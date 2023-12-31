import Style from './page.module.scss';
import AppImage from "@/public/image/new_app.webp";
import Screensaver from "@/components/screensaver";
import Transition from "@/components/tables/transition";
import NoImage from "@/public/image/NoImage.webp";
import Infrastructure from "@/public/image/Инфраструктура.webp";
import Directions from "@/public/image/Направления_Переход.webp";
import Directorate from "@/public/image/Руководство_Переход.webp";
import Events from "@/public/image/Мероприятия_Переход.webp";
import Equipment from "@/public/image/Оборудование_Переход.webp";
import Partners from "@/public/image/Партнёры_Переход.webp";
import Courses from "@/public/image/ДопКурсы_Переход.webp";
import RTUITLab from "@/public/image/Лаба_Переход.webp";
import Achievement from "@/public/image/Достижения_Переход.webp";
import Institute from "@/public/image/институт.webp";
import Section from "@/components/sections";
import TitleText from "@/components/titleText";
import {Table} from "@/components/tables/table";
import Info from "@/public/svg/info.svg";
import News from "@/public/svg/news.svg";
import Vika from "@/public/svg/vika.svg";

export default function Home() {
    const data = [
        {
        linkImage: Infrastructure,
        text: "Инфраструктура",
        linkPage: "/infrastructure",
        alt: "Инфраструктура",
        additionalText: null
    },{
        linkImage: Directions,
        text: "НАПРАВЛЕНИЯ И ПРОФИЛИ ОБУЧЕНИЯ",
        linkPage: "/directions",
        alt: "Направления",
        additionalText: null
    },{
        linkImage: Directorate,
        text: "СТРУКТУРА И РУКОВОДСТВО",
        linkPage: "./",
        alt: "Руководство",
        additionalText: null
    },{
        linkImage: Events,
        text: "Мероприятия и ВНЕУЧЕБНАЯ ДЕЯТЕЛЬНОСТЬ",
        linkPage: "./",
        alt: "Мероприятия",
        additionalText: null
    },{
        linkImage: Equipment,
        text: "Уникальное оборудование",
        linkPage: "./",
        alt: "Оборудование",
        additionalText: null
    },{
        linkImage: Partners,
        text: "ПРЕДПРИЯТИЯ-Партнёры И ВАКАНСИИ ОТ ПАРТНЁРОВ",
        linkPage: "./",
        alt: "Партнёры",
        additionalText: null
    },{
        linkImage: Courses,
        text: "КУРСЫ ПЕРЕПОДГОТОВКИ И ДОПОЛНИТЕЛЬНОГО ОБУЧЕНИЯ",
        linkPage: "./",
        alt: "ДопКурсы",
        additionalText: null
    },{
        linkImage: RTUITLab,
        text: "IT лабораториЯ ИИТ",
        linkPage: "https://rtuitlab.dev",
        alt: "RTUITLab",
        additionalText: null
    },{
        linkImage: NoImage,
        text: "Про институт информационных технологий",
        linkPage: "./",
        alt: "Институт",
        additionalText: null
    },{
        linkImage: Achievement,
        text: "Достижения и награды",
        linkPage: "./",
        alt: "Достижения",
        additionalText: null
    },{
        linkImage: NoImage,
        text: "Новости",
        linkPage: "./",
        alt: "Новости",
        additionalText: null
    },{
        linkImage: NoImage,
        text: "Расписание",
        linkPage: "./",
        alt: "Расписание",
        additionalText: null
    }]

    const dataPreAlpha = [
        {
            linkImage: Institute,
            text: "ОБ ИНСТИТУТЕ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ",
            linkPage: "/institute",
            alt: "институт"
        },
        {
            linkImage: Directions,
            text: "НАПРАВЛЕНИЯ И ПРОФИЛИ ОБУЧЕНИЯ",
            linkPage: "/directions",
            alt: "Направления"
        },
        {
            linkImage: RTUITLab,
            text: "IT лабораториЯ ИИТ",
            linkPage: "https://rtuitlab.dev",
            alt: "RTUITLab",
        },
        {
            linkImage: Infrastructure,
            text: "КАМПУС, ИНФРАСТРУКТУРА И МЕГАЛАБОРАТОРИИ",
            linkPage: "/infrastructure",
            alt: "Инфраструктура",
        },
        {
            linkImage: Equipment,
            text: "Уникальное оборудование",
            linkPage: "/equipment",
            alt: "Оборудование",
        }
    ]

    const id = [{link: "pages_table", text: "СТРАНИЦЫ ПОРТАЛА"},{link: "info", text: "ПРО ИНФОРМАЦИОННЫЙ ПОРТАЛ"}];

    const arrayTable = [
        {
            numberOrImage: Info,
            heading: "Информационные секции для абитуриентов и студентов",
            text: ["Дата частичной реализации: 12.11.23"]
        },
        {
            numberOrImage: News,
            heading: "Новости и достижения института",
            text: ["Дата реализации: 14.02.24"]
        },
        {
            numberOrImage: Vika,
            heading: "Расписание и интеграция чат-ассистента “ВИКА”",
            text: ["Дата реализации: 14.02.24"]
        }
    ]

  return (
      <>
        <Screensaver id={id} linkImage={AppImage} text={"ИНФОРМАЦИОННЫЙ портал ИНСТИТУТА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ РТУ МИРЭА (PRE-ALPHA Версия)"} alt={"Заставка - главная страница"} />
        <main>
            <Section id={id[0].link}>
                <TitleText heading={"СТРАНИЦЫ ИНФОРМАЦИОННОГО ПОРТАЛА"} text={["На этом сайте собрана полезная и актуальная информация как для абитуриентов, так и для студентов института информационных технологий. Для вашего удобства, мы разделили информацию на несколько страниц и секций по определённым сферам."]}/>
                <Transition array={dataPreAlpha} reverse={true}/>
            </Section>
            <Section id={id[1].link}>
                <TitleText heading={"ПРО ИНФОРМАЦИОННЫЙ ПОРТАЛ"} text={["Информационный портал был задуман в августе 2023 года во время приемной компании, с целью предоставления понятной и привлекательной информации абитуриентам и студентам. Первая версия портала будет содержать данные о направлениях обучения, инфраструктуре, руководстве и структуре института. Также будет представлена информация об институте, его кафедрах, оборудовании, партнерах, внеучебных мероприятиях и дополнительных курсах. Неотъемлемой частью портала станет функционал, позволяющий получить информацию о расписании занятий, преподавателях, сессиях, новостях и достижениях. Кроме того, портал будет дополнен виртуальным информационно-коммуникационным ассистентом института IT, получившим название \"ВИКА\". Особенностью портала является использование фреймворка Next.js, который позволяет отрисовывать страницы на сервере, а не на устройстве пользователя, что значительно снижает нагрузку на устройство и время загрузки."]} />
                <Table array={arrayTable} side={"left"} background={"white"} gapInside={"36px"} gapOutside={"32px"} />
            </Section>
        </main>
      </>
  )
}

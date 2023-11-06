import Style from './page.module.scss';
import AppImage from "@/public/image/app.webp";
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
            text: "Инфраструктура",
            linkPage: "/infrastructure",
            alt: "Инфраструктура",
        },
        {
            linkImage: Equipment,
            text: "Уникальное оборудование",
            linkPage: "./",
            alt: "Оборудование",
        }
    ]

  return (
      <>
        <Screensaver linkImage={AppImage} text={"ИНФОРМАЦИОННЫЙ портал ИНСТИТУТА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ РТУ МИРЭА"} alt={"Заставка - главная страница"} backgroundBlack={false} />
        <main>
            <Section>
                <Transition array={dataPreAlpha} reverse={true}/>
            </Section>
        </main>
      </>
  )
}

import Style from './page.module.scss';
import AppImage from "@/public/app.webp";
import Screensaver from "@/components/screensaver";
import Transition from "@/components/table/transition";
import NoImage from "@/public/NoImage.webp";
import Infrastructure from "@/public/Инфраструктура_Переход.webp";
import Directions from "@/public/Направления_Переход.webp";
import Directorate from "@/public/Руководство_Переход.webp";
import Events from "@/public/Мероприятия_Переход.webp";
import Equipment from "@/public/Оборудование_Переход.webp";
import Partners from "@/public/Партнёры_Переход.webp";
import Courses from "@/public/ДопКурсы_Переход.webp";
import RTUITLab from "@/public/Лаба_Переход.webp";
import Achievement from "@/public/Достижения_Переход.webp";

export default function Home() {
    const data = [{
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

  return (
      <>
        <Screensaver linkImage={AppImage} text={"ИНФОРМАЦИОННЫЙ портал ИНСТИТУТА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ РТУ МИРЭА"} alt={"Заставка - главная страница"} backgroundBlack={false} />
        <main>
            <section>
                <div>
                    <Transition array={data}/>
                </div>
            </section>
        </main>
      </>
  )
}

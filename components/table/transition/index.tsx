import {CellTransition} from "@/components/table/cells";
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
import Style from "./transition.module.scss";

export default function Transition()
{
    return (
        <section>
            <div className={Style.Transition}>
                <CellTransition linkImage={Infrastructure} text={"Инфраструктура"} linkPage={"/infrastructure"} alt={"Инфраструктура"} gridAreaNumber={1}/>
                <CellTransition linkImage={Directions} text={"НАПРАВЛЕНИЯ И ПРОФИЛИ ОБУЧЕНИЯ"} linkPage={"/directions"} alt={"Направления"} gridAreaNumber={2}/>
                <CellTransition linkImage={Directorate} text={"СТРУКТУРА И РУКОВОДСТВО"} linkPage={"./"} alt={"Руководство"} gridAreaNumber={3}/>
                <CellTransition linkImage={Events} text={"Мероприятия и ВНЕУЧЕБНАЯ ДЕЯТЕЛЬНОСТЬ"} linkPage={"./"} alt={"Мероприятия"} gridAreaNumber={4}/>
                <CellTransition linkImage={Equipment} text={"Уникальное оборудование"} linkPage={"./"} alt={"Оборудование"} gridAreaNumber={5}/>
                <CellTransition linkImage={Partners} text={"ПРЕДПРИЯТИЯ-Партнёры И ВАКАНСИИ ОТ ПАРТНЁРОВ"} linkPage={"./"} alt={"Партнёры"} gridAreaNumber={6}/>
                <CellTransition linkImage={Courses} text={"КУРСЫ ПЕРЕПОДГОТОВКИ И ДОПОЛНИТЕЛЬНОГО ОБУЧЕНИЯ"} linkPage={"./"} alt={"ДопКурсы"} gridAreaNumber={7}/>
                <CellTransition linkImage={RTUITLab} text={"IT лабораториЯ ИИТ"} linkPage={"https://rtuitlab.dev"} alt={"Лаба"} gridAreaNumber={8}/>
                <CellTransition linkImage={NoImage} text={"Про институт информационных технологий"} linkPage={"./"} alt={"NoImage"} gridAreaNumber={9}/>
                <CellTransition linkImage={Achievement} text={"Достижения и награды"} linkPage={"./"} alt={"Достижения"} gridAreaNumber={10}/>
                <CellTransition linkImage={NoImage} text={"Новости"} linkPage={"./"} alt={"NoImage"} gridAreaNumber={11}/>
                <CellTransition linkImage={NoImage} text={"Расписание"} linkPage={"./"} alt={"NoImage"} gridAreaNumber={12}/>
            </div>
        </section>
    )
}
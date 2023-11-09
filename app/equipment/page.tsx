import Section from "@/components/sections";
import Screensaver from "@/components/screensaver";
import Equipment from "@/public/image/Оборудование_Переход.webp";
import DirectionsImage from "@/public/image/Направления.webp";
import RTUITLab from "@/public/image/Лаба_Переход.webp";
import DownTransition from "@/components/downTransition";
import Infrastructure from "@/public/image/Инфраструктура.webp";
import InstituteImage from "@/public/image/институт.webp";

export default function PageEquipment() {

    const id = [{link: "table_equipment", text: "ПОСМОТРЕТЬ ОБОРУДОВАНИЕ"}];

    const DownCell = {
        element1: {linkImage: Infrastructure,linkPage: "./infrastructure",text: "КАМПУС, ИНФРАСТРУКТУРА И МЕГАЛАБОРАТОРИИ"},
        element2: {linkImage: InstituteImage,linkPage: "./institute",text: "ОБ ИНСТИТУТЕ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ"},
        element3: {linkImage: DirectionsImage,linkPage: "./directions",text: "ПРОГРАММЫ ОБУЧЕНИЯ И ИХ ПРОФИЛИ"}
    }

    return (
        <>
            <Screensaver id={id} linkImage={Equipment} text={"Уникальное оборудование"} alt={"чемодан"} />
            <main>
                <Section id={id[0].link}>
                    <></>
                </Section>
            </main>
            <DownTransition side={"right"} element1={DownCell.element1} element2={DownCell.element2} element3={DownCell.element3}/>
        </>
    )
}
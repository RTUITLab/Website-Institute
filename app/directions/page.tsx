import NoImage from "@/public/NoImage.webp";
import Screensaver from "@/components/screensaver";
import DirectionsImage from "@/public/Направления.webp";
import HelloSection from "@/components/helloSection";
import {IconInformationCircle} from "@/components/iconInformation";
import Analytics from "@/public/АналитикаВика.svg";
import Engineer from "@/public/ИвтВика.svg";
import Architect from "@/public/ПрикИнфВика.svg";
import SoftwareEngineer from "@/public/ПрогИнжВика.svg";
import Style from "./directions.module.scss";


export default function Directions()
{
    return(
        <>
            <Screensaver linkImage={DirectionsImage} text={"НАПРАВЛЕНИЯ И ПРОФИЛИ ОБУЧЕНИЯ"} alt={"Заставка - инфраструктура"} backgroundBlack={true} />
            <main>
                <section>
                    <HelloSection heading={"КОГО МЫ ОБУЧАЕМ?"} text={"Образовательные направления Института информационных технологий прежде всего направлены на подготовку специалистов для современной IT-индустрии, что выделяет нас среди других институтов РТУ МИРЭА. Наши программы предоставляют обширный спектр знаний с акцентом на программирование, разработку программного обеспечения, анализ предметных областей, проектирование цифровых продуктов и систем, математическое моделирование с использованием специализированного ПО, 3D-моделирование, искусственный интеллект и другие аспекты IT-индустрии."} />
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
                </section>
            </main>
        </>
    )
}
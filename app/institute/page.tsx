import Section from "@/components/sections";
import Screensaver from "@/components/screensaver";
import InstituteImage from "@/public/image/институт.webp";
import TitleText from "@/components/titleText";
import {TableStroke, PropsTableStroke} from "@/components/tables/table";
import TextCard from "@/components/cards/textCard";
import MIREASvg from "@/public/svg/MIREA_Gerb_Colour.svg";
import IitSvg from "@/public/svg/it_svg_logo.svg";
import Style from "./institute.module.scss";


export default function PageInstitute() {

    const arrayTableStrokeInstitute: PropsTableStroke = { array: [
        {
            ImageOrHeading: "4",
            text: "Мегалаборатории института информационных технологий",
            alt: null,
            h2: true
        },
        {
            ImageOrHeading: "18",
            text: "Кафедр института и базовых кафедр партнёров ИИТ",
            alt: null,
            h2: true
        },
        {
            ImageOrHeading: "6965",
            text: "Студентов института ИТ, учится в 2023 году",
            alt: null,
            h2: true
        }
    ]};

    return (
        <>
            <Screensaver linkImage={InstituteImage} text={"ИНСТИТУТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ РТУ МИРЭА"} alt={"ИИТ лого"} />
            <main>
                <Section>
                    <TitleText heading={"Начните своЁ творческое приключение сегодня!"} />
                    <TableStroke array={arrayTableStrokeInstitute.array} />
                    <div className={Style.InstituteDivCard}>
                        <TextCard image={MIREASvg} heading={"РОССЙИСКИЙ ТЕХНОЛОГИЧЕСКИЙ УНИВЕРСИТЕТ МИРЭА"} text={"Институт информационных технологий, находящийся в составе МИРЭА - Российского технологического университета, является структурным подразделением, которое активно занимается подготовкой студентов на бакалавриате и магистратуре по важнейшим направлениям, включая программную инженерию, прикладную информатику, информатику и вычислительную технику, а также прикладную математику. Кроме того, институт обеспечивает подготовку аспирантов в пяти ключевых областях."} backgroundBlue={true} />
                        <TextCard image={IitSvg} heading={"ИНСТИТУТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ"} text={"В отличие от других институтов РТУ МИРЭА, наш институт в первую очередь ориентирован на подготовку студентов в области программирования, разработки программного обеспечения и IT-сферы. При этом мы также уделяем внимание инженерным, математическим и бизнес-информационным наукам, но в меньшей степени. Например, студенты направления \"Информатика и вычислительная техника\" в основном занимаются разработкой программного обеспечения для различных устройств, а прикладные математики именно занимаются практическим применением математические методов в анализе данных и в области искусственного интеллекта."} />
                    </div>
                </Section>
            </main>
        </>
    )
}
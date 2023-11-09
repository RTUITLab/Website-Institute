import Section from "@/components/sections";
import Screensaver from "@/components/screensaver";
import InstituteImage from "@/public/image/институт.webp";
import TitleText from "@/components/titleText";
import {Table} from "@/components/tables/table";
import TextCard from "@/components/cards/textCard";
import MIREASvg from "@/public/svg/MIREA_Gerb_Colour.svg";
import IitSvg from "@/public/svg/it_svg_logo.svg";
import Style from "./institute.module.scss";
import ImageCard from "@/components/cards/imageCard";
import GameDev from "@/public/svg/gamedev.webp";
import Data from "@/public/svg/data.webp";
import IOT from "@/public/svg/iot.webp";
import Network from "@/public/svg/network.webp";
import AI from "@/public/svg/ai.webp";
import Mobile from "@/public/svg/mobile.webp";
import Frontend from "@/public/svg/frontend.webp";
import OneC from "@/public/svg/1c.webp";
import PartnersCard from "@/components/cards/partnersCard";
import RosAtomLogo from "@/public/svg/RosAtomLogo.svg";
import SamsungLogo from "@/public/svg/SamsungLogo.svg";
import VkLogo from "@/public/svg/VkLogo.svg";
import YandexLogo from "@/public/svg/YandexLogo.svg";
import RostelecomLogo from "@/public/svg/RostelecomLogo.svg";
import AchievementCard from "@/components/cards/achievementCard";
import Fact1 from "@/public/image/fact1.webp";
import Fact2 from "@/public/image/fact2.webp";
import Fact3 from "@/public/image/fact3.webp";
import Fact4 from "@/public/image/fact4.webp";
import AdmissionCard from "@/components/cards/admissionCard";
import AdmissionImage from "@/public/image/admission.webp";
import DownTransition from "@/components/downTransition";
import DirectionsImage from "@/public/image/Направления.webp";
import RTUITLab from "@/public/image/Лаба_Переход.webp";
import Infrastructure from "@/public/image/Инфраструктура.webp";
import Equipment from "@/public/image/Оборудование_Переход.webp";


export default function PageInstitute() {

    const arrayTableStrokeInstitute = [
        {
            numberOrImage: Number("4"),
            heading: "Мегалаборатории института информационных технологий",
            text: null,
        },
        {
            numberOrImage: Number("18"),
            heading: "Кафедр института и базовых кафедр партнёров ИИТ",
            text: null,
        },
        {
            numberOrImage: Number("6965"),
            heading: "Студентов института ИТ, учится в 2023 году",
            text: null,
        }
    ];

    const arrayTableStrokeMission = [
        {
            numberOrImage: Number("8"),
            heading: "Направлений бакалавриата и магистратуры",
            text: null,
        },
        {
            numberOrImage: Number("19"),
            heading: "Профилей направлений бакалавриата и магистратуры",
            text: null,
        },
        {
            numberOrImage: Number("36"),
            heading: "Программ дополнительной подготовки ИИТ и РТУ МИРЭА",
            text: null,
        }
    ];

    const arrayTableStrokePartners = [
        {
            numberOrImage: Number("16"),
            heading: "Ключевых партнёров института",
            text: null,
        },
        {
            numberOrImage: Number("8"),
            heading: "Профилей реализованных совместно с партнёрами",
            text: null,
        },
        {
            numberOrImage: Number("6"),
            heading: "Программ дополнительной подготовки от партнёров",
            text: null,
        }
    ];

    const id = [{link: "structure", text: "Узнать про институт"}, {link: "mission", text: "Деятельность института"}, {link: "partners", text: "Посмотреть партнёров"}, {link: "facts", text: "Факты о институте"}, {link: "entrance", text: "Узнать про поступление"}];

    const DownCell = {
        element1: {linkImage: Equipment,linkPage: "./equipment",text: "Уникальное оборудование"},
        element2: {linkImage: DirectionsImage,linkPage: "./directions",text: "ПРОГРАММЫ ОБУЧЕНИЯ И ИХ ПРОФИЛИ"},
        element3: {linkImage: RTUITLab,linkPage: "https://rtuitlab.dev",text: "IT лабораториЯ ИИТ"}
    }

    return (
        <>
            <Screensaver id={id} linkImage={InstituteImage} text={"ИНСТИТУТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ РТУ МИРЭА"} alt={"ИИТ лого"} />
            <main>
                <Section id={id[0].link}>
                    <TitleText heading={"Начните своЁ творческое приключение сегодня!"} />
                    <Table array={arrayTableStrokeInstitute} side={"center"} background={"gray"} gapInside={"36px"} gapOutside={"24px"} />
                    <div className={Style.InstituteDivCard}>
                        <TextCard image={MIREASvg} heading={"РОССЙИСКИЙ ТЕХНОЛОГИЧЕСКИЙ УНИВЕРСИТЕТ МИРЭА"} text={"Институт информационных технологий, находящийся в составе МИРЭА - Российского технологического университета, является структурным подразделением, которое активно занимается подготовкой студентов на бакалавриате и магистратуре по важнейшим направлениям, включая программную инженерию, прикладную информатику, информатику и вычислительную технику, а также прикладную математику. Кроме того, институт обеспечивает подготовку аспирантов в пяти ключевых областях."} backgroundBlue={true} />
                        <TextCard image={IitSvg} heading={"ИНСТИТУТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ"} text={"В отличие от других институтов РТУ МИРЭА, наш институт в первую очередь ориентирован на подготовку студентов в области программирования, разработки программного обеспечения и IT-сферы. При этом мы также уделяем внимание инженерным, математическим и бизнес-информационным наукам, но в меньшей степени. Например, студенты направления \"Информатика и вычислительная техника\" в основном занимаются разработкой программного обеспечения для различных устройств, а прикладные математики именно занимаются практическим применением математические методов в анализе данных и в области искусственного интеллекта."} />
                    </div>
                </Section>
                <Section id={id[1].link}>
                    <TitleText heading={"НАША МИССИЯ И УНИКАЛЬНЫЕ «ФИШКИ»"} text={["Нашей задачей является подготовка будущих специалистов в IT-отрасли, предоставляя им образовательные программы и современное оборудование. Наш институт выделяется среди других институтов и факультетов тем, что мы специализируемся исключительно на подготовке IT-специалистов, способных разрабатывать IT-продукты и программное обеспечение."]} />
                    <Table array={arrayTableStrokeMission} side={"center"} background={"white"} gapInside={"36px"} gapOutside={"24px"} />
                    <div className={Style.MissionDivCard} >
                        <ImageCard image={GameDev} heading={"Motion Capture, 3D,  VR/AR, видеоигры"} />
                        <ImageCard image={Data} heading={"Big Data и анализ данных"} />
                        <ImageCard image={IOT} heading={"Облачные технологии, вычисления и IOT"} />
                        <ImageCard image={Network} heading={"Драйвера, сети и низкоуровневые системы"} />
                        <ImageCard image={AI} heading={"ИИ и машинное обучение"} />
                        <ImageCard image={Mobile} heading={"Мобильные приложения и технологии"} />
                        <ImageCard image={Frontend} heading={"Frontend и Backend разработка и WEB технологии"} />
                        <ImageCard image={OneC} heading={"Средства автоматизации и информатизации организаций"} />
                    </div>
                </Section>
                <Section id={id[2].link}>
                    <TitleText heading={"ПАРТНЁРЫ ИНСТИТУТА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ"} />
                    <Table array={arrayTableStrokePartners} side={"center"} background={"gray"} gapInside={"36px"} gapOutside={"24px"} />
                    <div className={Style.PartnersDivGrid}>
                        <PartnersCard image={RosAtomLogo} heading={"Росатом"} text={"Госкорпорация «Росатом», АО «Консист-ОС» и АО «Гринатом»"} indexGrid={1} />
                        <PartnersCard image={SamsungLogo} heading={"SAMSUNG"} text={"Samsung Group — южнокорейская группа IT компаний, IT академия Samsung"} indexGrid={2} />
                        <PartnersCard image={VkLogo} heading={"VK"} text={"Российская инвестиционная технологическая корпорация «VK»"} indexGrid={3} />
                        <PartnersCard image={YandexLogo} heading={"ЯНДЕКС"} text={"«Яндекс» — российская транснациональная компания в отрасли IT"} indexGrid={4} />
                        <PartnersCard image={RostelecomLogo} heading={"РОСТЕЛЕКОМ"} text={"ПАО «Ростелеком»"} indexGrid={5} />
                    </div>
                </Section>
                <Section id={id[3].link}>
                    <TitleText heading={"ИНТЕРЕСНЫЕ ФАКТЫ ИНСТИТУТА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ"} />
                    <div className={Style.AchievementDivCard}>
                        <div>
                            <AchievementCard image={Fact1} heading={"ЛОГОТИП"} text={["В 2017 году институтом был утвержден новый логотип, символизирующий информационные сети, где каждый узел - нейрон, а связи между ними отражают взаимосвязь всех кафедр института.", "Несмотря на уникальность каждой кафедры и их неповторимую деятельность, взаимодействие с остальными кафедрами, также как IT специалисты, становится неотъемлемой частью работы. Ведь с одного человека сложно требовать одновременно выполнять роль дизайнера, проектировщика, разработчика, аналитика и менеджера проекта."]} />
                            <AchievementCard image={Fact3} heading={"ПЕРВАЯ И ЕДИНСТВЕННАЯ MOTION CAPTURE ЛАБОРАТОРИЯ"} text={["В 2020 году создана первая и единственная на базе вузов РФ лаборатория технологий трекинга и захвата движения, оснащенная оборудованием компаний Vicon и Faceware Technologies. Оснащение лаборатории позволяет выполнять полный цикл работ в сфере анимации для лучших современных фильмов и игр AAA-класса.", "С 2022 года оборудование данной лаборатории применяется в учебном процессе студентов направления 09.03.04 по профилю «Разработка и дизайн компьютерных игр и мультимедийных приложений», реализуемому с ключевым отечественным технологическим партнёром — VK."]} />
                        </div>
                        <div>
                            <AchievementCard image={Fact2} heading={"ПАНДА КАК СИМВОЛ"} text={["Животные испокон веков считаются талисманами — одних считают символами любви и веры, других — приносящими удачу, а есть те, которые символизирует трудолюбие и целеустремлённость.", "Символ Института информационных технологий — панда, а панда — это символ мира, спокойствия и дружелюбия. Студенты нашего Института, точно как панды: спокойны на экзамене, сосредоточены на парах, всегда готовы прийти на помощь и поддержать в трудную минуту.", "Логотип «медвежьей кошки» является символом не только у нас, но и у других больших компаний."]} />
                            <AchievementCard image={Fact4} heading={"IT АКАДЕМИЯ SAMSUNG"} text={["В 2017 году в ИИТ РТУ МИРЭА и МФТИ совместно с Samsung Electronics созданы первые в России лаборатории технологий интернета вещей, а к концу 2022 года РТУ МИРЭА является единственным вузом в Москве и одним из восьми в России, реализующим обучение студентов по всем четырём трекам проекта «IT Академия Samsung»."]} />
                        </div>
                    </div>
                </Section>
                <Section id={id[4].link}>
                    <TitleText heading={"ХОТИТЕ ПОСТУПИТЬ К НАМ?"} />
                    <AdmissionCard buttonOne={{link: "https://priem.mirea.ru", text: "ПРИЁМНАЯ КОММИССИЯ"}} buttonTwo={{link: "https://www.mirea.ru/education/the-institutes-and-faculties/", text: "ДРУГИЕ ИНСТИТУТЫ РТУ МИРЭА"}} heading={"ПРИЁМНАЯ КОММИССИЯ "} text={"Поступление в РТУ МИРЭА и Институт информационных технологий осуществляется через приемную комиссию как на платной, так и на бюджетной основе. Подробную информацию о процедуре приема и ее правилах вы можете найти на официальном сайте приемной комиссии."} image={AdmissionImage} />
                </Section>
                <DownTransition element1={DownCell.element1} element2={DownCell.element2} element3={DownCell.element3}/>
            </main>
        </>
    )
}
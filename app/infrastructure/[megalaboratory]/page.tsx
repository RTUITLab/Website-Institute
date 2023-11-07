import InfrastructureImage from "@/public/image/Инфраструктура.webp";
import Screensaver from "@/components/screensaver";
import Section from "@/components/sections";
import ImageScreensaver1 from "@/public/image/лаба_инженерка.webp";
import ImageScreensaver2 from "@/public/image/лаба_кресла.webp";
import ImageScreensaver3 from "@/public/image/лаба_мокап.webp";
import ImageScreensaver4 from "@/public/image/лаба_вр.webp";
import TitleText from "@/components/titleText";
import Style from "./megalaboratory.module.scss";
import Rostelecom_specificity_1 from "@/public/svg/ростелеком_фишка_1.svg";
import Rostelecom_specificity_2 from "@/public/svg/ростелеком_фишка_2.svg";
import Rostelecom_specificity_3 from "@/public/svg/ростелеком_фишка_3.svg";
import Rostelecom_specificity_4 from "@/public/svg/ростелеком_фишка_4.svg";
import Rostelecom_specificity_5 from "@/public/svg/ростелеком_фишка_5.svg";
import Rostelecom_specificity_6 from "@/public/svg/ростелеком_фишка_6.svg";
import Rostelecom_specificity_7 from "@/public/svg/ростелеком_фишка_7.svg";
import Rostelecom_specificity_8 from "@/public/svg/ростелеком_фишка_8.svg";
import Kresla_specificity_1 from "@/public/svg/кресла_фишка_1.svg";
import Kresla_specificity_2 from "@/public/svg/кресла_фишка_2.svg";
import Kresla_specificity_3 from "@/public/svg/кресла_фишка_3.svg";
import Kresla_specificity_4 from "@/public/svg/кресла_фишка_4.svg";
import Kresla_specificity_5 from "@/public/svg/кресла_фишка_5.svg";
import Kresla_specificity_6 from "@/public/svg/кресла_фишка_6.svg";
import Mokap_specificity_1 from "@/public/svg/мокап_фишка_1.svg";
import Mokap_specificity_2 from "@/public/svg/мокап_фишка_2.svg";
import Mokap_specificity_3 from "@/public/svg/мокап_фишка_3.svg";
import Vr_specificity_1 from "@/public/svg/вр_фишка_1.svg";
import Vr_specificity_2 from "@/public/svg/вр_фишка_2.svg";
import Vr_specificity_3 from "@/public/svg/вр_фишка_3.svg";
import Vr_specificity_4 from "@/public/svg/вр_фишка_4.svg";
import Vr_specificity_5 from "@/public/svg/вр_фишка_5.svg";
import Vr_specificity_6 from "@/public/svg/вр_фишка_6.svg";
import {Table, TableImages} from "@/components/tables/table";
import Rostelecom_equipment_1 from "@/public/image/ростелеком_оборудование_1.webp";
import Rostelecom_equipment_2 from "@/public/image/ростелеком_оборудование_2.webp";
import Rostelecom_equipment_3 from "@/public/image/ростелеком_оборудование_3.webp";
import Rostelecom_equipment_4 from "@/public/image/ростелеком_оборудование_4.webp";
import Rostelecom_equipment_5 from "@/public/image/ростелеком_оборудование_5.webp";
import Kresla_equipment_1 from "@/public/image/кресла_оборудование_1.webp";
import Kresla_equipment_2 from "@/public/image/кресла_оборудование_2.webp";
import Mocap_equipment_1 from "@/public/image/мокап_оборудование_1.webp";
import Mocap_equipment_2 from "@/public/image/мокап_оборудование_2.webp";
import Mocap_equipment_3 from "@/public/image/мокап_оборудование_3.webp";
import Mocap_equipment_4 from "@/public/image/мокап_оборудование_4.webp";
import Vr_equipment_1 from "@/public/image/вр_оборудование_1.webp";
import Vr_equipment_2 from "@/public/image/вр_оборудование_2.webp";
import Vr_equipment_3 from "@/public/image/вр_оборудование_3.webp";
import Vr_equipment_4 from "@/public/image/вр_оборудование_4.webp";
import Vr_equipment_5 from "@/public/image/вр_оборудование_5.webp";
import Vr_equipment_6 from "@/public/image/вр_оборудование_6.webp";
import Vr_equipment_7 from "@/public/image/вр_оборудование_7.webp";
import Vr_equipment_8 from "@/public/image/вр_оборудование_8.webp";
import Vr_equipment_9 from "@/public/image/вр_оборудование_9.webp";
import Vr_equipment_10 from "@/public/image/вр_оборудование_10.webp";
import Vr_equipment_11 from "@/public/image/вр_оборудование_11.webp";
import Vr_equipment_12 from "@/public/image/вр_оборудование_12.webp";
import Vr_equipment_13 from "@/public/image/вр_оборудование_13.webp";
import Vr_equipment_14 from "@/public/image/вр_оборудование_14.webp";
import Vr_equipment_15 from "@/public/image/вр_оборудование_15.webp";


function getApi(params: string)
{
    const data = {
        laboratory_import_substitution_of_information_technologies: {
            screensaverText: "Учебно-научный испытательный комплекс «Импортозамещение информационных технологий»",
            screensaverImage: ImageScreensaver1,
            text: ["Учебно-научный испытательный комплекс «Импортозамещение информационных технологий» — это инновационная площадка, которая создана в Институте информационных технологий совместно с компанией «Ростелеком». Это масштабный проект, который решает задачи подготовки и переподготовки востребованных ИТ-специалистов страны, обеспечения технологического и кадрового суверенитета в условиях импортозамещения и с учётом санкционных ограничений."],
            textUsage: ["Комплекс решает две особенно важные в условиях импортозамещения и санкционных ограничений задачи. С одной стороны, он открывает доступ к справочной информации программных и аппаратных средств отечественного производства. А с другой стороны, обеспечивает доступность самого программного обеспечения и компьютерного оборудования национальных производителей. Всё это позволяет повысить эффективность образовательной и исследовательской деятельности и сохранять технологический и кадровый суверенитет государства."],
            video: "https://rutube.ru/play/embed/6333a42cef37924320352f054f7ab087",
            specificity: [{numberOrImage: Rostelecom_specificity_1, heading: "Отечественное  оборудование", text: null}, {numberOrImage: Rostelecom_specificity_2, heading: "Инженерная зона и оборудование", text: null}, {numberOrImage: Rostelecom_specificity_3, heading: "Демонстрационная зона", text: null}, {numberOrImage: Rostelecom_specificity_4, heading: "Разработка и сборка роботизированных кибер платформ", text: null}, {numberOrImage: Rostelecom_specificity_5, heading: "DevOps инженерия на основе отечественных IT-решений и продуктов", text: null}, {numberOrImage: Rostelecom_specificity_6, heading: "Внедрение и использование отечественных IT-продуктов в сфере кибер безопасности", text: null}, {numberOrImage: Rostelecom_specificity_7, heading: "Разработка ПО для отечественных ОС и компьютерного оборудования", text: null}, {numberOrImage: Rostelecom_specificity_8, heading: "Разработка и проектирование программных комплексов для IT-инфраструктуры предприятий", text: null}],
            equipment: [{linkImage: Rostelecom_equipment_1, heading: "ОТЕЧЕСТВЕННОЕ КОМПЬЮТЕРНОЕ ОБОРУДОВАНИЕ", text: "65+ устройств"},{linkImage: Rostelecom_equipment_2, heading: "Демонстрационная зона", text: "1 экран и 20 мест"},{linkImage: Rostelecom_equipment_3, heading: "ОТЕЧЕСТВЕННОЕ ИНЖЕНЕРНОЕ ОБОРУДОВАНИЕ", text: "13+ устройств"},{linkImage: Rostelecom_equipment_4, heading: "ЭКСПЕРЕМЕНТАЛЬНЫЙ ПРОТОТИП ДИНАМИЧЕСКОЙ ШАГАЮЩЕЙ ПЛАТФОРМЫ", text: "1 устройство"},{linkImage: Rostelecom_equipment_5, heading: "МАЛАЯ ЭКСПЕРЕМЕНТАЛЬНАЯ ШАГАЮЩАЯ ПЛАТФОРМА", text: "6+ устройств"}]
        },
        laboratory_technology_analytics_modeling_design_and_digital_prototyping: {
            screensaverText: "Универсальная учебно-научная лаборатория технологий аналитики, моделирования, проектирования и цифрового прототипирования",
            screensaverImage: ImageScreensaver2,
            text: ["На базе Института информационных технологий работает универсальная учебно-научная лаборатория технологий аналитики, моделирования, проектирования и цифрового прототипирования. В ней студенты изучают различные аспекты и компоненты одного из самых перспективных направлений — создание «цифровых двойников» (digital twins), таких цифровых копий или прототипов физических объектов, процессов или целых предприятий, которые позволяют исследовать, прогнозировать и оптимизировать их параметры и характеристики."],
            textUsage: ["Лаборатория используется для проведения занятий с группами магистратуры и бакалавриата (начиная со второго курса) всех направлений подготовки Института информационных технологий вне зависимости от профиля обучения. "],
            video: "https://rutube.ru/play/embed/de1c84b88bc5d95e7ae3410f7d2d6851",
            specificity: [{numberOrImage: Kresla_specificity_1, heading: "Комфортные условия работы", text: null}, {numberOrImage: Kresla_specificity_2, heading: "Условия для мультизадачной работы", text: null}, {numberOrImage: Kresla_specificity_3, heading: "Моделирование 3D объектов и прототипирование", text: null}, {numberOrImage: Kresla_specificity_4, heading: "Разработка программного обеспечения и систем", text: null}, {numberOrImage: Kresla_specificity_5, heading: "Анализ, моделирование и проектирование IT продуктов и систем", text: null}, {numberOrImage: Kresla_specificity_6, heading: "Аналитика больших данных и предиктивная аналитика", text: null}],
            equipment: [{linkImage: Kresla_equipment_1, heading: "Моноблок Apple iMac INTEL", text: "19 устройств"},{linkImage: Kresla_equipment_2, heading: "Компьютерные кресла CyberCapsule", text: "26 устройств"}]
        },
        laboratory_motion_capture: {
            screensaverText: "Лаборатория захвата движения",
            screensaverImage: ImageScreensaver3,
            text: ["На базе Института информационных технологий развёрнута лаборатория захвата движения (motion capture), позволяющая на площади более 40 квадратных метров с высокой точностью позиционирования выполнять запись перемещений и движений актёров, предметов и механизмов с последующим воссозданием их действий в цифровых моделях персонажей и объектов анимации."],
            textUsage: ["На начало 2020 года РТУ МИРЭА — первый и единственный университет в России, на базе которого функционирует полноценная студия захвата движения с профессиональным оборудованием компании Vicon, применяемым для производства лучших современных фильмов и высокобюджетных игр AAA-класса."],
            video: "https://rutube.ru/play/embed/70aff27b537bfa168af1cf3738f65ef2",
            specificity: [{numberOrImage: Mokap_specificity_1, heading: "Системы Vicon для захвата движений объектов (MotionCapture)", text: null}, {numberOrImage: Mokap_specificity_2, heading: "Системы захвата лицевой мимики Faceware Technologies", text: null}, {numberOrImage: Mokap_specificity_3, heading: "Запись анимаций, кат-сцен и фильмов", text: null}],
            equipment: [{linkImage: Mocap_equipment_1, heading: "КОМПЛЕКТ ТРЕКИНГ КОСТЮМА ДЛЯ ЗАХВАТА ДВИЖЕНИЯ", text: "2 устройства"},{linkImage: Mocap_equipment_2, heading: "ШЛЕМ Mark IV Wireless Headcam System", text: "2 устройства"},{linkImage: Mocap_equipment_3, heading: "КОМПЬЮТЕРНАЯ СТАНЦИЯ VICON C ПРОГРАММНЫМ ПАКЕТОМ SHOGUN ДЛЯ ОБРАБОТКИ И ОТСЛЕЖИВАНИЯ МИМИКИ И ДВИЖЕНИЯ ОБЪЕКТОВ ", text: "1 устройство"},{linkImage: Mocap_equipment_4, heading: "КАМЕРЫ ДЛЯ ЗАХВАТА ДВИЖЕНИЯ Vicon Vero", text: "16 устройств"}]
        },
        laboratory_immersive_technologies: {
            screensaverText: "Лаборатория иммерсивных технологий",
            screensaverImage: ImageScreensaver4,
            text: ["Лаборатория иммерсивных технологий работает на базе Института информационных технологий и создана для реализации возможностей погружения операторов в среды расширенной (виртуальной, дополненной и смешанной) реальности с целью обучения индивидуальным и/или групповым действиям в симулируемых окружающих условиях. Лаборатория занимается исследованием аспектов прикладного применения технологий расширенной (виртуальной, дополненной и смешанной) реальности в производственной, проектной, учебной, исследовательской и творческой деятельности."],
            textUsage: ["Имеющееся оборудование позволяет погружать одного или нескольких операторов в любые среды смешанной реальности с реализацией их визуального восприятия и воссозданием физических ощущений посредством воздействия на корпус и конечности."],
            video: "https://rutube.ru/play/embed/2c3a87f34ebc6c9ca05e6c99fcd2b60c",
            specificity: [{numberOrImage: Vr_specificity_1, heading: "Стенд для одновременной работы до 4 операторов", text: null}, {numberOrImage: Vr_specificity_2, heading: "Мощная компьютерная станция для обработки и рендера 3D объектов", text: null}, {numberOrImage: Vr_specificity_3, heading: "Оборудование дополненой реальности", text: null}, {numberOrImage: Vr_specificity_4, heading: "Оборудование виртуальной реальности", text: null}, {numberOrImage: Vr_specificity_5, heading: "Оборудование смешанной реальности", text: null}, {numberOrImage: Vr_specificity_6, heading: "Оборудование расширенной реальности", text: null}],
            equipment: [{linkImage: Vr_equipment_1, heading: "Тактильные костюмы TACTOT с бронёй для рук и ног", text: "5 устройств"},{linkImage: Vr_equipment_2, heading: "Стенд С БАЗОВЫМИ VR СТАНЦИЯМИ для одновременной И СОВМЕСТНОЙ работы до четырёх VR операторов", text: "1 устройство"},{linkImage: Vr_equipment_3, heading: "НАБОР ТАКТИЛЬНЫХ VR ПЕРЧАТОК С ОТДАЧЕЙ", text: "2 комплекта"},{linkImage: Vr_equipment_4, heading: "Шлем вирутальной реальности HTC Vive Pro", text: "5 устройств"},{linkImage: Vr_equipment_5, heading: "Шлем вирутальной реальности HTC VIVE Cosmos", text: "2 устройства"},{linkImage: Vr_equipment_6, heading: "Шлем вирутальной реальности HTC VIVE", text: "8 устройств"},{linkImage: Vr_equipment_7, heading: "Переносные компьютеры в виде рюкзаков Zotac VR Go 2.0", text: "3 устройства"},{linkImage: Vr_equipment_8, heading: "ДОПОЛНИТЕЛЬНЫЕ наборы VR ТРЕКЕРОВ И базовых vr станций", text: "6 наборов"},{linkImage: Vr_equipment_9, heading: "Графическая КОМПЬЮТЕРНАЯ станция для рендера и обработки 3D моделей и анимаций", text: "1 устройство"},{linkImage: Vr_equipment_10, heading: "Шлем вирутальной реальности Oculus Rift CV1", text: "11 устройств"},{linkImage: Vr_equipment_11, heading: "Шлем вирутальной реальности Oculus Quest 2", text: "3 устройства"},{linkImage: Vr_equipment_12, heading: "Устройство дополненной реальности EPSON BT-35E", text: "2 устройства"},{linkImage: Vr_equipment_13, heading: "Устройство дополненной реальности EPSON BT-300 H756A", text: "3 устройства"},{linkImage: Vr_equipment_14, heading: "Устройство смешанной реальности Hololens 2", text: "2 устройства"},{linkImage: Vr_equipment_15, heading: "Устройство смешанной реальности Hololens", text: "9 устройств"}]
        }
    }

    return data[params as keyof typeof data];
}
export default function Megalaboratory({ params } : { params: { megalaboratory: string } }) {
    const data = getApi(params.megalaboratory)

    return (
        <>
            <Screensaver linkImage={data.screensaverImage} text={data.screensaverText} alt={data.screensaverText} />
            <main>
                <Section>
                    <TitleText heading={"Основные ПРЕИМУЩЕСТВА И направления работы лаборатории"} text={data.text} />
                    <Table array={data.specificity} side={"left"} gapInside={"36px/auto"} gapOutside={"16px"} background={"gray"} />
                </Section>
                <Section>
                    <TitleText heading={"ОБОРУДОВАНИЕ"} text={null} />
                    <TableImages array={data.equipment} twoToOne={false} />
                </Section>
                <Section>
                    <TitleText heading={"ОБУЧЕНИЕ И ИСПОЛЬЗОВАНИЕ ЛАБОРАТОРИИ"} text={data.textUsage} />
                </Section>
                <Section>
                    <TitleText heading={"ВИДЕО"} text={null} />
                    <iframe className={Style.Video} src={data.video} frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen />
                </Section>
                <Section>
                    <TitleText heading={"ФОТОГРАФИИ"} text={null} />
                </Section>
            </main>
        </>
    )
}
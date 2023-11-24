
import {ButtonLinkAside} from "@/components/buttons";
import {ButtonMenuAside, ButtonAside} from "@/components/buttons/clientButtons"
import {StaticImageData} from "next/image";
import HelloPage from "@/public/svg/главная_страница_aside.svg";
import DirectionPage from "@/public/svg/программы_обучения_aside.svg";
import InfrastructurePage from "@/public/svg/university.svg";
import IitPage from "@/public/svg/иит_aside.svg";
import EquipmentPage from "@/public/svg/оборудование_aside.svg";
import RTUITLabWeb from "@/public/svg/лаба_aside.svg";
import MIREAWeb from "@/public/svg/мирэа_aside.svg";
import VK from "@/public/svg/vk_aside.svg";
import Youtube from "@/public/svg/youtube_aside.svg";
import TG from "@/public/svg/telegram_aside.svg";
import Rutube from "@/public/svg/rutube_aside.svg";
import Style from "./aside.module.scss";
import classNames from "classnames";

type Props = {
    onClick: () => void,
    imageLink: StaticImageData,
    hidden: boolean
}

export default function Aside({onClick, imageLink, hidden}: Props) {
    return (
        <aside className={classNames(Style.Aside, hidden ? Style.NoHidden : Style.Hidden)}>
            <article>
                <article>
                    <ButtonMenuAside onClick={onClick} imageLink={imageLink} />
                </article>
                <div>
                    <h2>Страницы</h2>
                    <ButtonAside imageLink={HelloPage} link={"/"} text={"Главная страница портала"} onClick={onClick} />
                    <ButtonAside imageLink={IitPage} link={"/institute"} text={"Про институт ИТ"} onClick={onClick} />
                    <ButtonAside imageLink={InfrastructurePage} link={"/infrastructure"} text={"Инфраструктура"} onClick={onClick} />
                    <ButtonAside imageLink={DirectionPage} link={"/directions"} text={"Программы обучения"} onClick={onClick} />
                    <ButtonAside imageLink={EquipmentPage} link={"/equipment"} text={"Уникальное оборудование"} onClick={onClick} />
                </div>
                <div>
                    <h2>Сайты</h2>
                    <ButtonAside targetBlank={true} imageLink={RTUITLabWeb} link={"https://rtuitlab.dev"} text={"IT лаборатория ИИТ"} onClick={onClick} />
                    <ButtonAside targetBlank={true} imageLink={MIREAWeb} link={"https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/about-the-institute/"} text={"Сайт РТУ МИРЭА"} onClick={onClick} />
                </div>
            </article>
            <div>
                <ButtonLinkAside targetBlank={true} imageLink={VK} link={"https://vk.com/it_sumirea"} alt={"vk_iit"} />
                <ButtonLinkAside targetBlank={true} imageLink={Youtube} link={"https://www.youtube.com/@Otvetstvenno_Pro_IT"} alt={"youtube_iit"} />
                <ButtonLinkAside targetBlank={true} imageLink={TG} link={"https://t.me/rtumirea_official"} alt={"tg_mirea"} />
                <ButtonLinkAside targetBlank={true} imageLink={Rutube} link={"https://rutube.ru/u/rtumirea/"} alt={"rutube_mirea"} />
            </div>
        </aside>
    )
}
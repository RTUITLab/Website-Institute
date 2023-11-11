
import Image, {StaticImageData} from "next/image";
import Style from "./buttons.module.scss";
import Link from "next/link";

type PropsButtonMenuAside = {
    onClick: () => void,
    imageLink: StaticImageData
}

export function ButtonMenuAside({onClick, imageLink}:PropsButtonMenuAside)
{

    return (
        <button className={Style.ButtonMenuAside} onClick={onClick} >
            <Image src={imageLink} alt={"button_menu_aside"} />
        </button>
    )
}

type PropsButtonAside = {
    imageLink: StaticImageData,
    link: string,
    text: string,
    onClick: () => void
}

export function ButtonAside({link, imageLink, text, onClick}: PropsButtonAside)
{
    return (
        <Link className={Style.ButtonAside} href={link} onClick={onClick}>
            <Image src={imageLink} alt={text} />
            <h3>{text}</h3>
        </Link>
    )
}
import Link from "next/link";
import Style from "./buttons.module.scss";
import Image, {StaticImageData} from "next/image";
import Arrow_down from "@/public/svg/button_arrow.svg";

type PropsButtonLink = {
    link: string,
    text: string,
    image?: StaticImageData | null,
    tagLink?: boolean
}

export function ButtonLinkDefault({link, text, image = null, tagLink = true}: PropsButtonLink)
{
    const imageComponent = image === null ? <></> : <Image src={link} alt={text} />

    if(tagLink) {
        return (
            <Link className={Style.Button} href={link}>
                <div className={Style.ButtonDefault}>
                    {imageComponent}
                    <h4>{text}</h4>
                </div>
                <div className={Style.ButtonStrokeVIKA}>
                    <div>
                        {imageComponent}
                        <h4>{text}</h4>
                    </div>
                </div>
            </Link>
        )
    }
    else
    {
        return (
            <a className={Style.Button} href={link}>
                <div className={Style.ButtonDefault}>
                    {imageComponent}
                    <h4>{text}</h4>
                </div>
                <div className={Style.ButtonStrokeVIKA}>
                    <div>
                        {imageComponent}
                        <h4>{text}</h4>
                    </div>
                </div>
            </a>
        )
    }
}

export function ButtonLinkVIKA({link, text, image = null}: PropsButtonLink)
{
    const imageComponent = image === null ? <></> : <Image src={link} alt={text} />

    return (
        <Link className={Style.Button} href={link}>
            <div className={Style.ButtonStrokeVIKA}>
                <div>
                    {imageComponent}
                    <h4>{text}</h4>
                </div>
            </div>
            <div className={Style.ButtonVIKA}>
                {imageComponent}
                <h4>{text}</h4>
            </div>
        </Link>
    )
}

type PropsButtonBoolean = {
    setState: () => void,
    text: string
}

export function ButtonBoolean({setState, text}: PropsButtonBoolean)
{
    return (
        <button className={Style.Button} onClick={setState}>
            <div>
                <h4>{text}</h4>
            </div>
            <div>
                <h4>{text}</h4>
            </div>
        </button>
    )
}

type PropsButtonLinkAside = {
    imageLink: StaticImageData,
    link: string,
    alt: string
}

export function ButtonLinkAside({imageLink, link, alt}:PropsButtonLinkAside)
{
    return (
        <Link className={Style.ButtonLinkAside} href={link}>
            <Image src={imageLink} alt={alt} />
        </Link>
    )
}

type PropsButtonId = {
    link: string
}

export function ButtonId({link}:PropsButtonId)
{
    return (
        <a className={Style.ButtonId} href={link}>
            <Image src={Arrow_down} alt={"кнопка_стрелка_вниз"} />
        </a>
    )
}
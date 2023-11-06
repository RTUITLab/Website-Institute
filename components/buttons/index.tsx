import Link from "next/link";
import Style from "./buttons.module.scss";
import React, {Dispatch, SetStateAction} from "react";
import Image, {StaticImageData} from "next/image";

type PropsButtonLink = {
    link: string,
    text: string,
    image?: StaticImageData | null
}

export function ButtonLinkDefault({link, text, image = null}: PropsButtonLink)
{
    const imageComponent = image === null ? <></> : <Image src={link} alt={text} />

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
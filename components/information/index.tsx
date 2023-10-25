import {BlockImage2by1} from "@/components/blocks";
import {StaticImageData} from "next/image";
import Style from "./informationSection.module.scss";

type Props1H2T = {
    heading: string,
    text1: string,
    text2: string,
    linkImage: StaticImageData,
    alt: string
}

export function InformationTextAndImage({heading, text1, text2, linkImage, alt}: Props1H2T)
{
    return (
        <div className={Style.Information}>
            <div className={Style.Text1H2T}>
                <h2>{heading}</h2>
                <div>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
            <div>
                <BlockImage2by1 linkImage={linkImage} alt={alt} />
            </div>
        </div>
    )
}

type Props1H2T2B = {
    heading: string,
    text1: string,
    text2: string,
    linkImage: StaticImageData,
    alt: string,
    buttonsArray: JSX.Element[]
}

export function InformationTextAndImageAndButton({heading, text1, text2, linkImage, alt, buttonsArray}: Props1H2T2B)
{
    return (
        <div className={Style.Information}>
            <div className={Style.Text1H2T2B}>
                <h2>{heading}</h2>
                <div>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
                <div>
                    {buttonsArray.map((elem) => elem)}
                </div>
            </div>
            <div>
                <BlockImage2by1 linkImage={linkImage} alt={alt} />
            </div>
        </div>
    )
}
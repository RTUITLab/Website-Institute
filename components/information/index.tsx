import {BlockImage2by1} from "@/components/blocks";
import {StaticImageData} from "next/image";
import Style from "./informationSection.module.scss";

type Props = {
    heading: string,
    text1: string,
    text2: string,
    linkImage: StaticImageData,
    alt: string
}

export function InformationTextAndImage({heading, text1, text2, linkImage, alt}: Props)
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
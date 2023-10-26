import Style from "./screensaver.module.scss";
import Image, {StaticImageData} from "next/image";

type Props = {
    linkImage: StaticImageData,
    text: string,
    alt: string,
    backgroundBlack: boolean
}

export default function Screensaver({linkImage, text, alt, backgroundBlack = true}: Props)
{
    return (
        <div className={Style.Screensaver}>
            <Image src={linkImage} alt={alt} />
            <div className={backgroundBlack ? Style.backgroundBlack : undefined}>
                <h1>
                    {text}
                </h1>
            </div>
        </div>
    )
}
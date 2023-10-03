import Style from "./screensaver.module.scss";
import Image, {StaticImageData} from "next/image";

type Props = {
    linkImage: StaticImageData,
    text: string,
    alt: string
}

export default function Screensaver({linkImage, text, alt}: Props)
{
    return (
        <div className={Style.Screensaver}>
            <Image src={linkImage} width={'500'} height={'500'} alt={alt} />
            <div>
                <h1>
                    {text}
                </h1>
            </div>
        </div>
    )
}
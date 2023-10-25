import Style from "./screensaver.module.scss";
import Image, {StaticImageData} from "next/image";
import localFont from "next/font/local";

type Props = {
    linkImage: StaticImageData,
    text: string,
    alt: string,
    backgroundBlack: boolean
}

const evolventa = localFont({
    src: [{
        path: './Evolventa-Regular.ttf'
    }],
})

export default function Screensaver({linkImage, text, alt, backgroundBlack = true}: Props)
{
    return (
        <div className={Style.Screensaver}>
            <Image src={linkImage} alt={alt} />
            <div className={backgroundBlack ? Style.backgroundBlack : undefined}>
                <h1 className={evolventa.className}>
                    {text}
                </h1>
            </div>
        </div>
    )
}
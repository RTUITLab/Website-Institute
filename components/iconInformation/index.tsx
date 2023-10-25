import Image, {StaticImageData} from "next/image";
import Style from "./iconInformation.module.scss";

type Props = {
    icon: StaticImageData,
    alt: string,
    text: string
}

export function IconInformationCircle({icon, alt,text}:Props)
{
    return (
        <div className={Style.IconInformation}>
            <div className={Style.IconCircle}>
                <div>
                    <Image src={icon} alt={alt} />
                </div>
            </div>
            <h2>
                {text}
            </h2>
        </div>
    )
}
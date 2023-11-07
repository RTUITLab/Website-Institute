import Image, {StaticImageData} from "next/image";
import Style from "./iconInformation.module.scss";
import classNames from "classnames";

type Props = {
    icon: StaticImageData,
    text: string,
    color?: "white" | "gray" | "blue"
}

const InformationColor : {
    "white": string,
    "gray": string,
    "blue": string
} = {
    "white": Style.White,
    "gray": Style.Gray,
    "blue": Style.Blue
}

export function IconInformationCircle({icon,text, color = "blue"}:Props)
{
    return (
        <div className={classNames(Style.IconInformation, InformationColor[color as keyof typeof InformationColor])}>
            <div className={Style.IconCircle}>
                <div className={InformationColor[color as keyof typeof InformationColor]}>
                    <Image src={icon} alt={text} />
                </div>
            </div>
            <h2>
                {text}
            </h2>
        </div>
    )
}
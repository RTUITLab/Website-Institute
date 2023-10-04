import Style from "./blocks.module.scss";
import Image, {StaticImageData} from "next/image";
import classNames from "classnames";

type Props = {
    linkImage: StaticImageData,
    alt: string
}

export function BlockImage2by1({linkImage, alt}: Props)
{
    return (
        <div className={classNames(Style.BlockImage, Style.Block2by1)}>
            <Image src={linkImage} alt={alt} />
        </div>
    )
}
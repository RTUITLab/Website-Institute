import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import Style from "./cells.module.scss";

type Props = {
    linkImage: StaticImageData,
    text: string,
    linkPage: string,
    alt: string,
    gridAreaNumber: number
}

export function CellTransition({linkImage, text, linkPage, alt, gridAreaNumber}: Props)
{
    return (
        <Link className={Style.Cell} style={{gridArea: "cell-"+gridAreaNumber}} href={linkPage}>
            <Image src={linkImage} alt={alt}/>
            <div>
                <h3>
                    {text}
                </h3>
            </div>
        </Link>
    )
}
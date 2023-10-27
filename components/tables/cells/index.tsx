import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import Style from "./cells.module.scss";

type PropsCellTransition = {
    linkImage: StaticImageData,
    text: string,
    linkPage: string,
    alt: string,
    gridAreaNumber: number,
    additionalText: string | null | undefined
}

export function CellTransition({linkImage, text, linkPage, alt, gridAreaNumber, additionalText}: PropsCellTransition)
{
    return (
        <Link className={Style.CellTransition} style={{gridArea: "cell-"+gridAreaNumber}} href={linkPage}>
            <Image src={linkImage} alt={alt}/>
            <div>
                <h3>
                    {text}
                </h3>
                {(additionalText === null || additionalText === undefined) ? <></> : <h3 key={text}>{additionalText}</h3>}
            </div>
        </Link>
    )
}

type PropsCellFact = {
    ImageOrHeading: StaticImageData | string,
    alt: string | null | undefined,
    text: string,
    gridAreaNumber: number
}

export function CellFact({ImageOrHeading,alt,text,gridAreaNumber}:PropsCellFact)
{
    return (
        <div className={Style.CellFact} style={{gridArea: "cell-"+gridAreaNumber}}>
            {typeof ImageOrHeading === "string" ? <h1>{ImageOrHeading}</h1> : <Image src={ImageOrHeading} alt={typeof alt === "string" ? alt : String(alt)+" alt"} />}
            <h3>{text}</h3>
        </div>
    )
}
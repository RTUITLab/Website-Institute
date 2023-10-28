import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import Style from "./cells.module.scss";
import classNames from "classnames";

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
    gridAreaNumber: number,
    paddingBig: boolean,
    h2: boolean
}

const booleanPaddingBig: {
    false: string,
    true: null
} = {
    false: Style.CellFactPaddingSmall,
    true: null
}

export function CellFact({ImageOrHeading,alt,text,gridAreaNumber, paddingBig, h2}:PropsCellFact)
{
    return (
        <div className={classNames(Style.CellFact, booleanPaddingBig[String(paddingBig) as keyof typeof booleanPaddingBig])} style={{gridArea: "cell-"+gridAreaNumber}}>
            {typeof ImageOrHeading === "string" ? <h1>{ImageOrHeading}</h1> : <Image src={ImageOrHeading} alt={typeof alt === "string" ? alt : String(alt)+" alt"} />}
            {h2 ? <h2>{text}</h2> : <h3>{text}</h3>}
        </div>
    )
}

type PropsCell = {
    linkImage: StaticImageData,
    heading: string,
    text: string,
    alt: string
}

export function Cell({linkImage, heading, text, alt}:PropsCell)
{
    return (
        <div className={Style.Cell}>
            <Image src={linkImage} alt={alt} />
            <div>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

type PropsCellInformation = {
    linkImage: StaticImageData,
    heading: string,
    text: {text: string, link: string | null}[],
    alt: string,
    paddingBig: boolean
}

export function CellInformation({linkImage, heading, text, alt, paddingBig}:PropsCellInformation)
{
    return (
        <div className={classNames(Style.CellInformation, booleanPaddingBig[String(paddingBig) as keyof typeof booleanPaddingBig])}>
            <Image src={linkImage} alt={alt} />
            <div>
                <h2>{heading}</h2>
                <div>
                    {text.map((elem, index) => elem.link === null ? <h3 key={heading+index}>{elem.text}</h3> : <h3 key={heading+index}><Link href={String(elem.link)}>{elem.text}</Link></h3>)}
                </div>
            </div>
        </div>
    )
}
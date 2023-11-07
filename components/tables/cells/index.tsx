import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import Style from "./cells.module.scss";
import classNames from "classnames";

type Props = {
    numberOrImage: string | number | StaticImageData,
    heading: string,
    text: string[] | null,
    background: "white" | "gray" | "blue",
    side: "left" | "center",
    gapInside: "36px/auto" | "48px" | "36px",
}

const TableColor : {
    "white": string,
    "gray": string,
    "blue": string
} = {
    "white": Style.White,
    "gray": Style.Gray,
    "blue": Style.Blue
}

const TableSide: {
    "left": string,
    "center": string
} = {
    "left": Style.Left,
    "center": Style.Center
}

const TableGap: {
    "36px/auto": string,
    "48px": string,
    "36px": string
} = {
    "36px/auto": Style.GapAuto,
    "48px": Style.Gap48,
    "36px": Style.Gap36,
}
export function Cell({numberOrImage, heading, text, background, side, gapInside}: Props)
{
    return (
        <article className={classNames(Style.Cell, TableColor[background as keyof typeof TableColor], TableSide[side as keyof typeof TableSide], TableGap[gapInside as keyof typeof TableGap])}>
            {(typeof(numberOrImage) === "number") || (typeof(numberOrImage) === "string") ? <h1>{numberOrImage}</h1> : <Image src={numberOrImage} alt={heading} />}
            <div>
                <h2>{heading}</h2>
                {text === null ? <></> : text.map((elem, index) => <p key={heading+"_text_"+index}>{elem}</p>)}
            </div>
        </article>
    )
}

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
                <h3>{text}</h3>
                {(additionalText === null || additionalText === undefined) ? <></> : <h3 key={text}>{additionalText}</h3>}
            </div>
        </Link>
    )
}

type PropsCellImage = {
    linkImage: StaticImageData,
    heading: string,
    text?: string | null | undefined
    twoToOne?: boolean
}

export function CellImage({linkImage, heading, text = null, twoToOne = true}:PropsCellImage)
{
    return (
        <article className={classNames(Style.CellImage, twoToOne ? Style.CellImage2to1 : Style.CellImage1to1)}>
            <Image src={linkImage} alt={heading} />
            <div>
                <h3>{heading}</h3>
                {(text === null) || (text === undefined) ? <></> : <p>{text}</p>}
            </div>
        </article>
    )
}
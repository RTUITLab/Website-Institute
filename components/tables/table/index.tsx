import Style from "./table.module.scss";
import {Cell, CellImage} from "@/components/tables/cells";
import {StaticImageData} from "next/image";
import classNames from "classnames";

type PropsTable = {
    array: {
        numberOrImage: string | number | StaticImageData,
        heading: string,
        text: string[] | null,
    }[],
    side: "left" | "center",
    gapInside: "36px/auto" | "48px" | "36px",
    gapOutside: "32px" | "16px" | "48px" | "24px",
    background: "white" | "gray"
}

const lotTable: {
    8: string,
    6: string,
    4: string,
    3: string,
    2: string
} = {
    8: Style.Table8,
    6: Style.Table6,
    4: Style.Table4,
    3: Style.Table3,
    2: Style.Table2
}

const StyleGapOutside: {
    "48px": string,
    "32px": string,
    "24px": string,
    "16px": string
} = {
    "48px": Style.Gap48,
    "32px": Style.Gap32,
    "24px": Style.Gap24,
    "16px": Style.Gap16
}

export function Table({array, side, gapInside, gapOutside, background}: PropsTable) {
    return (
        <article className={classNames(Style.Table, lotTable[array.length as keyof typeof lotTable], StyleGapOutside[gapOutside as keyof typeof StyleGapOutside])}>
            {array.map((elem, index) => index % 2 === 0 ? <Cell key={"table_"+index} numberOrImage={elem.numberOrImage} heading={elem.heading} text={elem.text} background={background} side={side} gapInside={gapInside} /> : <Cell key={"table_"+index} numberOrImage={elem.numberOrImage} heading={elem.heading} text={elem.text} background={"blue"} side={side} gapInside={gapInside} />)}
        </article>
    )

}

type PropsTableImages = {
    array: {
        linkImage: StaticImageData,
        heading: string,
        text?: string | null | undefined
    }[],
    twoToOne?: boolean
}

export function TableImages({array, twoToOne = true}:PropsTableImages) {
    return (
        <div className={classNames(Style.Table, Style.Table2to1)}>
            {array.map((elem) => <CellImage key={"table_images_" + elem.heading} linkImage={elem.linkImage} heading={elem.heading} text={elem.text} twoToOne={twoToOne}/>)}
        </div>
    )
}
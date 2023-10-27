import Style from "./table.module.scss";
import {CellFact} from "@/components/tables/cells";
import {StaticImageData} from "next/image";
import classNames from "classnames";


const TableCells : {
    8: string,
    6: string,
    4: string,
    3: string
} = {
    8: Style.Table8,
    6: Style.Table6,
    4: Style.Table4,
    3: Style.Table3
}

const Stroke : {
   8: JSX.Element,
   6: JSX.Element,
   4: JSX.Element,
   3: JSX.Element
} = {
    8: <>
        <div className={Style.Stroke} style={{gridArea: "stroke-1"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-2"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-3"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-4"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-5"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-6"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-7"}} />
        </>,
    6: <>
        <div className={Style.Stroke} style={{gridArea: "stroke-1"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-2"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-3"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-4"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-5"}} />
    </>,
    4: <>
        <div className={Style.Stroke} style={{gridArea: "stroke-1"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-2"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-3"}} />
    </>,
    3: <>
        <div className={Style.Stroke} style={{gridArea: "stroke-1"}} />
        <div className={Style.Stroke} style={{gridArea: "stroke-2"}} />
    </>
}

type Props = {
    array: {ImageOrHeading: StaticImageData | string, text: string, alt: string | null | undefined}[]
}

export function TableStroke({array}:Props)
{

    return (
        <div className={classNames(Style.Table, TableCells[array.length as keyof typeof TableCells])}>
            {array.map((elem, index) => <CellFact key={"table_stroke_"+index} ImageOrHeading={elem.ImageOrHeading} alt={elem.alt} text={elem.text} gridAreaNumber={index+1} />)}
            {Stroke[array.length as keyof typeof Stroke]}
        </div>
    )
}
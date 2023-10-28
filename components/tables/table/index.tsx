import Style from "./table.module.scss";
import {Cell, CellFact, CellInformation} from "@/components/tables/cells";
import {StaticImageData} from "next/image";
import classNames from "classnames";


const TableCells : {
    8: string,
    6: string,
    4: string,
    3: string,
    2: string
} = {
    8: Style.TableStroke8,
    6: Style.TableStroke6,
    4: Style.TableStroke4,
    3: Style.TableStroke3,
    2: Style.TableStroke2
}

const Stroke : {
   8: JSX.Element,
   6: JSX.Element,
   4: JSX.Element,
   3: JSX.Element,
   2: JSX.Element
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
    </>,
    2: <div className={Style.Stroke} style={{gridArea: "stroke-1"}} />
}

const booleanPaddingBig : {
    8: boolean,
    6: boolean,
    4: boolean,
    3: boolean,
    2: boolean
} = {
    8: true,
    6: true,
    4: false,
    3: false,
    2: false
}

type PropsTableStroke = {
    array: {ImageOrHeading: StaticImageData | string, text: string, alt: string | null | undefined, h2: boolean}[]
}

export function TableStroke({array}:PropsTableStroke)
{

    const paddingBig = booleanPaddingBig[array.length as keyof typeof booleanPaddingBig];

    return (
        <div className={classNames(Style.Table, TableCells[array.length as keyof typeof TableCells])}>
            {array.map((elem, index) => <CellFact key={"table_stroke_"+index} ImageOrHeading={elem.ImageOrHeading} alt={elem.alt} text={elem.text} gridAreaNumber={index+1} paddingBig={paddingBig} h2={elem.h2} />)}
            {Stroke[array.length as keyof typeof Stroke]}
        </div>
    )
}

type PropsTableInformation = {
    array: {linkImage: StaticImageData, heading: string, text: {text: string, link: string | null}[], alt: string}[]
}

export function TableInformation({array}:PropsTableInformation)
{

    const paddingBig = booleanPaddingBig[array.length as keyof typeof booleanPaddingBig];

    return (
        <div className={classNames(Style.Table, TableCells[array.length as keyof typeof TableCells])}>
            {array.map((elem, index) => <CellInformation key={elem.heading+"cell"+index} linkImage={elem.linkImage} heading={elem.heading} text={elem.text} alt={elem.heading} paddingBig={paddingBig} />)}
            {Stroke[array.length as keyof typeof Stroke]}
        </div>
    )
}

type PropsTable = {
    array: {
        linkImage: StaticImageData,
        heading: string,
        text: string,
        alt: string
    }[]
}

export function Table({array}:PropsTable)
{
    return (
        <div className={classNames(Style.Table, Style.Table3)}>
            {array.map((elem, index) => <Cell key={elem.heading+index} linkImage={elem.linkImage} heading={elem.heading} text={elem.text} alt={elem.alt} /> )}
        </div>
    )
}
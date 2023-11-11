import {CellTransition} from "@/components/tables/cells";
import Style from "./transition.module.scss";
import {StaticImageData} from "next/image";
import classNames from "classnames";

type Props = {
    array: {linkImage: StaticImageData,text: string,linkPage: string,alt: string,additionalText?: string | null | undefined}[],
    reverse?: boolean
}

const TableCells : {
    12: string,
    4: string,
    5: string,
} = {
    12: Style.Transition12,
    4: Style.Transition4,
    5: Style.Transition5,
}

export default function Transition({array, reverse = false}: Props)
{
    return (
        <div className={classNames(Style.Transition, reverse ? Style.Transition5Reverse : TableCells[array.length as keyof typeof TableCells])}>
            {
                array.map((elem, index) => <CellTransition
                                                                                linkImage={elem.linkImage}
                                                                                text={elem.text}
                                                                                linkPage={elem.linkPage}
                                                                                alt={elem.alt}
                                                                                gridAreaNumber={index+1}
                                                                                key={index}
                                                                                additionalText={elem.additionalText} />)
            }
        </div>
    )
}

type TransitionDown = {
    array: {linkImage: StaticImageData,text: string,linkPage: string,alt: string,additionalText?: string | null | undefined, positionUp?: boolean | undefined}[],
    side?: "left" | "center" | "right"
}

const TableSide : {
    "left": string,
    "center": string,
    "right": string,
} = {
    "left": Style.Transition3Left,
    "center": Style.Transition3Center,
    "right": Style.Transition3Right
}

export function TransitionDown({array, side = "center"}: TransitionDown) {
    return (
        <div className={classNames(Style.Transition, Style.Transition3, TableSide[side as keyof typeof TableSide])}>
            {
                array.map((elem, index) => <CellTransition
                    linkImage={elem.linkImage}
                    text={elem.text}
                    linkPage={elem.linkPage}
                    alt={elem.alt}
                    gridAreaNumber={index+1}
                    key={index}
                    positionUp={elem.positionUp === undefined ? false : elem.positionUp}
                    additionalText={elem.additionalText} />)
            }
        </div>
    )
}
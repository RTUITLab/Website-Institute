import {CellTransition} from "@/components/table/cells";
import Style from "./transition.module.scss";
import {StaticImageData} from "next/image";
import classNames from "classnames";

type Props = {
    array: {linkImage: StaticImageData,text: string,linkPage: string,alt: string,additionalText: string | null | undefined}[]
}

type TableCellsType = {
    Cells12: string,
    Cells4: string
}

const TableCells : {
    12: string,
    4: string,
    5: string
} = {
    12: Style.Transition12,
    4: Style.Transition4,
    5: Style.Transition5
}

export default function Transition({array}: Props)
{
    return (
        <div className={classNames(Style.Transition, TableCells[array.length as keyof typeof TableCells])}>
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
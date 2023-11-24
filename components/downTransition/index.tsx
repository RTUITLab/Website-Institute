import {TransitionDown} from "@/components/tables/transition";
import {StaticImageData} from "next/image";
import Style from "./downTransition.module.scss";
import TitleText from "@/components/titleText";

type Props = {
    array: {
        linkImage: StaticImageData,
        text: string,
        linkPage: string,
        targetBlank?: boolean | undefined
    }[],
    heading?: string
}

export default function DownTransition({array, heading = "ДРУГИЕ ТЕМАТИЧЕСКИЕ СТРАНИЦЫ"}: Props) {

    return (
        <section className={Style.Section}>
            <article>
                <div/>
                <h2>{heading}</h2>
                <div/>
            </article>
            <TransitionDown array={array} />
        </section>
    )
}
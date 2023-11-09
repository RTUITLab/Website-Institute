import {TransitionDown} from "@/components/tables/transition";
import {StaticImageData} from "next/image";
import Style from "./downTransition.module.scss";
import TitleText from "@/components/titleText";

type Props = {
    element1: {linkImage: StaticImageData,text: string,linkPage: string},
    element2: {linkImage: StaticImageData,text: string,linkPage: string},
    element3: {linkImage: StaticImageData,text: string,linkPage: string},
    heading?: string,
    side?: "left" | "center" | "right"
}

export default function DownTransition({element1, element2, element3, heading = "ДРУГИЕ ТЕМАТИЧЕСКИЕ СТРАНИЦЫ", side = "center"}: Props) {
    const array = [{
        linkImage: element1.linkImage, text: element1.text, linkPage: element1.linkPage, alt: element1.text
    }, {
        linkImage: element2.linkImage, text: element2.text, linkPage: element2.linkPage, alt: element2.text
    },{
        linkImage: element3.linkImage, text: element3.text, linkPage: element3.linkPage, alt: element3.text
    }]

    return (
        <section className={Style.Section}>
            <article>
                <div/>
                <h2>{heading}</h2>
                <div/>
            </article>
            <TransitionDown array={array} side={side} />
        </section>
    )
}
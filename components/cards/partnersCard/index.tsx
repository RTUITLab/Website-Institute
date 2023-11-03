import Image, {StaticImageData} from "next/image";
import Style from "./partnersCard.module.scss";

type Props = {
    image: StaticImageData,
    heading: string,
    text: string,
    indexGrid: number
}

export default function PartnersCard({image, heading, text, indexGrid}: Props) {
    return (
        <article className={Style.PartnersCard} style={{gridArea: "cell-"+indexGrid}}>
            <Image src={image} alt={heading} />
            <div>
                <h1>{heading}</h1>
                <h2>{text}</h2>
            </div>
        </article>
    )
}
import Image, {StaticImageData} from "next/image";
import Style from "./imageCard.module.scss";

type Props = {
    image: StaticImageData,
    heading: string
}

export default function ImageCard({image, heading}: Props) {
    return (
        <article className={Style.ImageCard}>
            <Image src={image} alt={heading} />
            <div>
                <h2>{heading}</h2>
            </div>
        </article>
    )
}
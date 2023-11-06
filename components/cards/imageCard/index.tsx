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
                <h3>{heading}</h3>
            </div>
        </article>
    )
}
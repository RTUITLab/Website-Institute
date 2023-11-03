import Image, {StaticImageData} from "next/image";
import classNames from "classnames";
import Style from './textCard.module.scss';


type Props = {
    image: StaticImageData,
    heading: string,
    text: string,
    backgroundBlue?: boolean
}

export default function TextCard({image, heading, text, backgroundBlue = false}:Props)
{
    return (
        <article className={classNames(Style.CardText, backgroundBlue ? Style.BackgroundBlue : Style.BackgroundWhite)}>
            <div>
                <Image src={image} alt={heading} />
                <h1>{heading}</h1>
            </div>
            <p>{text}</p>
        </article>
    )
}
import Image, {StaticImageData} from "next/image";
import Style from "./achievementCard.module.scss";

type Props = {
    heading: string,
    text: string[],
    image: StaticImageData
}

export default function AchievementCard({heading, text, image}:Props) {
    return (
        <article className={Style.AchievementCard} >
            <div>
                <h1>{heading}</h1>
                {text.map((elem, index) => <h3 key={heading+"_"+index}>{elem}</h3>)}
            </div>
            <Image src={image} alt={heading} />
        </article>
    )
}
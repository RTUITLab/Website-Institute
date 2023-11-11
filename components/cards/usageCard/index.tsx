import Image, {StaticImageData} from "next/image";
import classNames from "classnames";
import Style from "./usageCard.module.scss";

type PropsUsageCard = {
    image: StaticImageData,
    heading: string,
    style: string
}

function UsageCard({image, heading, style}:PropsUsageCard)
{
    return (
        <article className={classNames(Style.usageCard, style === "default" ? Style.CardDefault : (style === "vika" ? Style.CardVika : (style === "iio" ? Style.CardIio : Style.CardRostelecom)))}>
            <Image src={image} alt={heading} />
            <h2>{heading}</h2>
        </article>
    )
}

type PropsUsage = {
    array: PropsUsageCard[]
}

export default function UsageCardTable({array}:PropsUsage)
{
    return (
        <div className={Style.usageCardSection}>
            {array.map((elem, index) => <UsageCard key={"usage_card_"+index} image={elem.image} heading={elem.heading} style={elem.style} />)}
        </div>
    )
}
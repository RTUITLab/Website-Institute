import Image, {StaticImageData} from "next/image";
import Style from "./profile.module.scss";

type Props = {
    heading: string,
    linkImage: StaticImageData,
    direction: {title: string, link: string} | null,
    partner: string | null ,
    text: string | null,
    areasStudy: {
        imageMin: StaticImageData,
        imageMax: StaticImageData,
        title: string,
        levelBase: boolean
    }[] | null
};

export default function Profile({heading, linkImage, direction, partner, text, areasStudy}:Props)
{
    return (
        <article className={Style.Profile} >
            <Image src={linkImage} alt={heading} />
            <div>
                <div className={Style.BlockBetween}>
                    <div>
                        <h2>{heading}</h2>
                        {direction !== null ? <h3>{direction!.title}</h3> : <></>}
                        {partner !== null ? <h3>{partner}</h3> : <></>}
                    </div>
                    <div>

                    </div>
                </div>
                <div className={Style.BlockBetween}>

                </div>
            </div>
        </article>
    )
}
import Image, {StaticImageData} from "next/image";
import Style from "./admissionCard.module.scss";

type Props = {
    heading: string,
    text: string,
    image: StaticImageData,
    linkAdmission?: string,
    linkAllInstitute?: string
}

export default function AdmissionCard({heading, text, image, linkAdmission, linkAllInstitute}: Props) {
    return (
        <article className={Style.AdmissionCard}>
            <Image src={image} alt={heading} />
            <div>
                <h1>{heading}</h1>
                <h2>{text}</h2>
                <div>

                </div>
            </div>
        </article>
    )
}
import Image, {StaticImageData} from "next/image";
import Style from "./admissionCard.module.scss";
import {ButtonLinkDefault, ButtonLinkVIKA} from "@/components/buttons";

type Props = {
    heading: string,
    text: string,
    image: StaticImageData,
    buttonOne: {text: string, link: string},
    buttonTwo: {text: string, link: string}
}

export default function AdmissionCard({heading, text, image, buttonOne, buttonTwo}: Props) {
    return (
        <article className={Style.AdmissionCard}>
            <Image src={image} alt={heading} />
            <div>
                <h1>{heading}</h1>
                <h2>{text}</h2>
                <div>
                    <ButtonLinkDefault targetBlank={true} link={buttonOne.link} text={buttonOne.text} />
                    <ButtonLinkDefault targetBlank={true} link={buttonTwo.link} text={buttonTwo.text} />
                </div>
            </div>
        </article>
    )
}
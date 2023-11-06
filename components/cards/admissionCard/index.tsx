import Image, {StaticImageData} from "next/image";
import Style from "./admissionCard.module.scss";
import {ButtonLinkDefault, ButtonLinkVIKA} from "@/components/buttons";

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
                    <ButtonLinkDefault link={"https://priem.mirea.ru"} text={"ПРИЁМНАЯ КОММИССИЯ"} />
                    <ButtonLinkVIKA link={"https://www.mirea.ru/education/the-institutes-and-faculties/"} text={"ДРУГИЕ ИНСТИТУТЫ РТУ МИРЭА"} />
                </div>
            </div>
        </article>
    )
}
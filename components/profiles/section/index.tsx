import {StaticImageData} from "next/image";
import Profile from "@/components/profiles/profile";
import Style from "./sectionProfiles.module.scss";

type Props = {
    array: {
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
    }[]
};

export default function SectionProfiles({array}:Props) {

    return (
        <>
            <div className={Style.SectionProfiles}>
                {array.map((elem, index) => <Profile
                    key={"profile"+index}
                    heading={elem.heading}
                    linkImage={elem.linkImage}
                    direction={elem.direction}
                    partner={elem.partner}
                    text={elem.text}
                    areasStudy={elem.areasStudy} />)}
            </div>
        </>
    );
}
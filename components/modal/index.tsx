import Image, {StaticImageData} from "next/image";
import BaseLevel from "@/public/svg/BaseLevel.svg";
import ProLevel from "@/public/svg/ProLevel.svg";
import Style from "./modal.module.scss";
import classNames from "classnames";

type PropsLevel = {
    image: StaticImageData,
    heading: string,
    text: string
}

function Level({image, heading, text}:PropsLevel) {
    return (
        <article className={Style.Level}>
            <Image src={image} alt={heading} />
            <h2>{heading}</h2>
            <p>{text}</p>
        </article>
    )
}

type PropsSpheres = {
    image: StaticImageData,
    heading: string,
    levelBase: boolean
}

function Spheres({image, heading, levelBase}:PropsSpheres)
{
    return (
        <article className={Style.Spheres}>
            <Image src={image} alt={heading}/>
            <div>
                <h3>{heading}</h3>
                <p>Уровень: {levelBase ? "Базовый" : "Углублённый"}</p>
            </div>
        </article>
    )
}

type Props = {
    image: StaticImageData,
    titleProfile: string,
    titleDepartment: string,
    titlePartner?: string | null,
    text: string,
    spheresArray: PropsSpheres[],
    onClick: () => void,
    hidden: boolean
}

export default function Modal({image, titleProfile, titleDepartment, text, spheresArray, titlePartner = null, onClick, hidden}: Props) {
    return (
        <div className={classNames(Style.Modal, hidden ? Style.ModalHidden : Style.ModalNoHidden)}>
            <article>
                <Image src={image} alt={titleProfile} />
                <div>
                    <div>
                        <h1>{titleProfile}</h1>
                        {titlePartner === null ? <></> : <h2>{titlePartner}</h2>}
                        <h3>Выпускающая кафедра: {titleDepartment}</h3>
                    </div>
                    <p>{text}</p>
                </div>
                <div>
                    <article>
                        <div>
                            <div>
                                <div/>
                                <h2>Сферы обучения</h2>
                                <div/>
                            </div>
                            <div>
                                <Level heading={"Базовый уровень"} text={"Это уровень при котором даются начальные знания по данной сфере, обычно это 1 или 2 дисциплины"} image={BaseLevel}/>
                                <Level heading={"Углублённый уровень"} text={"Это уровень при котором даются начальные и углублённые знания по данной сфере, обычно это от 3х дисциплин и более"} image={ProLevel}/>
                            </div>
                        </div>
                        <div>
                            {spheresArray.map((elem, index) => <Spheres key={"sphere_"+titleProfile+"_"+index} image={elem.image} heading={elem.heading} levelBase={elem.levelBase} />)}
                        </div>
                    </article>
                </div>
            </article>
            <button onClick={onClick}/>
        </div>
    )
}
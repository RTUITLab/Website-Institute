import Style from "./helloSection.module.scss";

type Props = {
    heading: string,
    text: string
}

export default function HelloSection({heading, text}: Props)
{
    return (
        <div className={Style.helloSection}>
            <h1>{heading}</h1>
            <h3>{text}</h3>
        </div>
    )
}
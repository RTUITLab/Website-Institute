import Style from "./helloSection.module.scss";

type Props = {
    heading: string,
    text: string
}

export default function HelloSection({heading, text}: Props)
{
    return (
        <section className={Style.helloSection}>
            <h2>{heading}</h2>
            <p>{text}</p>
        </section>
    )
}
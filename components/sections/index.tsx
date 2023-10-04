import Style from "./sections.module.scss";

type Props = {
    arrayElements: JSX.Element[]
}

export function Section75({arrayElements}: Props)
{
    return (
        <section className={Style.Section75}>
            {arrayElements.map((elem) => (elem))}
        </section>
    )
}
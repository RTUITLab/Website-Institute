import Style from "@/components/helloSection/helloSection.module.scss";


type Props = {
    heading: string,
    text: string[] | null
}

export default function TitleText({heading, text}:Props)
{
    return (
        <div className={Style.helloSection}>
            <h1>{heading}</h1>
            {text === null ? <></> : text.map((elem, index) => <h3 key={heading+"_"+index}>{elem}</h3>)}
        </div>
    )
}
import Style from "./border.module.scss";

type Props = {
    side: string
}

const SidesStyles : {
    center: string,
    right: string,
    left: string
} = {
    center: Style.Center,
    right: Style.Right,
    left: Style.Left
}

export default function Border({side}:Props)
{
    return (
        <section>
            <div></div>
        </section>
    )
}
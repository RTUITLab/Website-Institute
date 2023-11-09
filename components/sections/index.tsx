import Style from "./sections.module.scss";
import React, {FC} from "react";

type Props = {
    children: React.ReactNode,
    id: string
}

const Section: FC<Props> = ({children, id}) => {
    return (
        <section className={Style.Section} id={id}>
            <section>
                {children}
            </section>
        </section>
    )
}

export default Section;
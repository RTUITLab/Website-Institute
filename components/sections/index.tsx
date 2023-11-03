import Style from "./sections.module.scss";
import React, {FC} from "react";

type Props = {
    children: React.ReactNode
}

const Section: FC<Props> = ({children}) => {
    return (
        <section className={Style.Section}>
            <section>
                {children}
            </section>
        </section>
    )
}

export default Section;
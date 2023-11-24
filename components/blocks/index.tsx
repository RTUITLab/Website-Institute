import Style from "./blocks.module.scss";
import Image, {StaticImageData} from "next/image";
import classNames from "classnames";
import {ButtonLinkDefault, ButtonLinkVIKA} from "@/components/buttons";

type Props = {
    linkImage: StaticImageData,
    heading: string,
    reverse?: boolean
    buttonImportant?: string | null | undefined,
    buttonBasic?: string | null | undefined
}

export function BlockImage({linkImage, heading, reverse=false, buttonImportant = null, buttonBasic = null}: Props)
{
    return (
        <article className={classNames(Style.BlockImage, reverse ? Style.DirectionRow : Style.DirectionReverseRow)}>
            <article>
                <Image src={linkImage} alt={heading} />
            </article>
            <div>
                <h2>{heading}</h2>
                {(typeof buttonBasic === "string") || (typeof buttonImportant === "string") ?
                    <div>
                        {(buttonImportant === null) || (buttonImportant === undefined) ? <></> : <ButtonLinkVIKA link={buttonImportant} text={"подробнее"} />}
                        {(buttonBasic === null) || (buttonBasic === undefined) ? <></> : <ButtonLinkDefault targetBlank={true} link={buttonBasic} text={"подробнее на сайте рту мирэа"} />}
                    </div> : <></>
                }
            </div>
        </article>
    )
}
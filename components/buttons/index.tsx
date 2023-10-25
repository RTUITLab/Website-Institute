import Link from "next/link";
import Style from "./buttons.module.scss";
import classNames from "classnames";

type Props = {
    linkButton: string,
    text: string
}

export function ButtonLinkAppBlue({linkButton, text}: Props)
{
    return (
        <Link className={classNames(Style.Button, Style.AppBlue)} href={linkButton} >
            <div>
                <h4>{text}</h4>
            </div>
            <div>
                <h4>{text}</h4>
            </div>
        </Link>
    )
}

export function ButtonLinkMirea({linkButton, text}: Props)
{
    return (
        <Link className={classNames(Style.Button)} href={linkButton} >
            <div>
                <h4>{text}</h4>
            </div>
            <div>
                <h4>{text}</h4>
            </div>
        </Link>
    )
}
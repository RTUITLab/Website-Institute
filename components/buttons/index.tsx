import Link from "next/link";
import Style from "./buttons.module.scss";
import classNames from "classnames";
import React, {Dispatch, SetStateAction} from "react";

type Props = {
    linkButton: string,
    text: string
}

export function ButtonLinkAppBlue({linkButton, text}: Props)
{
    return (
        <Link className={classNames(Style.ButtonDefault, Style.AppBlue)} href={linkButton} >
            <div>
                <h4>{text}</h4>
            </div>
            <div>
                <h4>{text}</h4>
            </div>
        </Link>
    )
}

export function ButtonLinkAppDefault({linkButton, text}: Props)
{
    return (
        <Link className={classNames(Style.ButtonDefault)} href={linkButton} >
            <div>
                <h4>{text}</h4>
            </div>
            <div>
                <h4>{text}</h4>
            </div>
        </Link>
    )
}

type PropsButtonBoolean = {
    setState: () => void,
    text: string
}

export function ButtonBoolean({setState, text}: PropsButtonBoolean)
{
    return (
        <button className={Style.Button} onClick={setState}>
            <div>
                <h4>{text}</h4>
            </div>
            <div>
                <h4>{text}</h4>
            </div>
        </button>
    )
}
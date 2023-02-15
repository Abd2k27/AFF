import React from "react"
import { NextPage } from "next"
import sectionStyle from './Style.module.css'

interface Props {
    style?: React.CSSProperties,
    className?: string,
    children: JSX.Element | JSX.Element[]
}

export const Section: NextPage<Props> = ({children, style = {}, className = ''}) => {
    return (
        <section className={sectionStyle.paddingBlock + " " + className} style={style}>
            {children}
        </section>
    )
}

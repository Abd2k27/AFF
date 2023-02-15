import React from "react"
import { NextPage } from "next"
import style from './Style.module.css'
import { Container } from "react-bootstrap"

export const Header: NextPage<{ title: string, description?: string }> = ({title, description = ''}) => {
    return (
        <header className={style.header}>
            <Container>
                <h2 className={style.title}><hr /> {title}</h2>
                <p className={style.description}>{description}</p>
            </Container>
        </header>
    )
}

import React, { useContext, useEffect, useState } from "react"
import { NextPage } from "next"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import style from './Style.module.css'
import Image from "next/image"
import { imageLoader } from '../../utils/image-loader'
import { getApiUrl, getHref, getUrl } from "../../utils"
import { ButtonStyle } from '../../styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRegistered, faUser } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Head from "next/head"
import { AuthContext } from "../../pages/AuthContext"
import Router, { useRouter } from "next/router"
import { userProps } from "../../props"

export const Menu: NextPage = () => {
    const [hovered, setHovered] = useState({
        presentation: false,
        projets: false,
        partenaires: false,
        ressources: false,
        evennements: false,
        contact: false
    })

    const [authCtx, setAuthCtx] = useContext(AuthContext);
    const [user, setUser] = useState<userProps>();
    const router = useRouter();

    var AuthButtons;

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="shadow-sm bg-white" fixed="top">
                <Container>
                    <Navbar.Brand href="index.html" className="d-flex flex-column justify-content-center">
                        <Image src={getUrl('/logo.png')!} loader={imageLoader} layout="fixed" width={180} height={30} alt="AFRICA FINTECH FORUM" title="AFRICA FINTECH FORUM" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="main-navbar-nav" />

                    <Navbar.Collapse id="main-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown
                                title="Présentation"
                                id="presentation-nav-dropdown"
                                onMouseEnter={() => setHovered({ ...hovered, presentation: true, projets: false, partenaires: false, ressources: false, evennements: false, contact: false })}
                                onMouseLeave={() => setHovered({ ...hovered, presentation: false })}
                                show={hovered.presentation}
                            >
                                {/* <NavDropdown.Item href={getHref('missions')} className={style.menuItem}>Missions</NavDropdown.Item> */}
                                <NavDropdown.Item href={getHref('a-propos')} className={style.menuItem}>A propos</NavDropdown.Item>
                                <NavDropdown.Item href={getHref('missions')} className={style.menuItem}>Missions</NavDropdown.Item>
                                <NavDropdown.Item href={getHref('equipe-dirigeante')} className={style.menuItem}>Equipe</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="Projets"
                                id="projets-nav-dropdown"
                                className="mx-0 mx-lg-3"
                                onMouseEnter={() => setHovered({ ...hovered, projets: true, presentation: false, partenaires: false, ressources: false, evennements: false, contact: false })}
                                onMouseLeave={() => setHovered({ ...hovered, projets: false })}
                                show={hovered.projets}
                            >
                                <NavDropdown.Item href={getHref('projets-realises')} className={style.menuItem}>Réalisés</NavDropdown.Item>
                                <NavDropdown.Item href={getHref('projets-en-cours')} className={style.menuItem}>En cours</NavDropdown.Item>
                                <NavDropdown.Item href={getHref('projets-a-venir')} className={style.menuItem}>A venir</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="Partenaires"
                                id="partenaires-nav-dropdown"
                                onMouseEnter={() => setHovered({ ...hovered, partenaires: true, projets: false, presentation: false, ressources: false, evennements: false, contact: false })}
                                onMouseLeave={() => setHovered({ ...hovered, partenaires: false })}
                                show={hovered.partenaires}
                            >
                                <NavDropdown.Item href={getHref('partenaires-aff')} className={style.menuItem}>Partenaires AFF</NavDropdown.Item>
                                <NavDropdown.Item href={getHref('devenir-partenaire')} className={style.menuItem}>Devenir partenaire</NavDropdown.Item>
                                <NavDropdown.Item href={getHref('devenir-sponsor')} className={style.menuItem}>Devenir sponsor</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="Ressources"
                                id="ressources-nav-dropdown"
                                className="mx-0 mx-lg-3"
                                onMouseEnter={() => setHovered({ ...hovered, ressources: true, projets: false, partenaires: false, presentation: false, evennements: false, contact: false })}
                                onMouseLeave={() => setHovered({ ...hovered, ressources: false })}
                                show={hovered.ressources}
                            >
                                <NavDropdown.Item href={getHref('etudes')} className={style.menuItem}>Etudes</NavDropdown.Item>
                                <NavDropdown.Item href={getHref('bulletin-de-veille')} className={style.menuItem}>Bulletin de veille</NavDropdown.Item>
                                <NavDropdown.Item href={getHref('base-de-donnee')} className={style.menuItem}>Base de données</NavDropdown.Item>
                                <NavDropdown.Item href={getHref('formations')} className={style.menuItem}>Formations</NavDropdown.Item>
                                {/* <NavDropdown.Item href={getHref('formations')} className={style.menuItem}>Formations</NavDropdown.Item> */}
                            </NavDropdown>

                           { <NavDropdown
                                title="Évènements"
                                id="evennements-nav-dropdown"
                                className="mx-0 mx-lg-3"
                                onMouseEnter={() => setHovered({ ...hovered, evennements: true, projets: false, partenaires: false, ressources: false, presentation: false, contact: false })}
                                onMouseLeave={() => setHovered({ ...hovered, evennements: false })}
                                show={hovered.evennements}
                            >
                                <NavDropdown.Item href={getHref('evennements')} className={style.menuItem}>Évènements</NavDropdown.Item>
                                <NavDropdown.Item href={getHref('medias')} className={style.menuItem}>Médias</NavDropdown.Item>
                            </NavDropdown>}

                            <NavDropdown
                                title="Contact"
                                id="contact-nav-dropdown"
                                className="mx-0 mx-lg-3"
                                onMouseEnter={() => setHovered({ ...hovered, contact: true, projets: false, partenaires: false, ressources: false, evennements: false, presentation: false })}
                                onMouseLeave={() => setHovered({ ...hovered, contact: false })}
                                show={hovered.contact}
                            >
                                <NavDropdown.Item href={getHref('nous-contacter')} className={style.menuItem}>Nous contacter</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href={("https://live.eventtia.com/fr/nextfintechforum")} className={"btn " + ButtonStyle.primary}>
                            <span className="ms-2">S'enregistrer pour Nextfintechforum 2022</span>
                            </Nav.Link>

                            {AuthButtons}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

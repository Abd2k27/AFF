import { NextPage } from "next"
import React, { useState, useEffect } from "react"
import { Footer, Head, Header, Menu, Section } from '../components'
import { Container, Row, Col, Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faClock, faLocationDot, faAngleRight, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { getHref, getApiUrl, getApiImageUrl, getUrl } from "../utils"
import { ButtonStyle, CardStyle } from "../styles"
import { postProps } from "../props"

const Events: NextPage = () => {
    const youtubeCards = [
        {
            id: 1,
            title: 'Resumé de la conference de presse AFF',
            link: 'https://www.youtube.com/embed/tCc9gudE7HM'
        },

        {
            id: 2,
            title: 'Abidjan Fintech Tour Keynote Rita OULAI Impact Réel de la Fintech en Côte dIvoire',
            link: 'https://www.youtube.com/embed/3hhcL0FAf-8'
        },

        {
            id: 3,
            title: 'Africa Fintech Forum',
            link: 'https://www.youtube.com/embed/Vw7cFFmpbJc'
        }
    ]

    return (
        <>
            <Head title='Médias | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="Nos Médias"
                description="AFRICA FINTECH FORUM vous permet de suivre ses actions à travers ses canaux médiatiques."
            />

            <main>
                <Section>
                    <Container>
                        <h1 className="sectionTitle">Nos medias <hr /></h1>

                        <Row xs={1} md={2} lg={3} className="g-5">
                            {youtubeCards.map(youtube => {
                                return (
                                    <Col key={youtube.id}>
                                        <Card className={CardStyle.media + " shadow"}>
                                            <iframe height="2000" src={youtube.link}></iframe>

                                            <Card.Body className="mb-3">
                                                <Card.Title className="fw-bold text-uppercase fs-6">{youtube.title}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                            }
                        </Row>
                    </Container>
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default Events

import { NextPage } from 'next'
import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap"
import { Footer, Head, Header, Menu, Section } from '../components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { getHref, getUrl } from "../utils"
import { ButtonStyle, CardStyle } from '../styles'

const Partners: NextPage = () => {
    const eventsCards = [
        {
            id: 1,
            title: 'Magadascar Fintech Forum 2022',
            image: getUrl('/a-la-une/2.jpeg'),
            location: 'Madagascar, Université d\'Antananarivo',
            time: '09:30',
            description: '',
        },

        {
            id: 2,
            title: 'Africa Fintech Forum',
            image: getUrl('/a-la-une/3.jpg'),
            location: 'Webinar',
            description: '',
            time: '09:30',
        },

        {
            id: 3,
            title: 'Smart Conference',
            image: getUrl('/a-la-une/4.jpg'),
            location: 'Ethiopie, Addis-Abeba',
            description: '',
            time: '09:30',
        }
    ]

    return (
        <>
            <Head title='Formations | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="Formations" description="Fintech Academy délivre des ateliers et des formation certifiantes pour améliorer les compétences des acteurs de l'industrie" />

            <main>
                <Section>
                    <Container>
                        <br></br>

                        <h1 className="sectionTitle"> NOS ATELIERS / NOS CERTIFICATS <hr /></h1>

                        {eventsCards.map((event, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <div key={event.id}>
                                        <Row xs={1} className="g-3">
                                            <Col>
                                                <Card className={CardStyle.horizontal + " shadow"} style={{ height: '350px' }}>
                                                    <Row>
                                                        <Col className="pe-0">
                                                            <Card.Img src={event.image} style={{ height: '350px' }} />
                                                        </Col>
                                                        
                                                        <Col className="ps-0">
                                                            <Card.Body className="h-100 d-flex flex-column justify-content-between">
                                                                <div>
                                                                    <Card.Title className="fw-bold text-uppercase">{event.title}</Card.Title>
                                                                    <Card.Text>{event.description}</Card.Text>
                                                                </div>

                                                                <div>
                                                                    <Link href={getHref("#")}>
                                                                        <a className={"btn " + ButtonStyle.secondary}>Lien PDF</a>
                                                                    </Link>

                                                                    <Link href={getHref("#")}>
                                                                        <a className={"btn mx-3 " + ButtonStyle.secondary}>Tutoriel</a>
                                                                    </Link>

                                                                    <Link href={getHref("#")}>
                                                                        <a className={"btn mx-1 " + ButtonStyle.primary}>
                                                                            <span className="me-3">Accéder aux cours</span>
                                                                            <FontAwesomeIcon icon={faAngleRight} />
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Col>
                                        </Row>
    
                                        <hr className="my-5" />
                                    </div>
                                )
                            }

                            return (
                                <div key={event.id}>
                                    <Row xs={1} className="g-3">
                                        <Col>
                                            <Card className={CardStyle.horizontal + " shadow"} style={{ height: '350px' }}>
                                                <Row>
                                                    <Col className="ps-1">
                                                        <Card.Body className="ms-2 h-100 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <Card.Title className="fw-bold text-uppercase">{event.title}</Card.Title>
                                                                <Card.Text>{event.description}</Card.Text>
                                                            </div>

                                                            <div>
                                                                <Link href={getHref("#")}>
                                                                    <a className={"btn " + ButtonStyle.secondary}>Lien PDF</a>
                                                                </Link>

                                                                <Link href={getHref("#")}>
                                                                    <a className={"btn mx-3 " + ButtonStyle.secondary}>Tutoriel</a>
                                                                </Link>

                                                                <Link href={getHref("#")}>
                                                                    <a className={"btn mx-1 " + ButtonStyle.primary}>
                                                                        <span className="me-3">Accéder aux cours</span>
                                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </Card.Body>
                                                    </Col>

                                                    <Col className="pe-0">
                                                        <Card.Img src={event.image} style={{ height: '350px' }} />
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    </Row>

                                    <hr className="my-5" />
                                </div>
                            )
                        })}
                    </Container>
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default Partners

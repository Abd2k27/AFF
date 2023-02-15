import { NextPage } from 'next'
import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap"
import { Footer, Head, Header, Menu, Section } from '../components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { getHref, getUrl } from "../utils"
import { ButtonStyle, CardStyle } from '../styles'

const Partners: NextPage = () => {
    const eventsCards = [
        {
            id: 1,
            title: '...',
            image: getUrl('/a-la-une/Bulletin_Veille.jpg'),
            description: "...",
        }
    ]
    
    return (
        <>
            <Head title='Base de données | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="Base de données" description="Nous collectons régulièrement des données sur les marchés fintechs , sur les entreprises et les individus qui font la fintech africaine." />

            <main>
                <Section>
                    {/* <Container>

                        <h1 className="sectionTitle"> BASE DE DONNÉES <hr /></h1>

                        {eventsCards.map(event => {
                            return (<div key={event.id}>
                                <Row xs={1} md={3} className="g-3" key={event.id}>
                                    <Col>
                                        <Card className="h-100 rounded-0">
                                            <Card.Img variant="top" src={event.image} className="rounded-0" height={250} />
                                        </Card>
                                    </Col>

                                    <Col>
                                        <Card className="rounded-0 border-0 h-100" style={{ background: 'transparent' }}>
                                            <Card.Body>
                                                <Card.Title className="fw-bold text-uppercase">{event.title}</Card.Title>
                                                <Card.Text>{event.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className="d-flex flex-column justify-content-center">
                                        <Link href={getHref('#')}>
                                                <span className="ms-2">
                                                    <Link href="./pdf/FINTECH INDUSTRY MONITOR.pdf">
                                                        <a className={"btn " + ButtonStyle.secondary} download>Accédez à l'article</a>
                                                    </Link>
                                                </span>
                                        </Link>
                                    </Col>
                                </Row>

                                <hr className="my-5" />
                            </div>)
                        })}
                    </Container> */}
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default Partners

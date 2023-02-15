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
            title: 'Etude sur les startups africaines et leurs ecosystemes',
            image: getUrl('/a-la-une/Cartographie.png'),
            description: "Fintech, Résumé exécutif et objectif de l’étude, Vue globale des Fintech en Afrique Francophone africaines, Maturité des écosystèmes africains... Découvrez les différentes axes de l'etude",
        },

    ]
    
    return (
        <>
            <Head title='Etudes | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="Etudes" description="Découvrez toutes nos études réalisées sur l'écosystème Fintech Africain"/>

            <main>
                <Section>
                    <Container>

                        <h1 className="sectionTitle">NOS ÉTUDES <hr /></h1>

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
                                                    <Link href="./pdf/Etude sur les startups africaines et leurs ecosystemes-Version  Finale.pdf">
                                                        <a className={"btn " + ButtonStyle.secondary} download>Accédez au document</a>
                                                    </Link>
                                                </span>
                                        </Link>
                                    </Col>

                                </Row>

                                <hr className="my-5" />
                            </div>)
                        })}
                    </Container>
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default Partners

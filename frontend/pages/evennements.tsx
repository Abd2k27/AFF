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
    const eventsCard = [
        {
            id: 1,
            title: 'NEXT FINTECH FORUM',
             description: '',
            image: getUrl('/a-la-une/event1.png'),
        },

        {
            id: 2,
            title: 'FINTECH TRIP',
             description: '',
            image: getUrl('/a-la-une/event2.png'),
        },

        {
            id: 3,
            title: 'INSURTECH CONNECT',
             description: '',
            image: getUrl('/a-la-une/event3.png'),
        },
        {
            id: 4,
            title: 'AFRICA CAPITAL MARKET SUMMIT ',
             description: '',
            image: getUrl('/a-la-une/event4.png'),
        },

        {
            id: 5,
            title: 'OPEN FINANCE CONFERENCE',
             description: '',
            image: getUrl('/a-la-une/event5.png'),
        },
        {
            id: 6,
            title: 'AFRICA FINTECH TOUR',
             description: '',
            image: getUrl('/a-la-une/event6.png'),
        },
        {
            id: 7,
            title: 'AFRICA BLOCKCHAIN & CRYPTO EXPO',
             description: '',
            image: getUrl('/a-la-une/event7.png'),
        },
    ]

    const [events, setEvents] = useState<{
        data: Array<postProps>,
        next_page_url: '' | null
    }>({
        data: [],
        next_page_url: null
    })

    return (
        <>
            <Head title='Évènements à venir | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="Nos Évènements"
                description="AFRICA FINTECH FORUM vous propose tout au long de l’année des forums, des conférences et des ateliers. Il accompagne les leaders économiques de l’Afrique en leur apportant témoignages et analyses d’experts sur les grands enjeux et défis du marché."
            />

            <main>
                <Section>
                    <Container >
                        <h1 className="sectionTitle"> NOS EVENEMENTS <hr /> </h1>

                        <Row xs={1} md={2} lg={3} className="g-5">
                            {eventsCard.map(news => {
                                return (
                                    <Col key={news.id}>
                                        <Card className={CardStyle.main}>
                                            <Card.Img variant="top" src={news.image} height={250} />
                                            
                                            <Card.Body className="mb-3">
                                                <Card.Title className="fw-bold text-uppercase">
                                                    <small>{news.title}</small>
                                                </Card.Title>

                                                <Card.Text>
                                                    <small>{news.description}</small>
                                                </Card.Text>
                                            </Card.Body>
            
                                            <Link href={getHref("https://nextfintechforum.com/")}>
                                                <a className="stretched-link"></a>
                                            </Link>
                                        </Card>
                                    </Col>
                                )})
                            }
                        </Row>
                    </Container>
                </Section>
                <br></br><br></br>
                {/* <Section>
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
                </Section> */}
            </main>

            <Footer />
        </>
    )
}

export default Events

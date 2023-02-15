import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col, Carousel } from 'react-bootstrap'
import { Footer, Menu, Head, Header, Section } from '../../components'
import style from './Style.module.css'
import { faAngleRight, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { imageLoader, getUrl, getHref, getApiUrl, getApiImageUrl } from '../../utils'
import Image from 'next/image'
import { ButtonStyle, CardStyle } from '../../styles'
import Link from 'next/link'
import { projectProps } from '../../props'

const Projects: NextPage = () => {
    const projectCard = [
        {
            id: 1,
            image: getUrl('/projet-en-cours/africa fintech chair.png'),
            title: 'Chaire Fintech',
            content: "Chaire de recherche et de formation regroupant des enseignants-chercheurs du Maroc, de la Tunisie, du Sénégal, du Cameroun, de la Côte d’Ivoire."
        },

        {
            id: 2,
            image: getUrl('/projet-en-cours/fintech village.png'),
            title: 'Fintech village',
            content: "Hub continental dédié aux Fintechs, un pool de collaboration, d'incubation et d'accélération de technologies innovantes et inclusives."
        },

        {
            id: 3,
            image: getUrl('/projet-en-cours/open banking africa.png'),
            title: 'Club Fintech',
            content: "Clubs d’étudiants dans les business schools et les écoles d’ingénieurs en Afrique pour développer les compétences et susciter des vocations."
        },

        {
            id: 4,
            image: getUrl('/projet-en-cours/network.png'),
            title: 'Alliance for Smart Village',
            content: "Réseau d’acteurs engagés dans l’inclusion économique et sociale en zone rurale par le développement d'un écosystème numérique."
        },

        {
            id: 5,
            image: getUrl('/projet-en-cours/profit.png'),
            title: 'Africa Finance Innovation Venture',
            content: "Fonds d'amorçage de 10 millions US pour soutenir les fintechs à fort impact en phase de pré-amorçage et d'amorçage."
        },

        {
            id: 6,
            image: getUrl('/projet-en-cours/reviews.png'),
            title: 'Fintech Industry Monitor',
            content: "Fournisseur d’intelligence sur l’industrie : actualités financières et l'analyse des marchés, sous forme de Hot alert, newsletters, rapport, magazines, bases de données."
        },
        {
            id: 7,
            image: getUrl('/pole-accueil/Open Africa.png'),
            title: 'Open Banking Africa',
            content: ""
        },
    ]

    const [page, setPage] = useState(1)

    const [projects, setProjects] = useState<{
        data: Array<projectProps>,
        next_page_url: '' | null
    }>({
        data: [],
        next_page_url: null
    })

    return (
        <>
            <Head title='Projets en cours | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="projets en cours" 
            description='Nos projets en cours de réalisation pour un écosystème fintech africain plus inclusif et dynamique.' />

            <main>
                {/* <Section>
                    <Container className="text-center">
                        <div className={style.ceoSection}>
                            <h2>Lorem ipsum <hr /></h2>
                            <h1>Lorem ipsum dolor sit amet</h1>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nobis accusamus, laborum neque doloribus voluptatem consectetur inventore incidunt ducimus soluta natus. Reiciendis ullam iure voluptatem minus numquam temporibus quibusdam optio.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nobis accusamus, laborum neque doloribus voluptatem consectetur inventore incidunt ducimus soluta natus. Reiciendis ullam iure voluptatem minus numquam temporibus quibusdam optio.
                            </p>
                        </div>
                    </Container>
                </Section> */}

                <Section>
                    <Container>
                        <br /><br />

                        <h1 className="sectionTitle">NOS PROJECTS EN COURS<hr /></h1>

                        <Row xs={1} md={2} lg={2} className="g-5">
                            {projectCard.map(mission => {
                                return (
                                    <Col key={mission.id}>
                                        <Card className={CardStyle.transparent + " text-center"}>
                                            <Card.Body>
                                                {/* <FontAwesomeIcon icon={mission.image} size="3x" className="mb-3" style={{ color: 'var(--primary-color)' }} /> */}
                                                
                                                {/* <img src={mission.image} className={CardStyle.image} layout="fixed" width={150} height={150} alt="AFRICA FINTECH FORUM" loader={imageLoader} /> */}
                                              
                                                <Image src={mission.image!} className={CardStyle.image} layout="fixed" width={100} height={100} alt="AFRICA FINTECH FORUM" loader={imageLoader} />

                                                <Card.Title style={{ color: 'var(--primary-color)' }}>
                                                    {mission.title}
                                                    
                                                    <hr style={{
                                                        width: '2em',
                                                        height: '5px',
                                                        margin: '0 auto',
                                                        marginBlock: '1em',
                                                        opacity: 1,
                                                    }} />
                                                </Card.Title>
                                                <Card.Text>{mission.content}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default Projects

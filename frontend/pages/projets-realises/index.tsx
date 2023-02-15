import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col, Carousel } from 'react-bootstrap'
import { Footer, Menu, Head, Header, Section } from '../../components'
import style from './Style.module.css'
import { imageLoader, getUrl, getApiImageUrl } from '../../utils'
import Image from 'next/image'
import { projectProps } from '../../props'
import { getApiUrl } from '../../utils'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { ButtonStyle, CardStyle } from '../../styles'

const ProjectsDone: NextPage = () => {
    const ProjectCard = [
        {
            id: 1,
            image: getUrl('/projet-réalisés/Association.png') ,
            title: '10 Associations Fintech',
            content: "Initiées ou soutenues : Côte d'Ivoire, Bénin, Togo, Maroc, Niger, RD Congo, Tunisie, Madagascar, Sénégal, Burkina Faso."
        },

        {
            id: 2,
            image: getUrl('/projet-réalisés/afrique.png'),
            title: 'Africa Fintech Tour',
            content: "30 mini forums organisés depuis 2017 en Afrique centrale, du nord, de l’est et de l’ouest pour relier les écosystèmes fintech, créer des synergies et rassembler les acteurs."
        },

        {
            id: 3,
            image: getUrl('/pole-accueil/NFF-Logo.png'),
            title: 'Next Fintech Forum',
            content: "Forum annuel réunissant depuis plus de 600 acteurs du secteur de la fintech de tous les continents."
        },

        {
            id: 4,
            image: getUrl('/projet-réalisés/collaboration.png'),
            title: 'Initiation de la collaboration avec les institutions monétaires et financières',
            content: "Banques centrales, institutions financières de développement, centres financiers internationaux."
        },

        {
            id: 5,
            image: getUrl('/projet-réalisés/meeting.png'),
            title: 'Participation à des ateliers et groupes de travail',
            content: "Sur la stratégie nationale d'inclusion financière, la réglementation relative aux fintechs et à la finance numérique."
        },

        {
            id: 6,
            image: getUrl('/projet-réalisés/market.png'),
            title: 'AFRICAM [Africa Capital Market]',
            content: "Concours sur le trading FOREX dans une salle de marché virtuelle rassemblant 30 trésoriers venant de 20 groupes bancaires."
        },

        {
            id: 7,
            image: getUrl('/projet-en-cours/fintech industry mapping.png') ,
            title: 'Fintech Industry Mapping',
            content: "Cartographie des écosystèmes Fintech et identification des acteurs de 20 pays d’Afrique francophone (centre, nord, ouest)."
        },

        {
            id: 8,
            image: getUrl('/projet-en-cours/africa fintech day.png'),
            title: 'Africa Fintech Day',
            content: "Journée promotionnelle et pédagogique sur la Fintech avec étudiants des pays africains : Maroc, Tunisie, Sénégal, Cameroun et de la République Démocratique du Congo."
        }
    ]
    const [page, setPage] = useState(1)

    const [projects, setProjects] = useState<{
        data: Array<projectProps>,
        next_page_url: '' | null
    }>({
        data: [],
        next_page_url: null
    })

    const getProjects = () => {
        setPage(page => page + 1)

        /*fetch(getApiUrl(`/api/projects?status=0&page=${page}&limit=3`))
            .then(res => res.json())
            .then(data => setProjects({
                ...projects,
                data: [...projects.data, ...data.data],
                next_page_url: data.next_page_url
            }))*/
    }

    return (
        <>
            <Head title='Projets réalisés | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="projets réalisés"
                description='Nous posons avec toutes les parties prenantes les briques de l’industrie fintech africaine.' />

            <main>
                <Section>
                    <Container className="text-center">
                        <div className={style.ceoSection}>
                            <br /><br />
                            <h2>NOTRE AMBITION <hr /></h2>
                            <h1 style={{ fontSize:'23px' }}>Faire de la Finance Digitale un catalyseur pour l’inclusion financière en Afrique.</h1>
                        </div>
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <h1 className="sectionTitle"> NOS RÉALISATIONS <hr /></h1>

                        <Row xs={1} md={2} lg={2} className="g-5">
                            {ProjectCard.map(mission => {
                                return (
                                    <Col key={mission.id}>
                                        <Card className={CardStyle.transparent + " text-center"}>
                                            <Card.Body>
                                                {/* <FontAwesomeIcon icon={mission.image} size="3x" className="mb-3" style={{ color: 'var(--primary-color)' }} /> */}
                                                
                                                {/* <img src={mission.image} className={CardStyle.image} layout="fixed" width={150} height={150} alt="AFRICA FINTECH FORUM" loader={imageLoader} /> */}
                                              
                                                <Image src={mission.image!} className={CardStyle.image} layout="fixed" width={70} height={70} alt="AFRICA FINTECH FORUM" loader={imageLoader} />

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

export default ProjectsDone

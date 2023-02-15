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

const IncomingProjects: NextPage = () => {
    const projectCard = [
        {
            id: 1,
            image: getUrl('/projet-a-venir/data-processing.png'),
            title: 'Data Management',
            content: "Bases de données d'acteurs. Série de webinaires de Market Intelligence."
        },

        {
            id: 2,
            image: getUrl('/projet-a-venir/diploma.png'),
            title: 'Fintech Academy',
            content: "Programme de certification pour les acteurs, programmes internes pour les entreprises et les organisations. Série de webinaires sous forme de séances d'apprentissage et de découverte."
        },
        {
            id: 3,
            image: getUrl('/pole-accueil/club.png'),
            title: 'Club Innovate Africa',
            content: "Club de réseautage et de promotion des champions de l’innovation en Afrique."
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

    return (
        <>
            <Head title='Projets à venir | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="Projets à venir" description="Nos projets à venir pour un écosystème fintech africain plus vaste" />

            <main>
                <Section>
                    <Container>
                        <br /><br />
                        <h1 className="sectionTitle">NOS PROJECTS A VENIR<hr /></h1>

                        <Row xs={1} md={2} lg={3} className="g-5">
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

                {/*<Section>
                    <h1 className="sectionTitle">NOS PROJECTS A VENIR <hr /></h1>

                    <Row xs={1} className="g-5" style={{ paddingInline: '8em' }}>
                        {projects.data.map((project, index) => {
                                if (index % 2 == 0) {
                                    return (
                                        <Col key={project.id}>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <Carousel className="projectCarousel" style={{ width: '45%' }} interval={5000}>
                                                    {project.image_projets.map(image => {
                                                        return (
                                                            <Carousel.Item key={image.id}>
                                                                <div className="rounded-0" style={{ height: '500px' }}>
                                                                    <Image src={getApiImageUrl(`/projet/${image.image}`)} alt={"Slide " + (index + 1)} layout="fill" loader={imageLoader} />
                                                                </div>
                                                            </Carousel.Item>
                                                        )
                                                    })}
                                                </Carousel>

                                                <Card className={"shadow rounded-0 text-white p-2 " + style.background} style={{ width: '55%', height: '600px' }}>
                                                    <Card.Body className="d-flex flex-column justify-content-between">
                                                        <div>
                                                            <Card.Title className={style.projectTitle}>{project.name} <hr /></Card.Title>
                                                            <Card.Text>{project.description}</Card.Text>
                                                            <Card.Text>{project.objectifs}</Card.Text>
                                                        </div>
                                                        
                                                        <Row style={{ paddingInline: '6em' }}>
                                                            {project.partenaires.map(partner => {
                                                                return (
                                                                    <Col key={partner.id}>
                                                                        <Card className="border-0 rounded-0">
                                                                            <Card.Img variant="top" src={getApiImageUrl(`/partenaire/${partner.image}`)} height={60} className="rounded-0" />
                                                                        </Card>
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>

                                                        {/* <div className="mt-4">
                                                            <Link href={getHref("#")}>
                                                                <a className={"btn " + ButtonStyle.primary}>
                                                                    <span className="me-3">Appel à soutenir le projet</span>
                                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                                </a>
                                                            </Link>
                                                        </div> 
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Col>
                                    )
                                }

                                return (
                                    <Col key={project.id}>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Card className={"shadow rounded-0 text-white p-2 " + style.background} style={{ width: '55%', height: '600px' }}>
                                                <Card.Body className="d-flex flex-column justify-content-between">
                                                    <div>
                                                        <Card.Title className={style.projectTitle}>{project.name} <hr /></Card.Title>
                                                        <Card.Text>{project.description}</Card.Text>
                                                        <Card.Text>{project.objectifs}</Card.Text>
                                                    </div>
                                                    
                                                    <Row style={{ paddingInline: '6em' }}>
                                                        {project.partenaires.map(partner => {
                                                            return (
                                                                <Col key={partner.id}>
                                                                    <Card className="border-0 rounded-0">
                                                                        <Card.Img variant="top" src={getApiImageUrl(`/partenaire/${partner.image}`)} height={60} className="rounded-0" />
                                                                    </Card>
                                                                </Col>
                                                            )
                                                        })}
                                                    </Row>

                                                    {/* <div className="mt-4">
                                                            <Link href={getHref("#")}>
                                                                <a className={"btn " + ButtonStyle.primary}>
                                                                    <span className="me-3">Appel à soutenir le projet</span>
                                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                                </a>
                                                            </Link>
                                                        </div> 
                                                </Card.Body>
                                            </Card>

                                            <Carousel className="projectCarousel" style={{ width: '45%' }} interval={5000}>
                                                {project.image_projets.map(image => {
                                                    return (
                                                        <Carousel.Item key={image.id}>
                                                            <div className="rounded-0" style={{ height: '500px' }}>
                                                                <Image src={getApiImageUrl(`/projet/${image.image}`)} alt={"Slide " + (index + 1)} layout="fill" loader={imageLoader} />
                                                            </div>
                                                        </Carousel.Item>
                                                    )
                                                })}
                                            </Carousel>
                                        </div>
                                    </Col>
                                )
                        })}
                    </Row>

                    <div>
                        {projects.next_page_url != null && <div className="py-5 d-flex">
                            <button className={"btn " + ButtonStyle.circle} onClick={() => getProjects()} title="Afficher plus">
                                <FontAwesomeIcon icon={faArrowDown} />
                            </button>
                        </div>}
                    </div>
                </Section>*/}
            </main>

            <Footer />
        </>
    )
}

export default IncomingProjects

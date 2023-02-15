import { NextPage } from 'next'
import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Footer, Menu, Head, Header, Section } from '../../components'
import style from './Style.module.css'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from 'next/image'
import { getUrl, imageLoader, getHref } from '../../utils'
import Link from 'next/link'
import { ButtonStyle, CardStyle } from '../../styles'

const Goals: NextPage = () => {
    const valuesCard = [
        {
            id: 1,
            title: 'Plaider',
            content: "Pour la finance numérique auprès des décideurs politiques et des acteurs publiques et privés, afin de positionner la Fintech comme un catalyseur pour le développement de l’Afrique."
        },

        {
            id: 2,
            title: 'Développer',
            content: "Une éducation adéquate pour adapter les compétences techniques et de gestion à l'innovation financière pour tous les organisations."
        },

        {
            id: 3,
            title: 'Stimuler ',
            content: "Les opportunités d'affaires entre les acteurs et construire des ponts de partenariat entre les acteurs de l'écosystème africain, et aussi international."
        },

        {
            id: 4,
            title: 'Fournir ',
            content: "Et diffuser des clés pour comprendre l'industrie fintech et la développer ; à travers des études et des recherches."
        },

        {
            id: 5,
            title: 'Construire',
            content: "Pour l'Afrique un écosystème fintech basé sur l'ouverture et le renforcement d'un réseau local rassemblant tous les acteurs de l'industrie."
        },

        {
            id: 6,
            title: 'Soutenir',
            content: "Des centres d'innovation en Afrique pour tester et accélérer des technologies financières innovantes et percutantes pour l'Afrique."
        },
    ]

    return (
        <>
            <Head title='MISSIONS | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="MISSIONS"
                description="Africa Fintech Forum est une organisation à but non lucratif, visant à soutenir le développement et la croissance de l’industrie Fintech en Afrique et particulièrement en Afrique francophone. " />

            <main>
                <Section>
                    <Container>
                        <Row md={1}>
                            <Col className={style.ceoSection}>
                                <br /><br />
                                <h2>Des opportunités à saisir <hr /></h2>
                                <h1>Construire ensemble l’infrastructure de la finance inclusive</h1>

                                <p style={{ textAlign:'justify' }}></p>
                            </Col>

                        </Row>

                        <Row xs={1} md={2} lg={3} className="g-5 mt-5">
                            {valuesCard.map(value => {
                                return (
                                    <Col key={value.id}>
                                        <Card className={CardStyle.transparent}>
                                            <Card.Body>
                                                <Card.Title className="fw-bold text-uppercase fs-6" style={{ color: 'var(--primary-color)' }}>{value.title}</Card.Title>
                                                <Card.Text >{value.content}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </Section>

                <Section className={style.block}>
                    <Container>
                        <h1 className="sectionTitle mb-0">ENTREPRISES, DÉCOUVREZ COMMENT COLLABORER <br /> AVEC AFRICA FINTECH FORUM</h1>

                        <div className="mt-5 d-flex justify-content-center">
                            <Link href={getHref("devenir-partenaire")}>
                                <a className={"btn " + ButtonStyle.primary}>
                                    <span className="me-3">Devenir partenaire</span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </a>
                            </Link>
                        </div>
                    </Container>
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default Goals

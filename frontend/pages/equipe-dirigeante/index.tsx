import { NextPage } from 'next'
import React from 'react'
import style from './Style.module.css'
import { Head, Header, Section, Menu, Footer } from '../../components'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Image from 'next/image'
import { getUrl, imageLoader } from "../../utils"
import { CardStyle } from '../../styles'

const Team: NextPage = () => {

    const ceo = [
        {
            id: 1,
            image: getUrl('/board/ALEX SEA.jpg'),
            name: 'Alex Sea',
            job: 'Chief Executive Officer',
        },
    ]

    const advisoryBoard = [
        {
            id: 1,
            image: getUrl('/board/Andrew Davis.jpg'),
            name: 'Andrew Davis',
            job: 'Executive Director',
            org: "The Fintech Institute"
        },
        {
            id: 2,
            image: getUrl('/board/Michael salmony.jpg'),
            name: 'Michael Salmony',
            job: 'Executive Adviser',
            org: "equensWorldline SE Germany"
        },
        {
            id: 3,
            image: getUrl('/board/Matteo Rizzi.jpg'),
            name: 'Matteo Rizz',
            job: 'Venture Partner |  Bamboo Capital Partners'
        },
        {
            id: 4,
            image: getUrl('/board/Yves komaclo.jpg'),
            name: 'Yves Komaclo',
            job: "Investment Manager",
            org: "Oikocredit"
        },
    ]

    const executiveBoard = [
        {
            id: 1,
            image: getUrl('/board/Estelle brack.jpg'),
            name: 'Estelle Brack',
            job: 'Founder and CEO',
            org: 'KiraliT'
        },

        {
            id: 2,
            image: getUrl('/board/Sidi-Mohamed Dhaker.jpg'),
            name: 'Sidi-Mohamed Dhaker',
            job: "Conseiller du Gouverneur",
            org: 'Banque Centrale de Mauritanie'
        },

        {
            id: 3,
            image: getUrl('/board/Jaures Tcheou.jpg'),
            name: 'Jaures Tcheou',
            job: 'CEO',
            org: "Capitaux Reunis & AfreeMonex"
        },

        {
            id: 4,
            image: getUrl('/board/Babacar Diallo.jpg'),
            name: 'Babacar Diallo',
            job: 'Consultant Inclusion Specialist Financial',
            org: "West Africa region"
        },

        {
            id: 5,
            image: getUrl('/board/DRAMANE MEITE.jpg'),
            name: 'Dramane Meite',
            job: "Professionnel de l'investissement et des services financiers",
        },
        {
            id: 6,
            image: getUrl('/board/Youssef.jpg'),
            name: 'Youssef Koun',
            job: 'Venture Builder',
            org: "Digital 54ND"
        },
    ]

    const nonexecutiveBoard = [
        {
            id: 1,
            image: getUrl('/board/Roseline Emma Rasolovoahangy.jpg'),
            name: 'Roseline Emma Rasolovoahangy',
            job: 'President',
            org: "Petromad Inc"
        },

        {
            id: 2,
            image: getUrl('/board/MARIEME NDIAYE.jpg'),
            name: 'Marieme Ndiaye',
            job: "Senior Expert",
            org: "Payment and Fintech"
        },

        {
            id: 3,
            image: getUrl('/board/Hafou.jpg'),
            name: 'Hafou Toure',
            job: 'Founder',
            org: "HTS Partners"
        },

        {
            id: 4,
            image: getUrl('/board/Jo.jpg'),
            name: 'Josué Toho',
            job: 'Specialist',
            org: "Inclusive Finance & Fintech"
        },

        {
            id: 5,
            image: getUrl('/board/Abdelkader yousfi.jpg'),
            name: 'Abdelkader Yousfi',
            job: 'Founder and CEO',
            org: 'Sprinthub'
        },

        {
            id: 6,
            image: getUrl('/board/Yassine Regragui.jpg'),
            name: 'Yassine Regragui',
            job: "Fintech & China Expert",
            org: "Ex-Deloitte, Alipay, Alibaba"
        },

        {
            id: 7,
            image: getUrl('/board/Sory TOURE.jpg'),
            name: 'Sory Toure',
            job: 'CEO',
            org: 'DEXTERITY AFRICA'
        },

        {
            id: 8,
            image: getUrl('/board/Karine Mazand-Mboumba Tchitoula.jpg'),
            name: 'Karine Mazand-Mboumba Tchitoula',
            job: 'Avocat-Legal designer',
            org: "MMT Avocats"
        },

        {
            id: 9,
            image: getUrl('/board/Devinder Singh.jpg'),
            name: 'Devinder Singh',
            job: 'Head of Mobile Money CU MTN West',
            org: "ERICSSON"
        },
    ]
    

    return (
        <>
            <Head title='Equipe | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="Equipe"
                description="L’équipe de AFF est multinationale, pluridisciplinaire, pour répondre aux besoins des acteurs de l'industrie au niveau local comme international." />

            <main>
                {/* <Section>
                    <Container>
                        <Row md={2}>
                            <Col className={style.block}>
                                <br /><br />
                                <h1>Alex SEA, Fondateur et Chief Executive Officer</h1>
                                <p>
                                </p>
                            </Col>
                            <Col>
                                <Image src={getUrl('/board/1.png')!} loader={imageLoader} layout="fixed" alt="Photo Alex SEA" width={350} height={400} />
                            </Col>
                        </Row>
                    </Container>
                </Section> */}

                

                {/*<Section>
                    <Container>
                        <h1 className="sectionTitle">Découvrez l&apos;équipe <hr /></h1>

                        <Row xs={1} md={2} lg={4} className="g-5 d-flex justify-content-center">
                            {leadersCards.map(leader => {
                                return (
                                    <Col key={leader.id}>
                                        <Card className={CardStyle.people + " mx-0 shadow h-100"}>
                                            <Card.Img variant="top" src={leader.image} height={200} width={200} />

                                            <div style={{ marginTop: '1em' }}>
                                                <div className="text-center">
                                                    <p className="mb-0 fs-5 fw-bold" style={{ color: 'var(--primary-color)' }}>{leader.name}</p>
                                                    <p className="fs-6">{leader.job}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </Section> */}
                <Section>
                    <div  className="container">
                    <h1 className="sectionTitle">Notre board <hr /></h1>

                    <div className="container">
                        <Row xs={1} md={2} lg={4} className="g-5 d-flex justify-content-center">
                            {ceo.map(leader => {
                                return (
                                    <Col key={leader.id}>
                                        <Card className={CardStyle.people + " mx-0 shadow h-100"}>
                                            <Card.Img variant="top" src={leader.image} height={230} width={80} />

                                            <div style={{ marginTop: '1em' }}>
                                                <div className="text-center">
                                                    <p className="mb-0 fs-5 fw-bold" style={{ color: 'var(--primary-color)' }}>{leader.name}</p>
                                                    <p className="fs-6">{leader.job}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                    
                    <br></br><br></br>

                    <h1 className="sectitle">Advisory board<hr /></h1>

                    <div  className="container">
                    
                        <Row xs={1} md={2} lg={4} className="g-5 d-flex justify-content-center">
                            {advisoryBoard.map(leader => {
                                return (
                                    <Col key={leader.id}>
                                        <Card className={CardStyle.people + " mx-0 shadow h-100"}>
                                            <Card.Img variant="top" src={leader.image} height={230} width={80} />

                                            <div style={{ marginTop: '1em' }}>
                                                <div className="text-center">
                                                    <p className="mb-0 fs-5 fw-bold" style={{ color: 'var(--primary-color)' }}>{leader.name}</p>
                                                    <p className="fs-6">{leader.job}<br/>{leader.org}</p>
                                                    {/* <p className="fs-6">{leader.org}</p> */}
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                    
                    <br></br><br></br><br></br>

                    <h1 className="sectitle">Executive board<hr /></h1>

                    <div  className="container">
                        <Row xs={1} md={2} lg={4} className="g-5 d-flex justify-content-center">
                            {executiveBoard.map(leader => {
                                return (
                                    <Col key={leader.id}>
                                        <Card className={CardStyle.people + " mx-0 shadow h-100"}>
                                            <Card.Img variant="top" src={leader.image} height={230} width={80} />

                                            <div style={{ marginTop: '1em' }}>
                                                <div className="text-center">
                                                    <p className="mb-0 fs-5 fw-bold" style={{ color: 'var(--primary-color)' }}>{leader.name}</p>
                                                    <p className="fs-6">{leader.job}<br/>{leader.org}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>

                    <br></br><br></br><br></br>

                    <h1 className="sectitle">NON EXECUTIVE BOARD<hr /></h1>

                    <div  className="container">
                        <Row xs={1} md={2} lg={4} className="g-5 d-flex justify-content-center">
                            {nonexecutiveBoard.map(leader => {
                                return (
                                    <Col key={leader.id}>
                                        <Card className={CardStyle.people + " mx-0 shadow h-100"}>
                                            <Card.Img variant="top" src={leader.image} height={230} width={80} />

                                            <div style={{ marginTop: '1em' }}>
                                                <div className="text-center">
                                                    <p className="mb-0 fs-5 fw-bold" style={{ color: 'var(--primary-color)' }}>{leader.name}</p>
                                                    <p className="fs-6">{leader.job}<br/>{leader.org}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>

                    <br></br><br></br><br></br>

                    <h1 className="sectitle">EXECUTIVE COMMITTEE<hr /></h1>

                    {/* <div  className="container">
                    </div> */}
                    </div>

                    <br></br><br></br><br></br>
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default Team
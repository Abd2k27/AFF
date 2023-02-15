import { NextPage } from 'next'
import React, { useRef, useState, useLayoutEffect, useEffect } from "react"
import style from './Style.module.css'
import { Head, Header, Section, Menu, Footer } from '../../components'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faUser, faFaceLaughBeam, faMessage, faSynagogue, faHouseMedical, faPhoneSquare, faWineGlass } from "@fortawesome/free-solid-svg-icons"
import Slider from 'react-slick'
import { faWindows, faWordpress, faXbox, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"
import { getHref, getUrl, imageLoader } from "../../utils"
import { ButtonStyle, CardStyle } from '../../styles'
import img10 from '../../public/apropos/10.png';
import img11 from '../../public/apropos/11.png';
import { relative } from 'path'

const About: NextPage = () => {
    const statistiquesSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 1000
    }

    const statistiquesCards = [
        {
            id: 1,
            title: 'pays visités en Afrique centre, du Nord au Sud',
            value: 30
        },

        {
            id: 2,
            title: 'INTEVENANTS MOBILISÉS',
            value: 200
        },

        {
            id: 3,
            title: 'USD DE VALEUR SUSCITÉES PAR NOS ACTIVITES',
            value: '10M'
        },

        {
            id: 4,
            title: 'personnes actives dans notre communauté ',
            value: 10000 
        },

        {
            id: 5,
            title: 'Participants',
            value: 5000
        },

        {
            id: 6,
            title: 'Fintechs suscitées',
            value: 30
        },

        {
            id: 7,
            title: 'Startups, banques, assurances formées ',
            value: 300
        },

        {
            id: 8,
            title: 'Formations avancées délivrées',
            value: 20
        },
    ]

    const partnersCards = [
        {
            url:"https://www.africafintechnetwork.com/",
            id: 1,
            image: getUrl('partners/platinium/3.png')
        },
        {
            url:"https://www2.deloitte.com/afrique/fr.html",
            id: 2,
            image: getUrl('partners/platinium/6.png')
        },
        {
            url:"https://www.rfl.rw/",
            id: 3,
            image: getUrl('partners/platinium/12.png')
        },
    ]

    const [activeValueCard, setActiveValueCard] = useState(0)
    const counterRef = useRef<null | HTMLDivElement>(null)
    const [counter, displayCounter] = useState(false)

    return (
        <>
            <Head title='A propos | AFRICA FINTECH FORUM' />

            <Menu /> 

            <Header title="A propos" description='' />

            <main>
                <Section className={style.block}>
                    
                    <div className={style.blockLeft}></div>

                    <div className={style.blockRight}>
                        <div className={style.blockText}>
                            <h2>Notre vision <hr /></h2>
                            <h4>
                                <strong style={{ textAlign: 'center' }  }>AFRICA FINTECH FORUM est une organisation internationale à but non lucratif de promotion et de développement de la finance digitale.
                                </strong>
                            </h4>
                            <p>
                                <strong style={{ textAlign: 'center' }  }>
                                    Notre but est de construire pour l’Afrique un écosystème fintech basé sur le renforcement du réseau local et sur le rassemblement de tous les acteurs de l’industrie avec nos partenaires de partout dans le monde.
                                </strong>
                            </p>
                        </div>
                    </div>
                </Section>

                {/* <Section>
                    <Container>
                        <h1 className="sectionTitle">Nos valeurs <hr /></h1>

                        <Row>
                            <Col xs={1} md={7}>
                                <Row xs={1} md={2} lg={3} className="g-5">
                                    {valuesCard.map((value, index) => {
                                        return (
                                            <Col key={value.id}>
                                                <Card className={CardStyle.transparent + " text-center"} style={{ cursor: 'pointer' }} onClick={() => setActiveValueCard(index)}>
                                                    <Card.Body>
                                                        <FontAwesomeIcon icon={value.icon} size="2x" className="mb-3" />
                                                        <Card.Text>{value.title}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Col>

                            <Col xs={1} md={5}>
                                <Card className="p-3 h-100 text-center" style={{
                                    backgroundColor: 'var(--primary-color)',
                                    color: 'white',
                                    borderRadius: 0
                                }}>
                                    <Card.Body className="border p-5">
                                        <FontAwesomeIcon icon={valuesCard[activeValueCard].icon} size="2x" />
                                        <Card.Text className="my-4">{valuesCard[activeValueCard].title}</Card.Text>
                                        <Card.Text>{valuesCard[activeValueCard].content}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <div className="d-flex justify-content-center mt-5">
                            <Link href={getHref("devenir-membre")}>
                                <a className={"btn " + ButtonStyle.primary}>
                                    <span className="me-3">Devenir membre</span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </a>
                            </Link>
                        </div>
                    </Container>
                </Section> */}

                <Section className={style.statistiques}>
                    <Container>
                        <h1 className="sectionTitle mb-5 text-white">Nos statistiques <hr /></h1>
                        <div style={{ marginBottom: '5em' }}>
                            <Slider {...statistiquesSliderSettings}>
                                {statistiquesCards.map(statistique => {
                                    return (
                                        <div key={statistique.id}>
                                            <Card className="border-0 rounded-0 text-white" style={{ background: 'none' }}>
                                                <Card.Body className="text-center">
                                                    <Card.Title className="fs-1 fw-bold">+ {statistique.value}</Card.Title>
                                                    <Card.Text><span className="text-uppercase">{statistique.title}</span></Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>

                        <h1 className="sectionTitle mb-5 text-white text-uppercase">Nos accomplisements depuis 2017 <hr /></h1>
                        
                        {/* --- */}
                    <div className={style.block}>
                        <div style={{ top: '14em' }} className="">
                            <Container  className={style.back} >
                                <Row className="text-white">
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/pole-accueil/11.png')!} layout="fixed" width={150} height={150} alt="10 Associations Fintech" loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">10 Associations Fintech </Card.Title>
                                                <Card.Text className="d-flex flex-column text-center mb-5">
                                                    <span>Initiées ou soutenues : Côte d'Ivoire, Bénin, Togo, Maroc, Niger, RD Congo, Tunisie, Madagascar, Sénégal, Burkina Faso.</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/pole-accueil/AFF tour.png')!} layout="fixed" width={150} height={150} alt="Africa Fintech Tour" loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">Africa Fintech Tour</Card.Title>
                                                <Card.Text className="d-flex flex-column text-center mb-5">
                                                    <span>30 mini forums organisés depuis 2017 en Afrique centrale, du nord, de l’est et de l’ouest pour relier les écosystèmes fintech, créer des synergies et rassembler les acteurs.</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/pole-accueil/africa fintech forum.png')!} layout="fixed" width={150} height={150} alt="Africa Fintech Forum" loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">Africa Fintech Forum</Card.Title>
                                                <Card.Text className="d-flex flex-column text-center mb-5">
                                                    <span>Forum annuel réunissant depuis plus de 600 acteurs du secteur de la fintech de tous les continents.</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Row>
                                <Row className="text-white">
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/pole-accueil/club.png')!} layout="fixed" width={150} height={150} alt="Initiation" loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">Initiation de la collaboration avec les institutions monétaires et financières</Card.Title>
                                                <Card.Text className="d-flex flex-column text-center mb-5">
                                                    <span>Banques centrales, institutions financières de développement, centres financiers internationaux.</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/pole-accueil/AFF.png')!} layout="fixed" width={150} height={150} alt="Participation à des ateliers et groupes de travail" loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">Participation à des ateliers et groupes de travail</Card.Title>
                                                <Card.Text className="d-flex flex-column text-center">
                                                    <span>Sur la stratégie nationale d'inclusion financière, la réglementation relative aux fintechs et à la finance numérique.</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/projet-réalisés/market.png')!} layout="fixed" width={150} height={150} alt="AFRICAM [Africa Capital Market]" loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">AFRICAM [Africa Capital Market]</Card.Title>
                                                <Card.Text className="d-flex flex-column text-center">
                                                    <span>Concours sur le trading FOREX dans une salle de marché virtuelle rassemblant 30 trésoriers venant de 20 groupes bancaires.</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Row>
                                <Row className="text-white">
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/projet-en-cours/fintech industry mapping.png')!} layout="fixed" width={150} height={150} alt="Fintech Industry Mapping" loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">Fintech Industry Mapping</Card.Title>
                                                <Card.Text className="d-flex flex-column text-center">
                                                    <span>Cartographie des écosystèmes Fintech et identification des acteurs de 20 pays d’Afrique francophone (centre, nord, ouest).</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/projet-en-cours/africa fintech day.png')!} layout="fixed" width={150} height={150} alt="Africa Fintech Day" loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">AFRICAM [Africa Capital Market]</Card.Title>
                                                <Card.Text className="d-flex flex-column text-center">
                                                    <span>Journée promotionnelle et pédagogique sur la Fintech avec étudiants des pays africains : Maroc, Tunisie, Sénégal, Cameroun et de la République Démocratique du Congo.</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Row>
                            </Container>
                        </div>
                    </div>
                        {/* --- */}
                    </Container>
                </Section>
                <br></br><br></br><br></br>

                <Section>
                    <Container>
                        <Row md={2} className="gx-5">
                            <Col className={style.network}>
                                <h2>Notre réseau <hr /></h2>
                                <h1>UN RÉSEAU MONDIALE EN PLEIN EXPANSION</h1>

                                <p style={{ textAlign: 'justify' }} className="mb-3">
                                    Depuis 2016, AFF ne cesse d'accroitre son réseau de partenariat sur tout le continent africain et dans le monde entier. 
                                    Par son ambition d'améliorer et de dynamiser l'écosystème fintech africain il a développé des collaborations avec des hubs financiers 
                                    (Kigali International Financial Centre, Finance Innovation, Casa Finance City) des hubs d’innovation (Village Ivoirien des Technologies 
                                    de l’information et de la Biotechnologue, Parc National des Technologies de Diamnadio, Luxembourg Home of Technology), des Instituts 
                                    (Cambridge Centre for Alternative Finance, Oxford Future of Finance and Technology Initiative , World Savings and Banking Institute).
                                </p>


                                <Link href={getHref("partenaires-aff")}>
                                    <a className={"btn " + ButtonStyle.primary}>
                                        <span className="me-3">Voir plus</span>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </a>
                                </Link>
                            </Col>

                            <Col className="d-flex justify-content-center align-items-center">
                                <Image src={getUrl('/network.png')!} loader={imageLoader} layout="fixed" alt="Notre réseau" width={700} height={450} />
                            </Col>
                        </Row>
                    </Container>
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default About

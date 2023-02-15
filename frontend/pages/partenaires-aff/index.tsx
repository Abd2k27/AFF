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
import Slider from 'react-slick'

const Partners: NextPage = () => {
    const partnersSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    }

    const partnersPlatCards = [
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
        {
            id: 4,
            url:"https://finance-innovation.org/en/",
            image: getUrl('partners/platinium/8.png')
        },
        {
            url:"https://lhoft.com/en/",
            id: 5,
            image: getUrl('partners/platinium/10.png')
        },
        {
            url:"https://www.dataprotect.ma/fr/",
            id: 6,
            image: getUrl('partners/platinium/5.png')
        },
        {
            url:"https://www.cesag.sn/",
            id: 7,
            image: getUrl('partners/platinium/4.jpeg')
        },
        {
            url:"https://www.wsbi-esbg.org/",
            id: 8,
            image: getUrl('partners/platinium/14.jpeg')
        },
        {
            id: 9,
            url:"http://digital54nd.com/",
            image: getUrl('partners/platinium/2.jpeg')
        },
        {
            url:"https://omnisliber.org/",
            id: 10,
            image: getUrl('partners/platinium/11.jpeg')
        },
        {
            url:"http://www.senstartup.com/",
            id: 11,
            image: getUrl('partners/platinium/13.png')
        },
        {
            id: 12,
            url:"https://epitech.bj/",
            image: getUrl('partners/platinium/1.png')
        },
        {
            url:"",
            id: 13,
            image: getUrl('partners/platinium/15.jpeg')
        },
        {
            url:"https://www.groupeiam.com/",
            id: 14,
            image: getUrl('partners/platinium/9.png')
        },
        {
            url:"https://www.dexterity-africa.com/",
            id: 15,
            image: getUrl('partners/platinium/7.png')
        },
    ]

    const partnersMediaCards = [
        {
            url:"https://www.medi1tv.com/fr",
            id: 1,
            image: getUrl('partners/media/1.jpg')
        },
        {
            url:"https://www.canalplusadvertising.com/",
            id: 2,
            image: getUrl('partners/media/2.jpg')
        },
        {
            url:"https://www.financialafrik.com/",
            id: 3,
            image: getUrl('partners/media/3.jpg')
        },
        {
            url:"https://epistrophe.ci/",
            id: 4,
            image: getUrl('partners/media/4.jpg')
        },

    ]
    const partnersTransportCards = [
        {
            id: 1,
            url:"https://www.brusselsairlines.com/",
            image: getUrl('partners/transport/1.jpg')
        },
        {
            id: 2,
            url:"https://www.turkishairlines.com/",
            image: getUrl('partners/transport/2.jpg')
        },
        {
            id: 3,
            url:"https://www.uber.com/fr/fr/",
            image: getUrl('partners/transport/3.jpg')
        },
        {
            id: 4,
            url:"https://www.aircotedivoire.com/",
            image: getUrl('partners/transport/4.jpg')
        },

    ]

    const partnersCards = [
        {
            id: 1,
            image: getUrl('partners/1.jpeg')
        },
        {
            id: 2,
            image: getUrl('partners/2.jpeg')
        },
        {
            id: 3,
            image: getUrl('partners/3.jpeg')
        },
        {
            id: 4,
            image: getUrl('partners/4.jpeg')
        },
        {
            id: 5,
            image: getUrl('partners/5.jpeg')
        },
        {
            id: 6,
            image: getUrl('partners/6.jpeg')
        },
        {
            id: 7,
            image: getUrl('partners/7.jpeg')
        },
        {
            id: 8,
            image: getUrl('partners/8.jpeg')
        },
        {
            id: 9,
            image: getUrl('partners/9.jpeg')
        },
        {
            id: 10,
            image: getUrl('partners/10.jpeg')
        },
        {
            id: 11,
            image: getUrl('partners/11.jpeg')
        },
        {
            id: 12,
            image: getUrl('partners/12.jpeg')
        },
        {
            id: 13,
            image: getUrl('partners/14.jpeg')
        },
        {
            id: 14,
            image: getUrl('partners/15.jpeg')
        },
        {
            id: 15,
            image: getUrl('partners/16.jpeg')
        },
        {
            id: 16,
            image: getUrl('partners/17.jpeg')
        },
        {
            id: 17,
            image: getUrl('partners/19.jpeg')
        },
    ]

    const youtubeCards = [
        {
            id: 1,
            title: 'Resumé de la conference de presse AFF',
            link: 'https://www.youtube.com/embed/tCc9gudE7HM'
        },

        {
            id: 2,
            title: 'Abidjan Fintech Tour Keynote Rita OULAI Impact Réel de la Fintech en Côte dIvoire',
            link: 'https://www.youtube.com/embed/3hhcL0FAf-8'
        },

        {
            id: 3,
            title: 'Africa Fintech Forum',
            link: 'https://www.youtube.com/embed/Vw7cFFmpbJc'
        }
    ]

    const adsFirstSlides = [
        {
            id: 1,
            image: getUrl('partners/first-card/1.jpeg'),
            alt: 'First slide'
        },

        {
            id: 2,
            image: getUrl('partners/first-card/2.jpeg'),
            alt: 'Second slide'
        },
        {
            id: 3,
            image: getUrl('partners/first-card/3.jpeg'),
            alt: 'Second slide'
        },
    ]

    const adsSecondSlides = [
        {
            id: 1,
            image: getUrl('partners/second-card/1.jpeg'),
            alt: 'First slide'
        },

        {
            id: 2,
            image: getUrl('partners/second-card/2.jpeg'),
            alt: 'Second slide'
        },
        {
            id: 3,
            image: getUrl('partners/second-card/3.jpeg'),
            alt: 'Second slide'
        },
    ]

    const adsThirtSlides = [
        {
            id: 1,
            image: getUrl('partners/thirt-card/1.jpeg'),
            alt: 'First slide'
        },
    ]
    // const adsSlides = [
    //     {
    //         id: 1,
    //         image: getUrl('/a-la-une/1.jpg'),
    //         alt: 'First slide'
    //     },

    //     {
    //         id: 2,
    //         image: getUrl('/a-la-une/2.jpeg'),
    //         alt: 'Second slide'
    //     }
    // ]

    return (<>
    <Head title='Partenaires AFF | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="Partenaires AFF" description="Ils collaborent avec Africa Fintech Forum pour bâtir une industrie vibrante." />

            <main>
                <Section>
                    <Container>
                        <br /><br /><p className="fw-bold text-center">
                            Depuis 2016 ils nous accompagnent pour paver l’industrie fintech en Afrique francophone.
                        </p>
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <h1 className="sectionTitle">Nos partenaires opérationnels<hr /></h1>

                        <div className="container">
                            {/* <div style={{ paddingInline: '20em' }}> */}
                                <Slider {...partnersSliderSettings}>
                                    {partnersPlatCards.map(partner => {
                                    return (
                                        <div key={partner.id}>
                                            <Card className={style.sliderCard + " px-5 border-0"}>
                                                <Card.Img variant="top" src={partner.image}  />
                                                {/* <img src={partner.image} alt="" height={230} width={250} /> */}
                                            </Card>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </Container>
                </Section>
                <br></br><br></br>

                <Section>
                    <Container>
                        <h1 className="sectionTitle">Nos partenaires Évènements<hr /></h1>

                        <div className="container">
                            {/* <div style={{ paddingInline: '20em' }}> */}
                                <Slider {...partnersSliderSettings}>
                                    {partnersCards.map(partner => {
                                    return (
                                        <div key={partner.id}>
                                            <Card className={style.sliderCard + " px-5 border-0"}>
                                                <Card.Img variant="top" src={partner.image}  />
                                                {/* <img src={partner.image} alt="" height={230} width={250} /> */}
                                            </Card>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </Container>
                </Section>
                <br></br><br></br><br></br>
                <Section>
                    <Container style={{ paddingInline: '1em' }}>
                        <p className="fw-bold text-center mb-5">
                            Nous ne cessons d&apos;agrandir notre réseau pour toucher plus de secteurs.

                            <hr style={{
                                width: '4em',
                                height: '5px',
                                margin: '0 auto',
                                marginTop: '.8em',
                                opacity: 1,
                            }} />
                        </p>

                        <Row xs={1} className="g-5">

                            <Col>
                                <div className="d-flex align-items-center projectCarousel w-100">
                                    <Carousel className="projectCarousel w-100" interval={3000}>
                                        {adsThirtSlides.map(ads => {
                                            return (
                                                <Carousel.Item key={ads.id}>
                                                    <div className="rounded-0" style={{ height: "350px" }}>
                                                        <Image src={ads.image!} alt={ads.alt} layout="fill" loader={imageLoader} />
                                                    </div>
                                                </Carousel.Item>
                                            )
                                        })}
                                    </Carousel>

                                    <Card className={CardStyle.horizontal + " shadow w-100" } style={{ height: "200px", width: "150px" }}>
                                        <Card.Body className="p-2">
                                            <div>
                                                <Container style={{ paddingInline: '1em' }}>
                                                <Card.Title className="fw-bold text-uppercase text-primary" style={{ fontSize: 'small'}}>
                                                    MERCI POUR VOTRE SOUTIEN !
                                                </Card.Title>

                                                <Card.Text style={{ textAlign: 'left', fontSize: 'small', overflowWrap: 'break-word'}} className="text-muted fw-bold">
                                                    A tous ces champions nationaux, régionaux et internationaux de l’inclusion financière et de la fintech qui nous accompagnent et nous soutiennent.
                                                </Card.Text>
                                                </Container>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Section>
                <br></br><br></br>
                <Section className={style.block}>
                    <Container className="text-center">
                        <div className={style.ceoSection}>
                            <h2>Devenir partenaire<hr /></h2>
                            <h1>Pourquoi nous rejoindre ?</h1>

                            <p>
                                Depuis sa creation en 2016, AFF c'est +30 Pays visités pour rencontrer les acteurs locaux de l'écosystème, +200 intervenants d'Afrique, d'Amérique, d'Asie et d'Europe, 
                                +10 000 000 USD de flux financiers stimulés par nos projets, +10 000 acteurs de la communauté fintech connectés à nos plateformes, +5 000 participants : régulateurs, 
                                banques, assurances, fintechs, ORMs, investisseurs, etc., +30 créations de fintechs inspirées lors de l'Africa Fintech Forum, +300 startups, entrepreneurs, intrapreneurs 
                                formés, +5 formations avancées fournies aux entrepreneurs et intrapreneurs en fintech...
                                Ces initiatives sont soit issues d&apos;Africa Fintech Forum, soit de partenaires avec lesquels nous unissons nos efforts.
                            </p>

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

export default Partners
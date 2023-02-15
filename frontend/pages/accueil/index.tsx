import React, { useRef, useState, useLayoutEffect, useEffect } from "react"
import { NextPage } from 'next'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { Footer, Head, MainHeader, Menu, Section, CounterUpAnimation } from '../../components'
import style from './Style.module.css'
import { ButtonStyle, CardStyle } from '../../styles'
import Slider from 'react-slick'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Link from "next/link"
import { getHref, getUrl, imageLoader, getApiUrl, truncateText, getApiImageUrl } from "../../utils"
import { leaderProps, postProps } from "../../props"
import axios from "axios"

const Home: NextPage = () => {
    const leadersSliderSettings = {
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

    const statistics = [
        {
            id: 1,
            title: 'Fintechs suscitées',
            value: 30
        },

        {
            id: 2,
            title: 'Startups, banques, assurances formées',
            value: 300
        },

        {
            id: 3,
            title: 'Pays visités en Afrique',
            value: 30
        },

        {
            id: 4,
            title: 'Membres virtuels',
            value: 10000 
        }
    ]

    //https://dev.to/chriseickemeyergh/building-custom-scroll-animations-using-react-hooks-4h6f
    const counterRef = useRef<null | HTMLDivElement>(null)
    const [counter, displayCounter] = useState(false)

    useLayoutEffect(() => {
        const topPos = (el: HTMLDivElement | null) => el?.getBoundingClientRect().top
        const counterPos = topPos(counterRef.current) || 0

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;

            if (counterPos < scrollPos) {
                displayCounter(true)
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [counter, displayCounter])

    const [leaders, setLeaders] = useState<leaderProps[]>([])

    // useEffect(() => {
    //     axios.get(`/api/getleaders`)
    //     .then((res:any) => {
    //         setLeaders(res.data);
    //         console.log(res.data);

    //     })
    // }, [])

    // useEffect(() => {
    //     fetch(getApiUrl('/api/getleaders'))
    //         .then(res => res.json())
    //         .then(data => setLeaders(data))
    // }, [])

    const [posts, setPosts] = useState<postProps[]>([])

    // useEffect(() => {
    //     fetch(getApiUrl('/api/headlines'))
    //         .then(res => res.json())
    //         .then(data => setPosts(data))
    // }, [setPosts])

    return (
        <>
            <Head title='Accueil | AFRICA FINTECH FORUM' />

            <Menu />

            <MainHeader />

            <main>
                <Section>
                    <Container>
                       {/* <h1 className="sectionTitle">A la une <hr /></h1>*/}

                        {/*<Row xs={1} md={3} className="g-5 d-flex justify-content-center align-items-center">
                            {posts.map(post => {
                                if (!post.eventype) {
                                    return (
                                        <Col key={post.id}>
                                            <Card className={CardStyle.main}>
                                                <Card.Img variant="top" src={getApiImageUrl(`/news/${post.image}`)} height={250} />

                                                <Card.Body className="mb-3">
                                                    <Card.Text>
                                                        <small>
                                                            {new Date(post.created_at).toLocaleDateString('fr-FR', { year: 'numeric', day: 'numeric', month: 'short' })} / {post.newstype.name}
                                                        </small>
                                                    </Card.Text>

                                                    <Card.Title className="fw-bold text-uppercase">
                                                        <small>{post.title}</small>
                                                    </Card.Title>

                                                    <Card.Text>
                                                        <small>{truncateText(post.content, 150)}</small>
                                                    </Card.Text>
                                                </Card.Body>

                                                 <Link href={getHref(`article/${post.id}`)}> 
                                                <Link href={getHref(`article/${post.slug}`)}>
                                                    <a className="stretched-link"></a>
                                                </Link>
                                            </Card>
                                        </Col>
                                    )
                                }

                                return (
                                    <Col key={post.id}>
                                        <Card className={CardStyle.main}>
                                            <Card.Img variant="top" src={getApiImageUrl(`/event/${post.image}`)} height={250} />

                                            <Card.Body className="mb-3">
                                                <Card.Text>
                                                    <small>{new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', day: 'numeric', month: 'short' })} / {post.eventype.name}</small>
                                                </Card.Text>

                                                <Card.Title className="fw-bold text-uppercase">
                                                    <small>{post.title}</small>
                                                </Card.Title>

                                                <Card.Text>
                                                    <small>
                                                        <div className="d-flex align-items-center">
                                                            <FontAwesomeIcon icon={faLocationDot} />
                                                            <span className="ms-2">{post.location}</span>
                                                        </div>

                                                        <div className="d-flex align-items-center">
                                                            <FontAwesomeIcon icon={faClock} />
                                                            <span className="ms-2">{post.time} UTC</span>
                                                        </div>
                                                    </small>
                                                </Card.Text>
                                            </Card.Body>

                                            <Link href={getHref(`evennement/${post.slug}`)}>
                                                <a className="stretched-link"></a>
                                            </Link>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>*/}

                        {/*<div className="my-5 d-flex justify-content-center">
                            <Link href={getHref("actualite")}>
                                <a className={"btn " + ButtonStyle.primary}>
                                    <span className="me-3">En découvrir plus</span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </a>
                            </Link>
                        </div>*/}
                    </Container>
                </Section>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Section>
                    {/* <div className={style.block}> */}
                    <div className={style.block}>
                        <div className="mx-auto px-3 py-3" ref={counterRef}>
                        {/* <div className="mx-auto px-5 py-4" ref={counterRef}> */}
                            <h4 className="sectionTitle text-white mb-5">Africa Fintech Forum c&apos;est <hr /></h4>

                            <Row>
                                {counter && statistics.map((statistic, index) => {
                                    return (
                                        <Col key={statistic.id} className="d-flex align-items-center">
                                            <Card className={"border-start-0 border-top-0 border-bottom-0 rounded-0 w-100 " + (index == 3 ? "border-end-0" : "")} style={{ background: 'none', color: 'white', borderColor: 'white' }}>
                                                <Card.Body className="text-center">
                                                    <Card.Title className="fs-1 fw-bold">
                                                        + <CounterUpAnimation countTo={statistic.value}></CounterUpAnimation>
                                                    </Card.Title>
                                                    <Card.Text>{statistic.title}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>

                        <div style={{ top: '14em' }} className="">
                            <Container  className={style.back} >
                                <h4 className="sectionTitle text-white my-5">Nos Projets<hr /></h4>

                                <Row className="text-white">
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/pole-accueil/AFF tour.png')!} layout="fixed" width={150} height={150} alt="AFRICA FINTECH TOUR " loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">AFRICA FINTECH TOUR </Card.Title>
                                                <Card.Text className="d-flex flex-column text-center mb-5">
                                                    <span>Parcours panafricain de promotion de la fintech et d’échange avec les acteurs des différents pays</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/pole-accueil/africa fintech forum.png')!} layout="fixed" width={150} height={150} alt="THE AFRICA FINTECH FORUM " loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase"> NEXT FINTECH FORUM </Card.Title>
                                                <Card.Text className="d-flex flex-column text-center mb-5">
                                                    <span>Événement  annuel rassemblant les professionnels de la fintech sur 2 jours</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/pole-accueil/Open Africa.png')!} layout="fixed" width={150} height={150} alt="OPEN BANKING AFRICA " loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">OPEN BANKING AFRICA </Card.Title>
                                                <Card.Text className="d-flex flex-column text-center mb-5">
                                                    <span>Organisation de promotion et de developpement de l’open banking et de mise en place de standards pour l’industrie</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Row>
                                <Row className="text-white">
                                <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/pole-accueil/BREAKING BANKS AFRICA.png')!} layout="fixed" width={150} height={150} alt="BREAKING BANKS AFRICA " loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">BREAKING BANKS AFRICA </Card.Title>
                                                <Card.Text className="d-flex flex-column text-center mb-5">
                                                    <span>Podcast dédié à l’industrie de la finance digitale </span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/pole-accueil/FINTECH VILLAGE.png')!} layout="fixed" width={150} height={150} alt="FINTECH VILLAGE  " loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">FINTECH VILLAGE  </Card.Title>
                                                <Card.Text className="d-flex flex-column text-center">
                                                    <span>Hub d’innovation continental dédié à la Fintech  </span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-4">
                                        <Card className="border-0" style={{ background: 'none' }}>
                                            <div className="mx-auto">
                                                <Image src={getUrl('/pole-accueil/SMART VILLAGE.png')!} layout="fixed" width={150} height={150} alt="	SMART VILLAGE   " loader={imageLoader} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className=" fw-bold text-uppercase">SMART VILLAGE   </Card.Title>
                                                <Card.Text className="d-flex flex-column text-center">
                                                    <span>Projet de développement d’écosystème numérique en zone rurale </span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                </Row>
                            </Container>
                        </div>
                    </div>
                </Section>


                <Section style={{ marginBottom: '10em', marginTop: '6em' }} className="container">
                    <h1 className="sectionTitle">Nos partenaires <hr /></h1>

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
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default Home

import { NextPage } from "next"
import React, { useState, FormEvent } from "react"
import { Footer, Head, Header, Menu, Section } from '../../components'
import { Container, Row, Col, Card, Form, Carousel } from "react-bootstrap"
import Slider from 'react-slick'
import style from './Style.module.css'
import { CountryDropdown } from 'react-country-region-selector'
import Image from "next/image"
import { getUrl, imageLoader, getApiUrl, getHref } from "../../utils"
import { ButtonStyle } from '../../styles'

const Sponsor: NextPage = () => {
    const partnersSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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

    // const partnersCards = [
    //     {
    //         id: 1,
    //         image: getUrl('partners/1.png')
    //     },

    //     {
    //         id: 2,
    //         image: getUrl('partners/2.png')
    //     },

    //     {
    //         id: 3,
    //         image: getUrl('partners/3.png')
    //     },

    //     {
    //         id: 4,
    //         image: getUrl('partners/4.png')
    //     },

    //     {
    //         id: 5,
    //         image: getUrl('partners/5.png')
    //     },

    //     {
    //         id: 6,
    //         image: getUrl('partners/6.png')
    //     },
    // ]

    const partnersCards = [
        {
            id: 1,
            image: getUrl('/apropos/7.png')
        },

        {
            id: 2,
            image: getUrl('/apropos/2.png')
        },

        {
            id: 3,
            image: getUrl('/apropos/3.png')
        },

        {
            id: 4,
            image: getUrl('/apropos/4.png')
        },

        {
            id: 5,
            image: getUrl('/apropos/5.png')
        },

        {
            id: 6,
            image: getUrl('/apropos/6.png')
        },
        // {
        //     id: 7,
        //     image: getUrl('partners/7.jpeg')
        // },

        // {
        //     id: 8,
        //     image: getUrl('partners/8.jpeg')
        // },

        // {
        //     id: 9,
        //     image: getUrl('partners/9.jpeg')
        // },

    ]


    const adsSlides = [
        {
            id: 1,
            image: getUrl('/sponsor/Image1.png'),
            alt: 'First slide'
        },
        {
            id: 2,
            image: getUrl('/sponsor/Image2.png'),
            alt: 'second slide'
        },

    ]

    const [displayPeopleForm, setDisplayPeopleForm] = useState(true)
    const [country, setCountry] = useState('')

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

        const formData = new FormData(form)
        formData.append('country', country)

        {/*fetch(getApiUrl('/api/sponsors'), {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message)
                if (data.status == 'success') form.reset()
            })*/}
    }

    return (
        <>
            <Head title='Devenir sponsor | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="Devenir sponsor" description="Vous avez la possibilité de sponsoriser les événements et les activités de AFF et rejoindre notre réseau de sponsors qui font la fintech en Afrique" />

            <main>
                <Section>
                    <Container><br /><br />
                        <p className="fw-bold text-center">
                        En tant que Sponsor pendant les grands événements annuels vous mettez en avant votre entreprise 
                        et participez aux projets AFF tout au long de l'année. Booster votre visibilité sur nos 
                        plateformes (site web, réseaux sociaux, stands…) lors des conférences et événements annuels. 
                        Multipliez votre réseau de clients et de partenaires tout en participant à la croissance de l’écosystème fintech africain.
                        </p>
                    </Container>
                </Section>

                <Section>
                    <h1 className="sectionTitle">Nos Sponsors Passés et actuels<hr /></h1>

                    <div className="container">
                        <Slider {...partnersSliderSettings}>
                            {partnersCards.map(partner => {
                                return (
                                    <div key={partner.id} >
                                        <Card className="border-0 rounded-0" style={{ background: 'none', marginInline: '2em' }}>
                                            <Card.Img variant="top" src={partner.image} />
                                        </Card>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </Section>
                <br></br><br></br><br></br><br></br>

                <Section>
                    <Container>
                        <p className="fw-bold text-center mb-3">
                            Sponsoriser nos activités, c'est améliorer un peu plus l’inclusion financière sur le continent.
                            <hr className={style.separator} />
                        </p>

                        <Row className="mt-5 d-flex align-items-center">
                            <Col md={7} className="position-absolute" style={{ marginLeft: '-2em', width: '850px' }}>
                                {/* <div style={{ height: '800px', position: 'relative' }}>
                                    <Image src={getUrl('/formulaire1.jpeg')} alt="sponsor" layout="fill" loader={imageLoader} />
                                </div> */}
                                <Carousel className="projectCarousel" interval={3000}>
                                    {adsSlides.map(ads => {
                                        return (
                                            <Carousel.Item key={ads.id}>
                                                <div style={{ height: '700px', width: '750px', position: 'relative' }}>
                                                    <Image src={ads.image!} alt={ads.alt} layout="fill" loader={imageLoader} />
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                            </Col>

                            <Col md={5} style={{ marginLeft: 'auto' }}>
                                <Card className="shadow">
                                    <Card.Body>
                                        <div className="d-flex justify-content-center">
                                            <p className="fw-bold py-2" style={{ color: 'var(--primary-color)' }}>
                                                Veuillez soumettre votre demande de sponsoring <hr className={style.separator} />
                                            </p>
                                        </div>

                                        <Form onSubmit={handleSubmitForm}>
                                            <div className="mt-3 mb-4 d-flex justify-content-between">
                                                <Form.Check inline label="Personne physique" name="type" type="radio" value="personne-physique" checked={displayPeopleForm} onChange={() => setDisplayPeopleForm(true)} />

                                                <div className="vr" />

                                                <Form.Check inline label="Personne morale" name="type" type="radio" value="personne-morale" checked={!displayPeopleForm} onChange={() => setDisplayPeopleForm(false)} />
                                            </div>

                                            {displayPeopleForm && <>
                                                <Row className="mb-3">
                                                    <Col>
                                                        <Form.Group controlId="last_name">
                                                            <Form.Label>Nom</Form.Label>
                                                            <Form.Control name="last_name" type="text" required />
                                                        </Form.Group>
                                                    </Col>

                                                    <Col>
                                                        <Form.Group controlId="first_name">
                                                            <Form.Label>Prénom(s)</Form.Label>
                                                            <Form.Control name="first_name" type="text" required />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <Row className="mb-3">
                                                    <Col>
                                                        <Form.Group controlId="phone">
                                                            <Form.Label>Numéro de téléphone</Form.Label>
                                                            <Form.Control name="phone" type="text" required />
                                                        </Form.Group>
                                                    </Col>

                                                    <Col>
                                                        <Form.Group controlId="email">
                                                            <Form.Label>Adresse email</Form.Label>
                                                            <Form.Control name="email" type="email" required />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <Row className="mb-3">
                                                    <Col>
                                                        <Form.Group controlId="trade">
                                                            <Form.Label>Fonction</Form.Label>
                                                            <Form.Control name="trade" type="text" required />
                                                        </Form.Group>
                                                    </Col>

                                                    <Col>
                                                        <Form.Group controlId="organisation">
                                                            <Form.Label>Organisation</Form.Label>
                                                            <Form.Control name="organisation" type="text" required />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <Row className="mb-3">
                                                    <Col>
                                                        <Form.Group controlId="country">
                                                            <Form.Label>Pays</Form.Label>
                                                            <CountryDropdown name="country" value={country} onChange={country => setCountry(country)} classes="form-select" defaultOptionLabel="Sélectionnez un pays" />
                                                        </Form.Group>
                                                    </Col>

                                                    <Col>
                                                        <Form.Group controlId="city">
                                                            <Form.Label>Ville</Form.Label>
                                                            <Form.Control name="city" type="text" required />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </>}

                                            {!displayPeopleForm && <>
                                                <Form.Group controlId="company" className="mb-3">
                                                    <Form.Label>Nom de l&apos;entreprise</Form.Label>
                                                    <Form.Control name="company" type="text" required />
                                                </Form.Group>

                                                <Row className="mb-3">
                                                    <Col>
                                                        <Form.Group controlId="phone">
                                                            <Form.Label>Numéro de téléphone</Form.Label>
                                                            <Form.Control name="phone" type="text" required />
                                                        </Form.Group>
                                                    </Col>

                                                    <Col>
                                                        <Form.Group controlId="email">
                                                            <Form.Label>Adresse email</Form.Label>
                                                            <Form.Control name="email" type="email" required />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <Form.Group controlId="location" className="mb-3">
                                                    <Form.Label>Adresse du siège</Form.Label>
                                                    <Form.Control name="location" type="text" required />
                                                </Form.Group>

                                                <Form.Group controlId="org_sector" className="mb-3">
                                                    <Form.Label>Secteur de l&apos;entreprise</Form.Label>
                                                    <Form.Control name="org_sector" type="text" required />
                                                </Form.Group>

                                                <Form.Group controlId="org_website" className="mb-3">
                                                    <Form.Label>Site web de l&apos;entreprise</Form.Label>
                                                    <Form.Control name="org_website" type="text" />
                                                </Form.Group>

                                                <Row className="mb-3">
                                                    <Col>
                                                        <Form.Group controlId="siren" className="mb-3">
                                                            <Form.Label>Numéro SIREN</Form.Label>
                                                            <Form.Control name="siren" type="text" required />
                                                        </Form.Group>
                                                    </Col>

                                                    <Col>
                                                        <Form.Group controlId="legal_form" className="mb-3">
                                                            <Form.Label>Forme juridique</Form.Label>
                                                            <Form.Control name="legal_form" type="text" required />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </>}

                                            <Form.Group className="mb-3" controlId="file">
                                                <Form.Label> Pour nous rejoindre (Organisation : Un Document de Présentation /  Individu : Votre CV)</Form.Label>
                                                <Form.Control name="file[]" type="file" required multiple />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="image">
                                                <Form.Label>Logo</Form.Label>
                                                <Form.Control name="image" type="file" required />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="message">
                                                <Form.Label>Raisons pour lesquelles vous souhaitez devenir sponsor AFF.</Form.Label>
                                                <textarea name="message" cols={3} rows={3} className="form-control" required></textarea>
                                            </Form.Group>

                                            <div className="mb-3 d-flex align-items-center justify-content-center">
                                                <Form.Check label="" name="tos" type="checkbox" required checked />
                                                <span>J&apos;accepte les <a href={getHref('termes-et-conditions')}>Termes de Conditions et de Services</a></span>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className={"btn " + ButtonStyle.secondary}>
                                                    Envoyer
                                                </button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default Sponsor

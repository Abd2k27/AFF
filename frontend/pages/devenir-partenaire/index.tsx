import { NextPage } from "next"
import React, { useState, FormEvent, ChangeEvent } from "react"
import { Footer, Head, Header, Menu, Section } from '../../components'
import { Container, Row, Col, Card, Form, Carousel } from "react-bootstrap"
import Slider from 'react-slick'
import style from './Style.module.css'
import { CountryDropdown } from 'react-country-region-selector'
import Image from "next/image"
import { getApiUrl, getUrl, imageLoader, getHref } from "../../utils"
import { ButtonStyle } from '../../styles'

const Partner: NextPage = () => {
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

    const adsSlides = [
        {
            id: 1,
            image: getUrl('/formulaire1.jpeg'),
            alt: 'First slide'
        },

    ]


    const [displayPeopleForm, setDisplayPeopleForm] = useState(true)
    const [country, setCountry] = useState('')

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

        const formData = new FormData(form)
        formData.append('country', country)

        {/*fetch(getApiUrl('/api/partners'), {
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
            <Head title='Devenir partenaire | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="Devenir partenaire" description="Rejoignez le africa fintech forum partner network" />

            <main>
                <Section>
                    <Container><br /><br />
                        <p className="fw-bold text-center">
                        En tant que partenaire de Africa Fintech Forum, vous bénéficierez d'un accès instantané à la plus grande communauté africaine de l’industrie, à des ressources, des programmes, et un accès privilégié à nos activités et aux acteurs.
                        </p>
                    </Container>
                </Section>

                <Section>
                    <Container>

                        <Row className="mt-5 d-flex align-items-center position-relative">
                            <Col md={7} className="position-absolute projectCarousel" style={{ marginLeft: '-2em', width: '850px' }}>
                                {/* <div style={{ height: '800px', position: 'relative' }}>
                                    <Image src={getUrl('/formulaire1.jpeg')} alt="Partenaire" layout="fill" loader={imageLoader} />
                                </div> */}

                                <Carousel className="projectCarousel w-100" interval={3000}>
                                        
                                            
                                                <Carousel.Item style={{ height: '700px', width: '750px', position: 'relative' }}>
                                                    <div className="rounded-0" style={{ height: '350px'}}>
                                                        <Image src={getUrl('/formulaire1.jpeg')!} alt="first" layout="fill" loader={imageLoader} />
                                                    </div>
                                                </Carousel.Item>
                                                <Carousel.Item style={{ height: '700px', width: '750px', position: 'relative' }}>
                                                    <div className="rounded-0" style={{ height: '350px'}}>
                                                        <Image src={getUrl('/Image1.jpg')!} alt="second" layout="fill" loader={imageLoader} />
                                                    </div>
                                                </Carousel.Item>
                                            
                                        
                                    </Carousel>

                            </Col>
                            {/* <Col md={7} className="position-absolute" style={{ marginLeft: '-5em', width: '850px' }}>
                                <Carousel className="projectCarousel" interval={3000}>
                                    {adsSlides.map(ads => {
                                        return (
                                            <Carousel.Item key={ads.id}>
                                                <div style={{ height: '600px', position: 'relative' }}>
                                                    <Image src={ads.image} alt={ads.alt} layout="fill" loader={imageLoader} />
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                            </Col> */}

                            <Col md={5} style={{ marginLeft: 'auto' }}>
                                <Card className="shadow">
                                    <Card.Body>
                                        <div className="d-flex justify-content-center">
                                            <p className="fw-bold py-2" style={{ color: 'var(--primary-color)' }}>
                                                Veuillez soumettre votre demande de partenariat <hr className={style.separator} />
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

export default Partner

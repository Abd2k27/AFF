import { NextPage } from "next"
import React, { useState, FormEvent } from "react"
import { Container, Row, Col, Card, Form } from "react-bootstrap"
import { Footer, Menu, Head, Section } from "../components"
import Image from "next/image"
import Link from "next/link"
import { getHref, getUrl, imageLoader, getApiUrl } from "../utils"
import { CardStyle, ButtonStyle } from "../styles"

const Contact: NextPage = () => { 
    const newsCards = [
        {
            id: 1,
            title: 'Africa Fintech Forum',
             description: '',
            image: getUrl('/a-la-une/event1.png'),
        },

        {
            id: 2,
            title: 'Payconnect',
             description: '',
            image: getUrl('/a-la-une/event2.png'),
        },

        {
            id: 3,
            title: 'Insurtech',
             description: '',
            image: getUrl('/a-la-une/event3.png'),
        },
        {
            id: 4,
            title: 'Capital market',
             description: '',
            image: getUrl('/a-la-une/event4.png'),
        },

        {
            id: 5,
            title: 'Open finance webinars',
             description: '',
            image: getUrl('/a-la-une/event5.png'),
        },
        {
            id: 6,
            title: 'Fintech tour',
             description: '',
            image: getUrl('/a-la-une/event6.png'),
        },
        {
            id: 7,
            title: 'Africa blockchain conference',
             description: '',
            image: getUrl('/a-la-une/event7.png'),
        },

        {
            id: 8,
            title: 'Smart village conference',
             description: '',
            image: getUrl('/a-la-une/event8.png'),
        },
    ]

    const [civility, setCivility] = useState('M.')
    
    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const formData = new FormData(form)

       {/* fetch(getApiUrl('/api/contact'), {
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
            <Head title='Nous contacter | AFRICA FINTECH FORUM' />

            <Menu />

            <main style={{ marginTop: '8em' }}>
                <Section>
                    <Container>
                        <Row className="gx-5">
                            <Col xs={12} md={6}>
                                <h1 className="fw-bold mb-4 text-uppercase" style={{ color: 'var(--primary-color)' }}>
                                    <span className="fs-5 fw-normal">Nous</span> <br /> contacter
                                </h1>

                                <div className="mb-5">
                                    <p className="fs-5 w-75">
                                        Vous avez besoin d&apos;un complément d&apos;informations ? D&apos;un renseignement ? D&apos;une assistance ? Contactez-nous dès à présent ou laissez vos coordonnées. Un de nos conseillers prendra attache avec vous.
                                    </p>
                                </div>
                            </Col>

                            <Col xs={12} md={6}>
                                <Image src={getUrl('/contact.jpg')!} layout="fixed" loader={imageLoader} width={400} height={400} alt="Magadascar Fintech Forum 2022" />
                            </Col>
                        </Row>

                        <div className="py-5"></div>

                        <Row className="gx-5">
                            <Col xs={12} md={7}>
                                <Card className="shadow h-100 rounded-0">
                                    <Card.Body>
                                        <p>Abidjan, Côte d&apos;Ivoire</p>
                                        <p>Email: info@africafintechforum.net</p>
                                        <p>Tel: (+225) 07 59 87 69 98</p>

                                        <div className="mt-3">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.350296188692!2d-3.9981944000000005!3d5.3634167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7096d8668e01495!2zNcKwMjEnNDguMyJOIDPCsDU5JzUzLjUiVw!5e0!3m2!1sen!2sbj!4v1659450312531!5m2!1sen!2sbj" width="600" height="450"  allowFullScreen={false} loading="lazy" ></iframe>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} md={5}>
                                <Card className="shadow h-100 rounded-0">
                                    <Card.Body>
                                        <div className="d-flex justify-content-center">
                                            <p className="fw-bold py-2" style={{ color: 'var(--primary-color)' }}>
                                                Renseignez vos coordonnées
                                                
                                                <hr style={{
                                                    width: '4em',
                                                    height: '5px',
                                                    margin: '0 auto',
                                                    marginTop: '.8em',
                                                    opacity: 1,
                                                }} />
                                            </p>
                                        </div>

                                        <Form onSubmit={handleSubmitForm}>
                                            <Form.Group className="mb-2">
                                                <Form.Label>Civilité</Form.Label>
                                                
                                                <div>
                                                    <Form.Check inline label="M." name="civility" type="radio" value="M." checked={civility == 'M.'} onChange={() => setCivility('M.')} />
                                                    <Form.Check inline label="Mlle" name="civility" type="radio" value="Mlle" checked={civility == 'Mlle'} onChange={() => setCivility('Mlle')} />
                                                    <Form.Check inline label="Mme" name="civility" type="radio" value="Mme" checked={civility == 'Mme'} onChange={() => setCivility('Mme')} />
                                                </div>
                                            </Form.Group>

                                            <Form.Group className="mb-2" controlId="first_name">
                                                <Form.Label>Prénom(s)</Form.Label>
                                                <Form.Control name="first_name" type="text" required />
                                            </Form.Group>

                                            <Form.Group className="mb-2" controlId="last_name">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control name="last_name" type="text" required />
                                            </Form.Group>

                                            <Form.Group className="mb-2" controlId="email">
                                                <Form.Label>Adresse email</Form.Label>
                                                <Form.Control name="email" type="email" required />
                                            </Form.Group>

                                            <Form.Group className="mb-2" controlId="phone">
                                                <Form.Label>Numéro de téléphone</Form.Label>
                                                <Form.Control name="phone" type="text" required />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="message">
                                                <Form.Label>Message</Form.Label>
                                                <textarea name="message" cols={3} rows={3} className="form-control" required></textarea>
                                            </Form.Group>

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

export default Contact

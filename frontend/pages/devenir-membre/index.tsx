import { NextPage } from "next"
import React, { useState, FormEvent } from "react"
import { Footer, Head, Header, Menu, Section } from '../../components'
import { Container, Row, Col, Card, Form } from "react-bootstrap"
import style from './Style.module.css'
import { CountryDropdown } from 'react-country-region-selector'
import { getUrl, getApiUrl, getHref } from "../../utils"
import { CardStyle, ButtonStyle } from "../../styles"
import { useRouter } from "next/router"

const Register: NextPage = () => {
    const eventsCards = [
        {
            id: 1,
            title: 'Magadascar Fintech Forum 2022',
            image: getUrl('/a-la-une/2.jpeg'),
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error non illum. A consequatur amet at mollitia quis autem, culpa dolorem magni sed? Ducimus quia provident quos doloremque, impedit reiciendis.',
        },

        {
            id: 2,
            title: 'Africa Fintech Forum',
            image: getUrl('/a-la-une/3.jpg'),
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error non illum. A consequatur amet at mollitia quis autem, culpa dolorem magni sed? Ducimus quia provident quos doloremque, impedit reiciendis.',
        },

        {
            id: 3,
            title: 'Smart Conference',
            image: getUrl('/a-la-une/4.jpg'),
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error non illum. A consequatur amet at mollitia quis autem, culpa dolorem magni sed? Ducimus quia provident quos doloremque, impedit reiciendis.',
        }
    ]

    const router = useRouter();
    const [displayPeopleForm, setDisplayPeopleForm] = useState(true)
    const [country, setCountry] = useState('')

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

        const formData = new FormData(form)
        formData.append('country', country)

       /* fetch(getApiUrl('/api/members'), {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message)
                if (data.status == 'success') form.reset()
                router.push('/connexion')
            })*/
    }

    return (
        <> 
            <Head title='Devenir membre | AFRICA FINTECH FORUM' />

            <Menu />

            <Header title="Devenir membre" />

            <main>
                <Section>
                    <Container>
                        <h1 className="sectionTitle">C&apos;est quoi un membre AFF ? <hr /> </h1>

                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora officia deserunt distinctio illo voluptatem est incidunt provident, inventore facere temporibus porro esse, nobis fuga itaque repellendus recusandae. Accusamus, voluptatem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora officia deserunt distinctio illo voluptatem est incidunt provident, inventore facere temporibus porro esse, nobis fuga itaque repellendus recusandae. Accusamus, voluptatem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora officia deserunt distinctio illo voluptatem est incidunt provident, inventore facere temporibus porro esse, nobis fuga itaque repellendus recusandae. Accusamus, voluptatem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora officia deserunt distinctio illo voluptatem est incidunt provident, inventore facere temporibus porro esse, nobis fuga itaque repellendus recusandae. Accusamus, voluptatem.
                        </p>
                    </Container>
                </Section>

                <Section>
                    <Container style={{ paddingInline: '10em' }}>
                        <h1 className="sectionTitle">Les avantages d&apos;un membre AFF <hr /> </h1>

                        <Row xs={1} className="g-5">
                            {eventsCards.map((event, index) => {
                                if (index % 2 == 0) {
                                    return (
                                        <Col key={event.id}>
                                            <Card className={CardStyle.horizontal}>
                                                <Row>
                                                    <Col style={{ paddingRight: 0 }}>
                                                        <Card.Img src={event.image} />
                                                    </Col>
                                                    
                                                    <Col className="d-flex align-items-center justify-content-center ps-0">
                                                        <Card.Body>
                                                            <Card.Title className="fw-bold text-uppercase">{event.title}</Card.Title>
                                                            <Card.Text>{event.description}</Card.Text>
                                                        </Card.Body>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    )
                                }

                                return (
                                    <Col key={event.id}>
                                        <Card className={CardStyle.horizontal}>
                                            <Row>
                                                <Col className="d-flex align-items-center justify-content-center pe-0">
                                                    <Card.Body>
                                                        <Card.Title className="fw-bold text-uppercase">{event.title}</Card.Title>
                                                        <Card.Text>{event.description}</Card.Text>
                                                    </Card.Body>
                                                </Col>
                                                
                                                <Col style={{ paddingRight: 0 }}>
                                                    <Card.Img src={event.image} />
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>

                        <p className="fw-bold text-center mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero perspiciatis voluptatem, porro nam ipsum maiores ea iste ipsam omnis pariatur facere consequatur deleniti placeat laboriosam similique. Earum assumenda quae nesciunt?
                            <hr className={style.separator} />
                        </p>

                        <Card className="shadow mt-5 w-50 mx-auto">
                            <Card.Body>
                                <div className="d-flex justify-content-center">
                                    <p className="fw-bold py-2" style={{ color: 'var(--primary-color)' }}>
                                        Lorem ipsum dolor sit <hr className={style.separator} />
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
                                        <Form.Label>Raisons pour lesquelles vous souhaitez devenir sponsor AFF (PDF, lettre signée)</Form.Label>
                                        <Form.Control name="file[]" type="file" required multiple />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="image">
                                        <Form.Label>Logo</Form.Label>
                                        <Form.Control name="image" type="file" required />
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
                    </Container>
                </Section>
            </main>

            <Footer />
        </>
    )
}

export default Register

import { NextPage } from "next"
import React, { FormEvent } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Section } from ".."
import style from './Style.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faLinkedinIn, faTelegram, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faCloudArrowDown, faEnvelope, faLocationDot, faMobileScreenButton, faPhone } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { getApiUrl, getHref, getUrl } from "../../utils"
import Image from "next/image"
import { imageLoader } from "../../utils/image-loader"
import { ButtonStyle } from '../../styles'

export const Footer: NextPage = () => {
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

       /* fetch(getApiUrl('/api/newsletter'), {
            method: 'post',
            body: new FormData(form)
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message)
                if (data.status == 'success') form.reset()
            })*/
    }

    return (
        <>
            {/*<Section className={style.newsletter}>
                <Container className="py-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="w-25 mb-0">
                            Souscrivez à notre newsletter pour être informé de l&apos;actualité de l&apos;industrie et de nos différentes activités.
                        </p>

                        <form className="d-flex align-items-center" onSubmit={handleFormSubmit}>
                            <input type="email" name="email" placeholder="Entrez votre email" className="form-control" style={{ width: '350px' }} required />
                            <button type="submit" className={"btn ms-4 " + ButtonStyle.secondary}>Souscrire</button>
                        </form>
                    </div>
                </Container>
            </Section>*/}

            <Section style={{ marginBottom: 0 }}>
                <Container className="mt-5">
                    <Row className="gx-5">
                        <Col md={4}>
                            <Image src={getUrl('/logo.png')!} loader={imageLoader} layout="fixed" width={250} height={40} alt="AFRICA FINTECH FORUM" title="AFRICA FINTECH FORUM" />
                            <p>Building together inclusive Finance Infrastructure</p>
                            <div className="d-flex flex-column mt-4">

                                <div className="d-flex align-items-center my-4">
                                    <FontAwesomeIcon icon={faMobileScreenButton} size="lg" color="#0070cc" />

                                    <Link href={getHref('#')}>
                                        <a className={style.link}>
                                            <FontAwesomeIcon icon={faWhatsapp} size="lg" color="#0070cc" />
                                        </a>
                                    </Link>

                                    <Link href={getHref('#')}>
                                        <a className={style.link}>
                                            <FontAwesomeIcon icon={faTelegram} size="lg" color="#0070cc" />
                                        </a>
                                    </Link>

                                    <div className="ms-3 d-flex flex-column">
                                        <span>(+225) 07 59 87 69 98 </span>
                                    </div>
                                </div>

                                <span className="mb-3 d-flex align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" color="#0070cc" />

                                    <div className="ms-3 d-flex flex-column">
                                        <span>info@africafintechforum.org</span>
                                        <span>partnership@africafintechforum.org</span>
                                    </div>
                                </span>

                                <span className="mb-3">
                                    <FontAwesomeIcon icon={faLocationDot} size="lg" color="#0070cc" />
                                    <span className="ms-3">Boulevard Latrille, Rue K22 - Cocody 2 Plateaux, Abidjan - Côte d'Ivoire</span>
                                </span>
                            </div>
                        </Col>

                        <Col md={4}>
                            <h5 className={"mb-4 " + style.title}>A propos</h5>

                            <p>
                                <Link href={getHref('a-propos')}>
                                    <a className={style.link}>Qui sommes-nous ?</a>
                                </Link>
                            </p>

                            {/* <p>
                                <Link href={getHref('#')}>
                                    <a className={style.link}>The Africa Fintech Forum</a>
                                </Link>
                            </p>

                            <p>
                                <Link href={getHref('#')}>
                                    <a className={style.link}>Africa Fintech Tour</a>
                                </Link>
                            </p>

                            <p>
                                <Link href={getHref('#')}>
                                    <a className={style.link}>Open Banking</a>
                                </Link>
                            </p>

                            <p>
                                <Link href={getHref('#')}>
                                    <a className={style.link}>Smart Village</a>
                                </Link>
                            </p>

                            <p>
                                <Link href={getHref('#')}>
                                    <a className={style.link}>Capital Market</a>
                                </Link>
                            </p> */}
                        </Col>

                        <Col md={4}>
                            <h5 className={"mb-4 " + style.title}>Contact</h5>

                            <Link href={getHref('nous-contacter')}>
                                <a className={style.link}>Nous contacter</a>
                            </Link>

                            <div className="d-flex align-items-center my-4">
                                <Link href={getHref('#')}>
                                    <a className={style.link}>
                                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                                    </a>
                                </Link>

                                <Link href={getHref('#')}>
                                    <a className={"mx-4 " + style.link}>
                                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                                    </a>
                                </Link>

                                <Link href={getHref('#')}>
                                    <a className={style.link}>
                                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                                    </a>
                                </Link>

                                <Link href={getHref('#')}>
                                    <a className={"mx-4 " + style.link}>
                                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                                    </a>
                                </Link>

                                <Link href={getHref('#')}>
                                    <a className={style.link}>
                                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                                    </a>
                                </Link>
                            </div>

                            <Link href={getHref('#')}>
                                <span className="ms-2">
                                    <Link href="./pdf/PLAQUETTE AFF.pdf">
                                        <a className={"btn " + ButtonStyle.secondary} download>Téléchargez notre documentation</a>
                                    </Link>
                                </span>
                            </Link>
                        </Col>
                    </Row>
                </Container>

                <hr className={"mt-5 mb-4 " + style.separator} />

                <div className="d-flex justify-content-center pb-4">
                    Copyright &copy; <span className="fw-bold mx-2">Africa Fintech Forum</span> {new Date().getFullYear()}
                </div>
            </Section>
        </>
    )
}

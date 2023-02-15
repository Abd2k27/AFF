import { NextPage } from 'next'
import style from './Style.module.css'
import { Head } from '../../components'
import React, { useState, FormEvent, SyntheticEvent } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import Image from 'next/image'
import { imageLoader, getUrl, getHref, getApiUrl } from '../../utils'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Login: NextPage = () => {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    /*const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            await fetch(getApiUrl('/api/login'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    email, password
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status == 'success') {
                        localStorage.setItem('auth_token', data.token);
                        localStorage.setItem('auth_user', data.user);
                        router.push('/')
                    }
                    else{
                        // console.log(data.error);
                        setError(data.error)
                    }
                })
        } catch (error) {
            
        }
        
    }*/
    return (
        <>
            <Head title='Connexion | AFRICA FINTECH FORUM' />

            <main className="min-vh-100 position-relative">
                <div className="position-absolute p-4">
                    <Link href="index.html">
                        <a>
                            <Image src={getUrl('/logo.png')!} loader={imageLoader} layout="fixed" width={180} height={30} alt="AFRICA FINTECH FORUM" title="AFRICA FINTECH FORUM" />
                        </a>
                    </Link>
                </div>

                <Row className="position-absolute h-100 w-100 ms-0">
                    <Col md={4} className="d-flex flex-column justify-content-center" style={{ paddingInline: '6em' }}>
                        <h1 className={style.title}>Connexion <hr /></h1>

                        <p className="mt-3 mb-5">Pas encore membre ?
                            <Link href={getHref('devenir-membre')}>
                                <a className='ms-1'>Devenez membre ici</a>
                            </Link>
                        </p>

                        {/*<Form onSubmit={submit}>
                            <Form.Group className="mb-2" controlId="email">
                                <Form.Label>Adresse email</Form.Label>
                                <Form.Control type="email" name='email' onChange={e => setEmail(e.target.value)} required />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="password">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" name='password' onChange={e => setPassword(e.target.value)} required />
                            </Form.Group>

                            <Form.Check type="checkbox" label="Rester connecter" id="remember-me" className="my-3" />

                            <Button variant="primary" type="submit" className="w-100">
                                Connexion
                            </Button>
                        </Form>*/}
                        <p className='text-danger mt-2' style={{ textAlign:"center", fontWeight:"bold" }}>{error}</p>
                    </Col>

                    <Col md={8} className={style.right}></Col>
                </Row>
            </main>
        </>
    )
}

export default Login

import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'
import { AuthProvider } from './AuthContext'


function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossOrigin='anonymous'></Script>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </>
    )

}

export default MyApp

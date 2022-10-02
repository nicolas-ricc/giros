import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" as='Montserrat' rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" as='Lato' rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Average&display=swap" as='Average' rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" as='Kumbh' rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
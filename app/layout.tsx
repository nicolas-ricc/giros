import React from 'react'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { Nav } from '../components/Header/Nav'
import { Footer } from '../components/Footer/Footer'
import { contactInfo } from '../dao/statics/staticsDAO'

export default function Layout({ children }: { children: React.ReactNode, contactInfo: contactInfo }) {

    return (
        <div className={styles.container} style={{ margin: "auto", marginLeft: 0 }}>
            <Head>
                <title>Revista Giros</title>
                <meta name="description" content="Giros literary magazine" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <header className="px-0 mx-0 top-0">
                <Nav />
            </header>
            <main className='mt-[7rem] h-full w-full p-0'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>

        </div >
    )
}
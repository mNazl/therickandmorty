import Navigation from '../components/navigation'
import Head from 'next/head'

function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Mlk'in web sitesi</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
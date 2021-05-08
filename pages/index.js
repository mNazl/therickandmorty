import Layout from '../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import Link from 'next/link'
import slug from 'slug'

function HomePage({characters}) {
    return (
        <Layout>
            <Head>
                <title>Ana Sayfa</title>
            </Head>
            <h1 className="title">THE RICK AND MORTY</h1>
            
            <ul>
            {characters.results.map(character => (
            <li key = {character.id}>
                <Link href="/character/[slug]" 
                as={`/character/${slug(character.name)}-${character.id}`}><a>{character.name}</a></Link>
            </li>
            ))}
            </ul>
           
            <style jsx>{``}</style>
        </Layout>
    )
}

export async function getStaticProps(){
    // data fetch
    const data = await unfetch ("https://rickandmortyapi.com/api/character/")
    const characters = await data.json()
    console.log("character", characters)
    return {
        props: {
            characters // key value aynı olduğunda sadece key yazman yeterli
        }
    }
}
export default HomePage 
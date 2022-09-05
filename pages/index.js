import Head from 'next/head'
import Image from 'next/image'
import Hero from './components/Hero'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Sanctm</title>
        <meta name="description" content="Web3 Real Estate Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
    </div>
  )
}

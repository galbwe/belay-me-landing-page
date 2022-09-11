import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BelayMe</title>
        <meta name="description" content="Make climbing friends fast!" />
      </Head>

      <main>
        <Hero heading="Make Climbing Friends Fast" />
      </main>
    </div>
  )
}

export default Home

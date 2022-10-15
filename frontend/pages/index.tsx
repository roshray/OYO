import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>OYO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {/* Banner */}
      <Banner />
    </div>
  )
}

export default Home

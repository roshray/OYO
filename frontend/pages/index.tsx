import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, cardsData}){
  return (
    <div className="">
      <Head>
        <title>OYO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='p-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* pull some data from a server - API endpoint */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard 
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}

          </div>        
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({img, title, }) => (
              <MediumCard 
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G')
  const exploreData = await res.json()
  
  const resp = await fetch("https://www.jsonkeeper.com/b/VHHT")
  const cardsData = await resp.json()
  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}



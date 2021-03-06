import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from './portofolio/Contact'
import HomePage from './portofolio/HomePage'
import Services from './portofolio/Services'
import Work from './portofolio/Work'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rizal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <Navbar />
      <HomePage />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

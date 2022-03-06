import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { HomePage } from '../components/HomePage'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <main>
       <HomePage />
      </main>
    </>
  )
}

export default Home

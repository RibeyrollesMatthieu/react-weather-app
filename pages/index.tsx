import type { NextPage } from 'next'
import { Header } from '../components/header/Header'
import { HomePage } from '../components/HomePage'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <HomePage />
    </>
  )
}

export default Home

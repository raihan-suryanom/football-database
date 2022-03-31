import type { NextPage } from 'next'
import Head from 'next/head'
import { useAppSelector } from '../app/hooks'

const Home: NextPage = () => {
  const state = useAppSelector((state) => state.counter)
  console.log(state)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>f</p>
    </>
  )
}

export default Home

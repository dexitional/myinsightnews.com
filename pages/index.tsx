import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import IndexContent from '../components/IndexContent'

const Home: NextPage = () => {
 
  return (
    <Layout>
       <IndexContent />
    </Layout>
  )
}

export default Home

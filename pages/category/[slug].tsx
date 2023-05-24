import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavLink from '../../components/NavLink'
import { HiOutlineMoon } from 'react-icons/hi'
import { FaTwitter,FaYoutube,FaSoundcloud,FaSearch,FaRegArrowAltCircleDown,FaFacebookF,FaHamburger } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { IoMdMenu,IoMdSearch } from 'react-icons/io'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'
import CategoryContent from '../../components/CategoryContent'
import { sanityClient } from '../../sanity'

const Home: NextPage = ({data}: any) => {
  return (
    <Layout>
       <CategoryContent  data={data} />
    </Layout>
  )
}

interface Props {
  slug: string,
  context: any
}

const query = `
{
  "top": *[_type == "post" && "top" in categories[]->slug.current && $slug in categories[]->slug.current] | order(_id desc) {title,slug,"name": author->name,"avatar": author->image,"categories": categories[]->{title,slug},mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }[0..4],
  "news": *[_type == "post" && $slug in categories[]->slug.current] | order(_id desc) {title,slug,"name": author->name,"avatar": author->image,"categories": categories[]->{title,slug},mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }[0..8],
}
`

export async function getServerSideProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const results = await sanityClient.fetch(query, { slug })
  return {
    props: {
      data: results,
    }
  }
}



export default Home


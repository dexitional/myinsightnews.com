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

const Home: NextPage = () => {
  const links = [
     { name:'HOME', url: '/', active: true },
     { name:'NEWS', url: '/news' },
     { name:'POLITICS', url: '/politics' },
     { name:'EDUCATION', url: '/education' },
     { name:'ENTERTAINMENT', url: '/showbiz' },
     { name:'HEALTH', url: '/health' },
     { name:'ECONOMIC', url: '/economic' },
     { name:'LAW', url: '/law' },
     { name:'SPORTS', url: '/sports' }
  ]

  return (
    <Layout>
       <CategoryContent />
    </Layout>
  )
}

export default Home

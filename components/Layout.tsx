import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { IoMdMenu,IoMdSearch } from 'react-icons/io'



function Layout({ children }: any) {

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
    <div className="bg-white flex flex-col justify-between">
        <Header />
        <div className="">{children}</div>
        <Footer />
    </div>
  )
}

export default Layout
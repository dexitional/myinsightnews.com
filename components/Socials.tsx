import React from 'react'
import SocialIcon from './SocialIcon'
import { FaFacebookF,FaTwitter,FaWhatsapp,FaLinkedin,FaTelegram, FaEnvelope, FaPrint } from 'react-icons/fa'
import SocialPrint from './SocialPrint'

interface Props {
  title: string;
  slug: string;
  siteUrl: string;
}

{/*
    <SocialIcon Icon={FaLinkedin} className="text-white bg-sky-700 py-3 px-3 w-9 h-9 rounded-sm" link={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI('https://insidergh.com/'+slug)}&title=${encodeURI(title)}`}/>
    <SocialIcon Icon={FaTelegram} className="text-white bg-sky-500 py-3 px-3 w-9 h-9 rounded-sm" link={`https://telegram.me/share/url?url=${encodeURI('https://insidergh.com/'+slug)}&text=${encodeURI(title)}`}/>
    <SocialIcon Icon={FaEnvelope} className="text-white bg-red-800 py-3 px-3 w-9 h-9 rounded-sm" link={`mailto:?subject=${encodeURI(title)}&body=${encodeURI('https://insidergh.com/'+slug)}`}/>
    <SocialPrint Icon={FaPrint} className="text-white bg-slate-600 py-3 px-3 w-9 h-9 rounded-sm" />
*/}

function Socials({title,slug,siteUrl}: Props) {
  return (
    <div className="my-4 flex space-x-1 print:hidden">
        <SocialIcon Icon={FaFacebookF} handle="Facebook" handleColor="bg-blue-900" className="text-white bg-blue-900 py-2.5 px-2.5 w-9 h-9 rounded-sm" link={`https://www.facebook.com/sharer.php?u=${encodeURI(siteUrl+'/'+slug)}`}/>
        <SocialIcon Icon={FaTwitter} handle="Twitter" handleColor="bg-blue-400" className="text-white bg-blue-400 py-2.5 px-2.5 w-9 h-9 rounded-sm" link={`https://twitter.com/intent/tweet?text=${encodeURI(title)}&url=${encodeURI(siteUrl+'/'+slug)}`}/>
        <SocialIcon Icon={FaWhatsapp} handle="Whatsapp" handleColor="bg-lime-600" className="text-white bg-lime-600 py-2.5 px-2.5 w-9 h-9 rounded-sm" link={`https://api.whatsapp.com/send?text=${encodeURI(title)}%20%0A%0A%20${encodeURI(siteUrl+'/'+slug)}`}/>
        <SocialIcon Icon={FaLinkedin} handle="" handleColor="" className="text-white bg-sky-700 py-2.5 px-2.5 w-9 h-9" link={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(siteUrl+'/'+slug)}&title=${encodeURI(title)}`}/>
        <SocialIcon Icon={FaTelegram} handle="" handleColor="" className="text-white bg-sky-500 py-2.5 px-2.5 w-9 h-9" link={`https://telegram.me/share/url?url=${encodeURI(siteUrl+'/'+slug)}&text=${encodeURI(title)}`}/>
        <SocialIcon Icon={FaEnvelope} handle="" handleColor="" className="text-white bg-red-800 py-2.5 px-2.5 w-9 h-9" link={`mailto:?subject=${encodeURI(title)}&body=${encodeURI(siteUrl+'/'+slug)}`}/>
        <SocialPrint Icon={FaPrint} className="text-white bg-slate-600 py-2.5 px-2.5 w-9 h-9" />
     </div>
  ) 
}

export default Socials
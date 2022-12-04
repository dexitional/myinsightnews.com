import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      {/* socials & Search */}
      <section className="w-full border-t-2 border-t-pink-300 border-b border-b-gray-200 ">
         <div className="mx-auto w-full max-w-6xl h-8 flex flex-row justify-end">
           <div className="w-2/5 h-full flex flex-row items-center justify-end space-x-2">
             <div className="mx-4">S</div>
             <span className="mx-4 text-xs text-gray-400/70 font-openSans">Saturday, December 3, 2022</span>
             <div className="flex items-center space-x-1">
                <div className="w-6 h-6 flex items-center justify-center bg-blue-900/80 text-lg text-white font-bold cursor-pointer">f</div>
                <div className="w-6 h-6 flex items-center justify-center bg-blue-400/80 text-lg text-white font-bold cursor-pointer">t</div>
                <div className="w-6 h-6 flex items-center justify-center bg-red-700/80 text-lg text-white font-bold cursor-pointer">vi</div>
                <div className="w-6 h-6 flex items-center justify-center bg-orange-400/80 text-lg text-white font-bold cursor-pointer">s</div>
             </div>
             <div className="p-1 w-12 h-6 flex items-center border rounded-xl bg-gray-200/70">
               <span className="w-4 h-4 rounded-full bg-white text-xs text-gray-500 text-center font-bold cursor-pointer">D</span>
             </div>
           </div>
         </div>
      </section>

      {/* navigations */}
      <section className="h-12 border-b ">
        <nav className="mx-auto w-full max-w-6xl h-full  flex items-center">
          <div className="px-4 h-full bg-pink-50 text-xl tracking-wider font-bold text-pink-700 flex items-center border-l-4 border-pink-600 font-kaushan">myinsightnews.com</div>
          <div className="h-full flex-1 flex justify-end">
              <ul className="h-full flex items-center justify-end space-x-2 font-opensans">
                 <li className="px-4 h-full flex items-center font-bold hover:bg-pink-50 cursor-pointer">HOME</li>
                 <li className="px-4 h-full flex items-center font-bold hover:bg-pink-50 cursor-pointer">NEWS</li>
                 <li className="px-4 h-full flex items-center font-bold hover:bg-pink-50 cursor-pointer">POLITICS</li>
                 <li className="px-4 h-full flex items-center font-bold hover:bg-pink-50 cursor-pointer">EDUCATION</li>
                 <li className="px-4 h-full flex items-center font-bold hover:bg-pink-50 cursor-pointer">ENTERTAINMENT</li>
                 <li className="px-4 h-full flex items-center font-bold hover:bg-pink-50 cursor-pointer">HEALTH</li>
                 <li className="px-4 h-full flex items-center font-bold hover:bg-pink-50 cursor-pointer">ECONOMIC</li>
                 <li className="px-4 h-full flex items-center font-bold hover:bg-pink-50 cursor-pointer">LAW</li>
                 <li className="px-4 h-full flex items-center font-bold hover:bg-pink-50 cursor-pointer">SPORTS</li>
              </ul>
          </div>
        </nav>
      </section>
      {/* Title Section */}
      {/* top summary Sesction */}
      {/* main content */}

    </div>
  )
}

export default Home

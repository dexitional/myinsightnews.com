import type { NextPage } from 'next'
import Layout from '../components/Layout'
import RelatedCard from '../components/RelatedCard'
import RelatedMainCard from '../components/RelatedMainCard'
import SectionTitle from '../components/SectionTitle'
import Sidebar from '../components/Sidebar'
import Socials from '../components/Socials'

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
     <div className="my-2 mx-auto w-full sm:max-w-6xl">
         {/* Main content */}
      <article className="my-8 w-full sm:max-w-6xl min-h-screen mx-auto flex flex-col space-y-3 sm:space-x-4 sm:space-y-0">
         {/* Content */}
         <div className="sm:py-4 px-4 w-full flex flex-col space-y-5">
            <h1 className="text-3xl sm:text-5xl font-bold sm:leading-[3.7rem]">Investment in technology critical to economic growth – Elsie Addo Awadzi</h1>
            <p className="text-[0.88rem]">
              <span>by </span>
              <span className="font-bold">citibusinessnews</span>
              <span className="font-bold"> --- </span>
              <span>September 2, 2022 in </span>
              <span className="font-bold">Local Economy, TECHNOLOGY, Top Stories </span>
            </p>
         </div>
         <div className="w-full flex flex-col sm:flex-row sm:space-x-4 ">
            <div className="px-2 sm:px-0 flex-1">
                <img className="" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                <Socials title="I need Money" slug="john-kobby-needs-me" siteUrl="https://myinsightnews.com" />
                <div className="adsbox"></div>
                <div>
                  Second Deputy Governor of the Bank of Ghana, Elsie Addo Awadzi has underscored the need for more investments to be made in technology to ensure economic growth.
                  Madam Elsie Addo Awadzi believes though the COVID-19 pandemic gave rise to the use of technology, there are some gaps in access to it.
                  Delivering her speech as the Guest of honor at the 75th anniversary launch of the University of Ghana, Elsie Addo Awadzi urged current managers of the university to come up with more innovations and strategies to improve effective teaching and learning.
                </div>
                <div className="my-10">
                  <SectionTitle title="Related Posts" />
                  <RelatedMainCard title="Insurance companies want exemption from debt exchange programme" link="/sdsjdd" excerpt="The Ghana Insurers Association has called for the exemption of insurance companies from the domestic debt exchange program. According to..." author="ANITA ARTHUR KISSI-MIREKU" imgUrl={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                  <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8">
                     <RelatedCard title="Insurance companies want exemption from debt exchange programme" link="/sdsjdd" imgUrl={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                     <RelatedCard title="Insurance companies want exemption from debt exchange programme" link="/sdsjdd" imgUrl={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                     <RelatedCard title="Insurance companies want exemption from debt exchange programme" link="/sdsjdd" imgUrl={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                     <RelatedCard title="Insurance companies want exemption from debt exchange programme" link="/sdsjdd" imgUrl={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                  </div>
                </div>
            </div>
            
            <Sidebar />
         </div>
         
      </article>
     </div>
    </Layout>
  )
}

export default Home

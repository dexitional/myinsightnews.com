import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import RelatedCard from '../components/RelatedCard'
import RelatedMainCard from '../components/RelatedMainCard'
import SectionTitle from '../components/SectionTitle'
import Sidebar from '../components/Sidebar'
import Socials from '../components/Socials'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import PortableText,{blockContentToPlainText} from 'react-portable-text'
import Image from 'next/image'

interface Props {
   data: any,
   post: Post,
   recent: [Post]
 }

const Home = ({ post,recent }: Props) => {

  const mainRecent = recent[0];
  const siteUrl = `https://myinsightnews.com`

  return (
    <>
    <Head>
         <title>Myinsightnews.com | {post?.title} </title>
         <link rel="icon" href="/favicon.ico" />
         <meta name="HandheldFriendly" content="true" />
         <meta property="og:title" content={post?.title} />
         <meta property="og:image" content={post?.mainImage && urlFor(post?.mainImage).width(600).url()} />
         <meta property="og:type" content="profile.image" />
         <meta property="og:url" content={`${siteUrl}/${post?.slug?.current}`} />
         <meta name="description" content={blockContentToPlainText(post?.body).substring(0,160)} />
         <meta name="keywords" content={post?.keywords} />
         <meta name="author" content={post?.name} />
    </Head>
    <Layout>
     <div className="my-2 mx-auto w-full sm:max-w-6xl">
         {/* Main content */}
      <article className="my-8 w-full sm:max-w-6xl min-h-screen mx-auto flex flex-col space-y-3 sm:space-x-4 sm:space-y-0">
         {/* Content */}
        
         title={post?.title} date={post?._createdAt} author={post?.name}

         <div className="sm:py-4 px-4 w-full flex flex-col space-y-5">
            <h1 className="text-3xl sm:text-5xl font-bold sm:leading-[3.7rem]">{post?.title}</h1>
            <p className="text-[0.88rem]">
              <span>by </span>
              <span className="font-bold">{post?.name}</span>
              <span className="font-bold"> --- </span>
              <span>{post?._createdAt} in </span>
              <span className="font-bold">{ post?.categories?.map(r => r?.title)?.join(', ')}  </span>
            </p>
         </div>
         <div className="w-full flex flex-col sm:flex-row sm:space-x-4 ">
            <div className="px-2 sm:px-0 flex-1">
                <div className="relative h-[30rem] w-full rounded">
                   <Image className="object-cover object-top" src={post?.mainImage && urlFor(post?.mainImage)?.width(786).url()} alt={post?.title} fill />
                </div>
                <Socials title={post?.title} slug={post?.slug.current} siteUrl={siteUrl} />
                <div className="adsbox"></div>
                <div>
                  <PortableText 
                        className={`text-black/80`}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={post?.body}
                        serializers={{
                           h1: (props:any) => (<h1 className="text-2xl font-bold my-3" {...props}/>),
                           h2: (props:any) => (<h2 className="text-xl font-bold my-3" {...props}/>),
                           p: ({children}: any) => (<p className="my-20">{children}</p>),
                           image:  ({children}:any) => (
                              <div className="my-3 p-2 rounded bg-slate-50/50">{children}</div>
                           ),
                           li: ({children}: any) => (<li className="ml-4 list-disc">{children}</li>),
                        }}
                     />
                </div>
                
                <div className="my-10">
                  <SectionTitle title="Related Posts" />
                  <RelatedMainCard title={mainRecent?.title} link={`/${mainRecent?.slug.current}`} excerpt={blockContentToPlainText(mainRecent?.body).substring(0,160)} author={mainRecent?.name} imgUrl={mainRecent?.mainImage && urlFor(mainRecent?.mainImage)?.width(300).url()} />
                  <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8">
                     { recent?.filter( (r: any, i: React.Key) => i !== 0 ).map((row: any,i: React.Key) => (<RelatedCard key={i} title={row?.title} link={`/${row?.slug.current}`} imgUrl={urlFor(row?.mainImage)?.width(200).url()} />)) }
                  </div>
                </div>
            </div>
            
            <Sidebar />
         </div>
         
      </article>
     </div>
    </Layout>
    </>
  )
}



interface Props {
   slug: string,
   context: any
 }
 
 const query = `
 {
   "post": *[_type == "post" && slug.current == $slug][0]{title,slug,"name": author->name,"avatar": author->image,"categories": categories[]->{title,slug},mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} },
   "recent": *[_type == "post"] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} } [0...9]
 }
   `
 
 export async function getStaticPaths() {
   const paths = await sanityClient.fetch(
     `*[_type == "post" && defined(slug.current)][].slug.current`
   )
 
   return {
     paths: paths.map((slug: Props) => ({params: {slug}})),
     fallback: true,
   }
 }
 
 export async function getStaticProps(context: any) {
   // It's important to default the slug so that it doesn't return "undefined"
   const { slug = "" } = context.params
   const result = await sanityClient.fetch(query, { slug })
   return {
     props: {
       post: result?.post,
       recent: result?.recent
     },
     revalidate: 600,
   }
 }
 
 export default Home
 

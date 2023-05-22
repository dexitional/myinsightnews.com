
import Layout from '../components/Layout'
import IndexContent from '../components/IndexContent'
import { sanityClient } from '../sanity.js'

const Home = ({data}: any) => {
 
  return (
    <Layout>
       <IndexContent data={data} />
    </Layout>
  )
}

export default Home


export const getServerSideProps = async()  => { 
    
  const query = `
  {  
    "top": *[_type == "post" && "top" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title,slug},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4],
    "news": *[_type == "post" && "news" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title,slug},mainImage,slug,_createdAt,body} [0...8],
  }`;

 /* const query = `
  {  
    "trending": *[_type == "post" && "trending" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4],
    "top": *[_type == "post" && "top" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4],
    "spotlight": *[_type == "post" && "spotlight" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4],
    "recent": *[_type == "post"] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body} [0...4],
    "news": *[_type == "post" && "news" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body} [0...5],
    "foreign": *[_type == "post" && "foreign" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...5],
    "politics": *[_type == "post" && "politics" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...5],
    "sports": *[_type == "post" && "sports" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...5],
    "showbiz": *[_type == "post" && "showbiz" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...5],
    "law": *[_type == "post" && "opinion" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...5],
    "business": *[_type == "post" && "business" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...5],
  }`;
*/
     

  const results = await sanityClient.fetch(query);
  console.log(results)
  return {
    props: {
      data: results,
    }
  }
}

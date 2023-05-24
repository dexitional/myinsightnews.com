import {PortableText, toPlainText, PortableTextComponents} from '@portabletext/react'
import Image from 'next/image'
import {getImageDimensions} from '@sanity/asset-utils'
import { urlFor } from '../sanity'
import Link from 'next/link'
export const RichTextComponents:PortableTextComponents = {
    types: {
        image: ({ value }: any) => {
          const { width, height } = getImageDimensions(value)
          return (
            <div className="" style={{ width,height }}>
              <Image className="object-cover" src={ urlFor(value).url() } alt="" fill />
            </div>
          )
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="mt-lg list-decimal">{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-5xl py-10 font-bold">{ children }</h1>
        ),
        h2: ({ children }: any) => (
            <h1 className="text-5xl py-10 font-bold">{ children }</h1>
        ),
        h3: ({ children }: any) => (
            <h1 className="text-5xl py-10 font-bold">{ children }</h1>
        ),
        h4: ({ children }: any) => (
            <h1 className="text-5xl py-10 font-bold">{ children }</h1>
        ),
        blockquote : ({ children }: any) => (
            <blockquote className="border-l-pink-700 border-l-4 pl-5 my-5">{ children }</blockquote>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
          return (
            <Link href={value.href} className="underline decoration-blue-950 hover:decoration-black" />
          )
        
        }
    }
}
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {sanityClient, urlFor} from "../sanity"
import {Post} from "../typing"
import Link from 'next/link'

interface Props{
  posts:[Post];
}
export default function Home({posts} : Props){
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* HEADER */}
  <Header/>
  <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0 '>
<div className='px-10 space-y5'>
  <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-black decoration-4'>Start</span> {" "} is a new project next js with Sanity </h1>
  <h2>it's a simple project and free tutorial nextjs and sanity</h2>
  <h6>by eta</h6>
</div>
<img className='hidden md:inline-flex'src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt=''/>
</div>
{/* Post */}
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
  {posts.map((post) =>(
    <Link key={post._id} href={`/post/${post.slug.current}`}>
      <div className='border rounded-lg group cursor-pointer'>
        <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
        src={urlFor(post.mainImage).url()!} alt=""/>
      <div className='flex justify-between p-5 bg-white'>
      <div>
        <p className='tex-lg font-bold'>{post.title}</p>
        <p className='text-xs'> {post.description} by {post.author.name}</p>
      </div>
      <img className='h-10 w-10 rounded-full' src={urlFor(post.author.image).url()!} alt=""/>
      </div>
</div>
    </Link>
  ))}
</div>



      {/* <
      //flex min-h-screen flex-col items-center justify-center py-2 = center
      main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> 

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}

export const getServerSideProps = async() =>{
  const query = `*[_type == "post"]{
    _id,
    title,
    author->{
    name,
    image
    },
    description,
    mainImage,
    slug
    }`
    const posts = await sanityClient.fetch(query);
    return{
      props:{
        posts,
      },
    }

}

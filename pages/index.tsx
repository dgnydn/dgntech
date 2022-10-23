/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactComponent from '../components/contact.component'
import LayoutComponent from '../components/layout.component'
import WorksComponent from '../components/works.component'
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <LayoutComponent>
      <NextSeo
        title="DGNTECH - Doğan Aydın - Senior Developer"
        description="Web development, mobile development, and design. I'm a senior developer with 15+ years of experience."
        canonical="https://www.dgntech.co/"
        openGraph={{
          url: 'https://www.dgntech.co',
          title: 'DGNTECH - Doğan Aydın - Senior Developer',
          description: "Web development, mobile development, and design. I'm a senior developer with 15+ years of experience.",
          images: [
            { url: 'https://www.dgntech.co/og.png', width: 1366, height: 666, alt: 'DGNTECH - Doğan Aydın - Senior Developer', secureUrl: 'https://www.dgntech.co/og.png', type: 'image/png' }
          ],
          siteName: 'DGNTECH - Doğan Aydın - Senior Developer',
          locale: 'en_US',
          type: 'website'
        }}
        twitter={{
          handle: '@dgntech',
          site: '@dgntech',
          cardType: 'summary_large_image',
        }}
      />
      <div className='w-full flex flex-col md:flex-row min-h-screen mx-center justify-center md:space-x-6 items-center'>
        <div className='mx-10 md:mx-0'>
          <Image src="/profile.jpg" alt='Profile picture of me' width={400} height={400} className='rounded-full grayscale shadow-md hover:grayscale-0' />
        </div>
        <div className='w-full md:w-1/2'>
          <h1 className="text-6xl font-bold text-gray-200 mb-2 pb-2 text-center md:text-left">Hello, I'm Doğan</h1>
          <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 w-full max-w-6xl mb-6 rounded-full"></div>
          <div className="text-gray-200 mt-2 pt-2 text-center md:text-left leading-loose md:leading-normal font-medium">
            <p>I'm a senior software developer who is passionate about creating technology to elevate people, and building community. Some technologies I enjoy working with include <span className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1'>ReactJS</span>, <span className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1'>NextJS</span>, <span className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1'>NodeJS</span>, and <span className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1'>MongoDB</span>.</p>
            <p className='py-2'>I'm currently working at <Link href="https://getdoni.com"><a className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1'>Doni</a></Link>, an AI content generation service.</p>
            <p>Solidity, Web3, and Ethereum are my current interests. I'm also a big fan of open source. You can find some of my projects here.</p>
          </div>
        </div>
      </div>
      <WorksComponent></WorksComponent>
      <ContactComponent></ContactComponent>
    </LayoutComponent>
  )
}

export default Home

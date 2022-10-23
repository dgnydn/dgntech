/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function WorksComponent() {
  return (
    <div className="mt-10 md:mt-0" id="works">
      <h2 className="font-bold text-8xl text-gray-200 text-center mb-2 pb-2">Works</h2>
      <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 w-full max-w-6xl rounded-full mb-32"></div>
      <div className="flex flex-col max-w-5xl items-center space-y-10 mb-10">
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <Zoom>
              <Image src="/projects/preview/mapelabs.png" alt="Mape Labs NFT Project" width={460} height={244.2} />
            </Zoom>
          </div>
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <h2 className="font-black text-4xl text-white mb-2">Mape Labs</h2>
            <p className="text-gray-200 font-bold">An NFT Project on Solana I made for Mape Labs. Make a choose between "Bearish" and "Bullish", and earn NFT if you win.</p>
            <div className="flex text-gray-200 gap-4 flex-wrap">
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Solana</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Next.js</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>MongoDB</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Tailwind</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Web3</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <Zoom>
              <Image src="/projects/preview/racearth.png" alt="Racearth Metaverse Project" width={460} height={244.2} />
            </Zoom>
          </div>
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <h2 className="font-black text-4xl text-white mb-2">Racearth</h2>
            <p className="text-gray-200 font-bold">A Metaverse Project I made for a client. Buy your area and race against others.</p>
            <div className="flex text-gray-200 gap-4 flex-wrap">
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Ethereum</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Next.js</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>MySQL</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>MongoDB</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Tailwind</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Laravel</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Mapbox</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>H3</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <Zoom>
              <Image src="/projects/preview/agte.png" alt="Ankara Gelişim Tarama Envanteri" width={460} height={244.2} />
            </Zoom>
          </div>
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <h2 className="font-black text-4xl text-white mb-2">AGTE</h2>
            <p className="text-gray-200 font-bold">I made a web application for AGTE (Ankara Gelişim Tarama Envanteri) to make this test more accessible.</p>
            <div className="flex text-gray-200 gap-4 flex-wrap">
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Next.js</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>MongoDB</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Tailwind</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <Zoom>
              <Image src="/projects/preview/chpbandirma.png" alt="CHP Bandırma Mobile Application" width={460} height={244.2} />
            </Zoom>
          </div>
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <h2 className="font-black text-4xl text-white mb-2">CHP Bandırma</h2>
            <p className="text-gray-200 font-bold">A mobile application for CHP Bandırma</p>
            <div className="flex text-gray-200 gap-4 flex-wrap">
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Flutter</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Next.js</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>MySQL</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <Zoom>
              <Image src="/projects/preview/tobb.png" alt="Türkiye Odalar ve Borsalar Birliği Mobile Application" width={460} height={244.2} />
            </Zoom>
          </div>
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <h2 className="font-black text-4xl text-white mb-2">Türkiye Odalar ve Borsalar Birliği</h2>
            <p className="text-gray-200 font-bold">A mobile application I made for myself to get information from "Türkiye Odalar ve Borsalar Birliği" easily</p>
            <div className="flex text-gray-200 gap-4 flex-wrap">
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Flutter</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Next.js</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <Zoom>
              <Image src="/projects/preview/cenkdanismanlik.png" alt="Cenk Danışmanlık" width={460} height={244.2} />
            </Zoom>
          </div>
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <h2 className="font-black text-4xl text-white mb-2">Cenk Danışmanlık</h2>
            <p className="text-gray-200 font-bold">A web application I made for Cenk Danışmanlık</p>
            <div className="flex text-gray-200 gap-4 flex-wrap">
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>MySQL</div>
              <div className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-2 mt-2'>Next.js</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

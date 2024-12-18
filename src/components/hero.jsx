import Image from 'next/image'
import React from 'react'
// import homeSrc from '/public/001.jpg'

export default function Hero({imgUrl, content,alt}) {
  return (
    <div className='h-screen'>
      <div className='absolute inset-0 -z-10'>
        <Image src={imgUrl} alt={alt} fill style={{ objectFit: 'cover' }}></Image>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-950'></div>
      </div>
      <div className='flex justify-center pt-96'>
        <h1 className='text-white text-6xl'>{content}</h1>
      </div>
    </div >
  )
}

import Image from 'next/image'
import React from 'react'
import Hero from '@/components/Hero'
import homeSrc from '/public/001.jpg'

export default function Home() {
  return (
    <Hero imgUrl={homeSrc} content="This is a hero image" alt="Hero Image"></Hero>
  )
}

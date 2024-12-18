import React from 'react'
import Hero from '@/components/Hero'
import homeSrc from '/public/003.jpg'
import { Metadata } from 'next';

export const metadata = {
  title: 'Reliability',
};

export default function Reliability() {
  return (
    <Hero imgUrl={homeSrc} content="This is a Reliability image" alt="Reliability Image"></Hero>

  )
}

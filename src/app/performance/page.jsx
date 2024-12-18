import React from 'react'
import Hero from '@/components/Hero'
import homeSrc from '/public/002.jpeg'

import { Metadata } from 'next';

export const metadata = {
  title: 'Performance',
};

export default function Performance() {
  return (
    <Hero imgUrl={homeSrc} content="This is a performance image" alt="performance Image"></Hero>
  )
}

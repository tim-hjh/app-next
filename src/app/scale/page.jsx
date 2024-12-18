import React from 'react';
import Hero from '@/components/Hero';
import homeSrc from '/public/002.jpeg';

import { Metadata } from 'next';

export const metadata = {
  title: 'Scale',
};

export default function Scale() {
  return (  
    <Hero imgUrl={homeSrc} content="This is a Scale image" alt="Scale Image"></Hero>

  )
}

"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function Header() {
  const pathName = usePathname();

  const linkData = [{name: 'Performance', href: '/performance'},{name: 'Reliability', href: '/reliability'}, {name: 'Scale', href: '/scale'}]
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto p-8 text-white">
          <Link className="text-3xl font-bold" href="/">Home</Link>
        <div className="text-xl space-x-4">
          {linkData.map((link, index) => (
            <Link key={index} href={link.href} className={pathName === link.href ? 'text-purple-700' : ''}>{link.name}</Link>))}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Link from "next/link"
import '../css/header.css'
import '../css/awesomesauce.css'
import '../css/frontend.min.css'
import '../css/kit.css'
import Sidebar from './Sidebar'

export default function Header() {

  return (
    <>
      <header className='header'>
        <div className='container'>
          <Link id="logo" href={`${process.env.LIOR_SITE}`} aria-label="Logo">
            <Image
            className="mx-auto mt-2"
            src="/img/logo.png"
            alt="Better Stack"
            width={236}
            height={58}
          />
            </Link>
          <nav className='navigation'>
            <ul className="menu">
                <li><Link href={`${process.env.LIOR_SITE}`}>Home</Link>
                </li>         
                <li><Link href="/page/product-detail/">Product Detail</Link>
                </li>   
                <li><Link href="/page/pdf-download/">PDF Download</Link>
                </li>                    
                <li className="is-parent"><a href="#">Brands</a>
                    <ul className="sub-menu">
                    <li><Link href="/page/open-path-brand/">Open Path</Link></li> 
                    <li><Link href="/page/butterflymx-brand/">Butterfly MX</Link></li> 
                    <li><Link href="/page/ict-brand/">ICT</Link></li> 
                    </ul>
                </li>                                             
            </ul>
          </nav>
          <Link className='cta' href="/"><Image src="/img/user.png" alt="Better Stack" width={29} height={28}/>Contact our Team</Link>
          <Image className="chip" src="/img/chip.png" alt="Better Stack" width={88} height={90}/>
          <Image data-toggle-sidebar="sidebar1" className="mobile-tap" src="/img/mobile-tap.png" alt="Better Stack" width={50} height={50}/>
        </div>    
        <Sidebar/>    
      </header>
      <Script src="/js/splide.min.js"></Script>
      <Script src="/js/glightbox.js"></Script>
      <link href="/css/glightbox.css" rel="stylesheet"></link>
      <link href="/css/splide.min.css" rel="stylesheet"></link>      
    </>
  )
}

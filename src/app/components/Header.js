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
            width={203}
            height={62}
          />
            </Link>
          <nav className='navigation'>
            <ul className="menu">
                <li><Link href={`${process.env.LIOR_SITE}`}><Image src="/img/homeIcon.webp" alt="Better Stack" width={36} height={34} />Home</Link>
                </li>                            
                <li className="is-parent"><a href="#"><Image src="/img/courseIcon.svg" alt="Better Stack" width={36} height={34} />Courses</a>
                    <ul className="sub-menu">
                    <li><Link href="/page/all-courses-bundle/"><Image src="/img/bundleicon.png" alt="Better Stack" width={36} height={34} />All Courses Bundle</Link></li> 
                    <li><Link href="/page/deluge-scripting-for-zoho-crm/"><Image src="/img/deluge.png" alt="Better Stack" width={36} height={34} />Deluge Scripting For Zoho CRM</Link></li> 
                    <li><Link href="/page/zoho-crm-training-program-v2-0/"><Image src="/img/zohocrm.png" alt="Better Stack" width={36} height={34} />Zoho CRM Training Program – V2.0</Link></li>
                    <li><Link href="/page/the-complete-zoho-forms-course/"><Image src="/img/zohoform.png" alt="Better Stack" width={36} height={34} />The Complete ZOHO Forms Course</Link></li> 
                    <li><Link href="/page/sending-drip-marketing-using-zoho-crm/"><Image src="/img/drip-marketing.png" alt="Better Stack" width={36} height={34} />Sending Drip Marketing Using Zoho CRM</Link></li>
                    <li><Link href="/page/learn-how-to-generate-100s-of-good-online-reviews/"><Image src="/img/online-review.png" alt="Better Stack" width={36} height={34} />Learn How To Generate 100s of Good Online Reviews</Link></li> 
                    <li><Link href="/page/employee-training/"><Image src="/img/training.png" alt="Better Stack" width={36} height={34} />Employee Training</Link></li> 
                    <li><Link href="/page/offshore-freelancers-targeting-north-america-clients/"><Image src="/img/offsore.png" alt="Better Stack" width={36} height={34} />Offshore Freelancers targeting North America clients</Link></li> 
                    </ul>
                </li>                                             
            </ul>
          </nav>
          <Link className='cta' href="https://edu.liorizik.com/users/sign_in">Sign In</Link>
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

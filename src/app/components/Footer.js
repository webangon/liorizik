import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import '../css/footer.css';

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='top-footer'>
            <div className='ut-col-5'>
              <h3>THE COMPANY</h3>
              <ul>
                <li><Link href="#">Our Services</Link></li>
                <li><Link href="#">Branch Locator</Link></li>
                <li><Link href="#">Careers</Link></li>
              </ul>
            </div>
            <div className='ut-col-5'>
              <h3>LOCATIONS</h3>
              <ul>
                <li><Link href="#">Ontario</Link></li>
                <li><Link href="#">British Columbia</Link></li>
                <li><Link href="#">Quebec</Link></li>
              </ul>
            </div>
            <div className='ut-col-5'>
              <h3>RESOURCES</h3>
              <ul>
                <li><Link href="#">Videos</Link></li>
                <li><Link href="#">Request a Quote</Link></li>
                <li><Link href="#">Product Guides</Link></li>
                <li><Link href="#">Articles & Resources</Link></li>
                <li><Link href="#">Training & Events</Link></li>
              </ul>
            </div>
            <div className='ut-col-5'>
              <h3>SUPPORT</h3>
              <ul>
                <li><Link href="#">Become a Customer</Link></li>
                <li><Link href="#">Register Your Account</Link></li>
                <li><Link href="#">Solutions</Link></li>
                <li><Link href="#">Help</Link></li>
              </ul>
            </div>

            <div className='ut-col-5'>
              <h3>CONNECT WITH US</h3>
              <div className='iconlist'>
                <Image src="/img/pin.png" alt="Better Stack" width={22} height={26} />
                <div className='text'>120 WOODSTREAM BLVD #12, WOODBRIDGE, ON L4L 7Z1</div>
              </div>
              <div className='iconlist'>
                <Image src="/img/call.png" alt="Better Stack" width={23} height={24} />
                <div className='text'><b>Head Office</b><br/>+1 888 205 4036</div>
              </div>
              <div className='iconlist'>
                <Image src="/img/mail.png" alt="Better Stack" width={22} height={26} />
                <div className='text'><b>Email us</b><br/>admin@utsgroup.ca</div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-footer'>
              <ul>
                <li><a href="#"><Image src="/img/fb.png" alt="Facebo0k" width={33} height={32} /></a></li>
                <li><a href="#"><Image src="/img/tw.png" alt="Twitter" width={33} height={32} /></a></li>
                <li><a href="#"><Image src="/img/lk.png" alt="Linkedin" width={33} height={32} /></a></li>
                <li><a href="#"><Image src="/img/ig.png" alt="Instagram" width={33} height={32} /></a></li>
                <li><a href="#"><Image src="/img/yt.png" alt="Youtube" width={33} height={32} /></a></li>
              </ul>
        </div>
      </div>
    </>
  )
}

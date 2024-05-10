"use client";
import Link from "next/link";
import { useEffect } from 'react';
export default function Sidebar() {

    useEffect(() => {
          
        var script = document.createElement("script");  
        script.src = '/js/script.js'; 
        document.head.appendChild(script);    

    }, []);

    return (
        <>
            <div className="sidebar-wrap" aria-hidden="true">
                <div className="sidebar__content">
                    <span className="side-close">+</span>
                    <nav className="mobile-navigation">
                        <ul className="menu">
                            <li><Link href="https://next-route-seven.vercel.app/">Home</Link>
                            </li>
                            <li><Link href="/page/product-detail/">Product Detail</Link>
                            </li>
                            <li><Link href="/page/pdf-download/">PDF Download</Link>
                            </li>
                            <li className="is-parent"><Link href="#">Brands <span className="plus">+</span></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/page/open-path-brand/">Open Path</Link></li>
                                    <li><Link href="/page/butterflymx-brand/">Butterfly MX</Link></li>
                                    <li><Link href="/page/ict-brand/">ICT</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>           
        </>
    )
}
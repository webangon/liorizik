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
            <div className="sidebar-wrap">
                <div className="sidebar__content">
                    <span className="side-close">+</span>
                    <nav className="mobile-navigation">
                        <ul className="menu">
                            <li><Link href={`${process.env.LIOR_SITE}`}>Home</Link>
                            </li>
                            <li className="is-parent"><a href="#">Courses <span className="plus">+</span></a>
                                <ul className="sub-menu">
                                    <li><Link href="/page/all-courses-bundle/">All Courses Bundle</Link></li>
                                    <li><Link href="/page/deluge-scripting-for-zoho-crm/">Deluge Scripting For Zoho CRM</Link></li>
                                    <li><Link href="/page/zoho-crm-training-program-v2-0/">Zoho CRM Training Program – V2.0</Link></li>
                                    <li><Link href="/page/the-complete-zoho-forms-course/">The Complete ZOHO Forms Course</Link></li>
                                    <li><Link href="/page/sending-drip-marketing-using-zoho-crm/">Sending Drip Marketing Using Zoho CRM</Link></li>
                                    <li><Link href="/page/learn-how-to-generate-100s-of-good-online-reviews/">Learn How To Generate 100s of Good Online Reviews</Link></li>
                                    <li><Link href="/page/employee-training/">Employee Training</Link></li>
                                    <li><Link href="/page/offshore-freelancers-targeting-north-america-clients/">Offshore Freelancers targeting North America clients</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
import { Metadata } from 'next'
import { Suspense } from "react";
import Footer from '../.././components/Footer'
import Header from '../.././components/Header'
import axios from 'axios';

export async function generateMetadata({ params }: {
    params: { slug: string };
}) {
    const metadata = await axios.get(`${process.env.LIOR_WPSITE}/wp-json/wp/v2/uts_seo_data`,
        { params: { type: 'course',slug:params.slug } }
    )
    //console.log(metadata.data);
    return {
        title: metadata.data.title,
        description:metadata.data.description,
        keywords:metadata.data.focus,
        robots: {
            index: metadata.data.robot_index,
            follow: metadata.data.robot_follow,
        },        
    }
}

export default async function Page({ params }: {
    params: { slug: string };
}) {

    const query = `
    query {
        course(id: "${params.slug}", idType: SLUG) {
            content
        }
    }    
    `;

    const res = await fetch(`${process.env.LIOR_WPSITE}/graphql`, {
        method: "POST",
        cache: 'no-store',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            query
        })
    }).then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            return data;
        }
    )
    const xyz = res.data.course.content;
    return ( 
        <>
            <Header />
            <div dangerouslySetInnerHTML={{__html: xyz}}></div>  
            <Footer/> 
        </>
    )
}
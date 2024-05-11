import { Metadata } from 'next'
import { Suspense } from "react";
import Footer from '../.././components/Footer'
import Header from '../.././components/Header'

export const metadata: Metadata = {
    title: 'Courses',
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

    const res = await fetch(process.env.LIOR_GRAPHQL!, {
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
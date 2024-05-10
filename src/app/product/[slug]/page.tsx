import { Metadata } from 'next'
import { Suspense } from "react";
import Loading from "../.././loading";
import Footer from '../.././components/Footer'
import Script from 'next/script'
import Header from '../.././components/Header'
import InnerHTML from 'dangerously-set-html-content'

export const metadata: Metadata = {
    title: 'Courses',
}

export default async function Page({ params }: {
    params: { slug: string };
}) {

    const query = `
    query {
        product(id: "${params.slug}", idType: SLUG) {
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
    const xyz = res.data.product.content;
    return ( 
        <>
            <Header />
            <Suspense fallback={<Loading />}>
            <InnerHTML html={xyz} />    
            </Suspense>
            <Footer/> 
        </>
    )
}
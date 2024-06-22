
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';

export async function generateMetadata(){

  const metadata = await axios.get(`${process.env.LIOR_WPSITE}wp-json/wp/v2/uts_seo_data`,
      { params: { type: 'page',slug:'home' } }
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


export default async function Page() {

    const query = `
    query {
        pages(where: {name: "home"}) {
            nodes {
              title
              content
            }
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
    const xyz = res.data.pages.nodes;
    return ( 
        <>
            <Header />
            {xyz.map((item: any) => {
                const content = item.content;
                return (
                    <>
                        <div dangerouslySetInnerHTML={{__html: content}}></div>       
                    </>
                );
            })}
     <Footer/> 
        </>
    )
}
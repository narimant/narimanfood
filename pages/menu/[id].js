import DetailPage from '@/components/templates/DetailPage';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

const Details = ({data}) => {
   const route=useRouter();
   if(route.isFallback){
    return (<h2>loading...</h2>)
   }
    return (
        <div>
            <DetailPage {...data}/>
        </div>
    );
};

export default Details;
export async function getStaticPaths()
{
    const res=await fetch('http://localhost:3001/data');
    const json=await res.json();
    const data=json.slice(0,10); 
    const paths=data.map(food=>({params:{id:food.id.toString()}}))
 
    return{
        paths,
        fallback:true
    }
}

export async function getStaticProps(context){
    const {params}=context;
    const res=await fetch(`http://localhost:3001/data/${params.id}`);
    const data=await res.json();
    if(!data.id){
        return {
            notFound:true,
        }
        
    }
    return{
        props:{data},
        revalidate:10,

    }

}
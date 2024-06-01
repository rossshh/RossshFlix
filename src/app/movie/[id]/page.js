import React from 'react';
import styles from '@/app/styles/common.module.css'

const Page=async({params})=>{
const id=params.id;
const url = 'https://netflix54.p.rapidapi.com/season/episodes/?ids=${id}&lang=en';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '61d35468d2msh6747f9e790e6bf2p121f63jsn3af6cdfb725a',
    'x-rapidapi-host': 'netflix54.p.rapidapi.com'
  }
};
const res= await fetch(url,options);
const data=await res.json();
const main_data=data[0].details;
    return(
        <>
            <div className={styles.container}>
                <h2 className={styles.movie_title}>Netflix<span>{main_data.type}</span></h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300}></Image>
                    </div>
                    <div>
                        <h1>{main_data.title}</h1>
                        <h2>{main_data.synopsis}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Page;
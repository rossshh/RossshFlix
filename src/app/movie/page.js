import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/common.module.css'


const Movie=async()=>{

const url = process.env.RAPID_KEY ;
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '61d35468d2msh6747f9e790e6bf2p121f63jsn3af6cdfb725a',
    'x-rapidapi-host': 'netflix54.p.rapidapi.com'
  }
};
const res = await fetch(url,options);
const data=await res.json();
const main_data=data.titles;
console.log(data);

    return(
        <>
        <section className={styles.movieSection}>
            <div className={styles.container}>
            <h1>Series & Movies</h1>
            {
                main_data?.map(()=>{
                    return <Moviecard key={curElem.id} {...curElem} />
                })
            }
            </div>
        </section>
        </>
    );
};
export default Movie;
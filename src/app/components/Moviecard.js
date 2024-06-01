import React from 'react';
import styles from '@/app/styles/common.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Moviecard=(currElem)=>{
    const {id,type,title,synopsis}=currElem.jawSummary;
    return(
        <>
            <div className={styles.card} >
                <div className={styles.card_image} >
                    <Image src={currElem.jawSummary.backgroundImage.url} alt={title} width={250} height={200}></Image>
                </div>
                <div className={styles.card_data}>
                    <h2>{title}</h2>
                    <p>
                        {synopsis}
                    </p>
                    <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Moviecard;
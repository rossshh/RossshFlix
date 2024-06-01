import React from 'react';
import heroStyles from '@/app/styles/herosection.module.css';
import styles from '@/app/styles/common.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Herosection=({title,imageUrl})=>{
    return(
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Natus porro molestiae a illum quam quod harum, 
                        fuga cumque reprehenderit aspernatur commodi quisquam labore modi ex.
                        </p>
                        <Link href="/movie">
                            <button>Explore Movies</button>
                        </Link>
                    </div>
                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl} alt="HomePage" width={300} height={150}></Image>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Herosection;
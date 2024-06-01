import react from 'react';
import Link from 'next/link';
import styles from '@/app/styles/navbar.module.css';

const Nav=()=>{
    return(
        <nav className={styles.navbar_brand}>
            <div>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}><Link href="/">Home</Link></li>
                    <li className={styles.navbarItem}><Link href="/about">About</Link></li>
                    <li className={styles.navbarItem}><Link href="/movie">Movie</Link></li>
                    <li className={styles.navbarItem}><Link href="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};
export default Nav;
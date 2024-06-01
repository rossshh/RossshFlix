import styles from '@/app/styles/contact.module.css';
import {MdCall, MdEmail, MdWhatsapp} from 'react-icons/md';
import Link from 'next/link';

const ContactCard=()=>{
    return(
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                <div className={styles.grid_card}>
                        <i><MdEmail /></i>
                        <h3>Email</h3>
                        <p>Monday to Friday Expected</p>
                        <p className={styles.last_para}>response time: 72 Hours</p>
                        <Link href="/">Send Email</Link>
                    </div>
                    <div className={styles.grid_card}>
                        <i><MdCall /></i>
                        <h3>Call</h3>
                        <p>73208474XX</p>
                        <p className={styles.last_para}>Response Time: 24X7</p>
                        <Link href="/">Call Now</Link>
                    </div>
                    <div className={styles.grid_card}>
                        <i><MdWhatsapp /></i>
                        <h3>Whatsapp</h3>
                        <p>73208474XX</p>
                        <p className={styles.last_para}>response time: 24        Hours</p>
                        <Link href="/">Whatsapp</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactCard;
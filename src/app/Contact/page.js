import React from 'react';
import ContactCard from '../components/ContactCard';
import styles from '@/app/styles/contact.module.css';
import ContactForm from '@/app/components/ContactForm';


const Contact=()=>{
    return(
        <>
            <div>
                <ContactCard />
                <section className={styles.contact_section}>
                    <h2>We'd Love to Hear <span>From You 💖</span></h2>
                <ContactForm />
                </section>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.780554662847!2d85.80376107377542!3d20.35068231072531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20University!5e0!3m2!1sen!2sin!4v1717181786034!5m2!1sen!2sin" 
                width={1300} height={350}
                style={{border:0}} 
                className={styles.mapping}
                allowfullscreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    );
};
export default Contact;
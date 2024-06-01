'use client'
import react from 'react';
import styles from '@/app/styles/contact.module.css';
import {useState} from 'react';

const ContactForm=()=>{
    const[user,setUser]=useState({
        username:"",
        email:"",
        message:""
    })

    function handleChange(e){
        const name=e.target.name;
        const value=e.target.value;

        setUser((prevUser)=>({...prevUser,[name]:value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
                } 
                else {
                setStatus('error');
                }

        }catch (e) {
            console.log(e)
        }

    }

    return(
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="name"><h3>Name</h3>
                    <input type="text" placeholder="Enter Your Name" id="name" name="username" value={user.name} onChange={handleChange}></input>
                </label><br />

                <label htmlFor="Email"><h3>Email</h3>
                    <input type="text" placeholder="Enter Your Email" id="email" name="email" user={user.email} onChange={handleChange}></input>
                </label><br />

                <label htmlFor="textfield"><h3>Message</h3>
                    <textarea type="text" placeholder="Enter Your Suggestion" id="message" name="message" user={user.message} onChange={handleChange}></textarea>
                </label>
            </div>
            <div><button type="submit">Submit</button></div>
        </form>
        
    );
};
export default ContactForm;
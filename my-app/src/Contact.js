import React, { useState } from 'react';
import './Contact.css';
import { useAuth0 } from "@auth0/auth0-react";

function Contact() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const [users, setUser] = useState(
        {
            name: '',
            Email:'',
            Subject:'',
            Message: ''
        }
    )
    let name, value;
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...users, [name]: value });
    }
    // Firebase data
    const senddata = async (e) => {
        const { name, Email, Subject, Message } = user
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Contact-type' : 'aplication/json'
            },
            body: JSON.stringify({
                name, Email, Subject, Message
            })
        }
        const res = await fetch('https://e-commerce-contact-11757-default-rtdb.firebaseio.com/Message.json', options);
        console.log(res);
        if (res) {
            alert('Your Message Sent')
        } else {
            alert('an error occured')
        }
    }
    return (
        <div>
            <div className='contact_container'>
                <div className='contant'>
                    <h2>Contact Us</h2>
                    <div className='form'>
                        <form method='POST'>
                            <input type='text' name='name' value={user.name} placeholder='Enter your full name' required  autoComplete='off' onChange={data}></input>
                            <input type='email' name='Email' value={users.Email} placeholder='Enter your E-mail' required  autoComplete='off' onChange={data}></input>
                            <input type='text' name='Subject' value={users.Subject} placeholder='Enter your Subject' required  autoComplete='off' onChange={data}></input>
                            <textarea name='Message' value={users.Message} placeholder='your Message' required autoComplete='off' onChange={data}></textarea>
                            {
                                isAuthenticated ?
                                    <button type='submit' onClick={senddata}>send</button>
                                    :
                                    <button type='submit' onClick={() => loginWithRedirect()}>Login</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;

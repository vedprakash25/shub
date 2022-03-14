import React, { useEffect, useState } from 'react';
import Nav from '../../Molecule/Nav';
import './api.css'

const Forms = () => {

    const [contactus, setContactus] = useState({
        name: '',
        email: '',
        message: '',
        contactus: ''
    })



    let name, value
    const onChangeGet = (e) => {
        // name = e.target.name
        // value = e.target.value
        // setContactus({ ...contactus, [name]: value })
        // console.log(value)
        setContactus({
            ...contactus,
            [e.target.name]: e.target.value,
        });
        let temp = { ...errors };
        if ('name' in contactus)
            temp.name = /^[a-zA-Z ]{2,30}$/.test(contactus.name) ? '' : 'Please enter a valid name';

        if ('email' in contactus)
            temp.email = /$^|.+@.+..+/.test(contactus.email)
                ? ''
                : 'Email is not valid.';
        if ('message' in contactus) {
            const msgLen = contactus.message.length;
            temp.message = msgLen != 0 ? '' : 'Please leave a message for us.';
        }
        setErrors({
            ...temp,
        });
    }


    return (
        <div>

        </div>

    );
}


export default Forms;


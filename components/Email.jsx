"use client"
import React, { useEffect, useState } from 'react';
const Email = ({ user, domain }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const emailString = `${user}@${domain}`;
        const encodedEmail = emailString.split('').map(char => `&#${char.charCodeAt(0)};`).join('');
        setEmail(encodedEmail);
    }, []);

    if (!email) return null;

    return (
        <a href={`mailto:${user}@${domain}`} dangerouslySetInnerHTML={{ __html: email }}></a>
    );
};

export default Email;
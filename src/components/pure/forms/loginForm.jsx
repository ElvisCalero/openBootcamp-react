import React, { useState } from 'react';

const LoginForm = () => {
    const initCredentials = [
        {
            user: '',
            pass: ''
        }
    ];

    const [credentials, setCredentials] = useState(initCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;

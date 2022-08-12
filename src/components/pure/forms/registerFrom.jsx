import React, { useState } from 'react';

const RegisterFrom = () => {
    const initData = [
        {
            user: '',
            pass: '',
            name: '',
            email: ''
        }
    ];

    const [data, setData] = useState(initData);

    return (
        <div>
            
        </div>
    );
}

export default RegisterFrom;

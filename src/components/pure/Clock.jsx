import React, { useState, useEffect } from 'react';

const Clock = () => {
    //init state
    const initState = [
        {
            fecha: new Date(),
            edad: 0,
            nombre: "Elvis",
            apellido: "Calero"
        }
    ];

    const [state, setState] = useState(initState);

    useEffect(() => {
        const timerId = setInterval(() => {
          stick();
        }, 1000);
        return clearInterval(timerId);
    }, []);

    const stick = () => {
        return setState({
            fecha: state.fecha,
            edad: state.edad + 1,
            nombre: state.nombre,
            apellidos: state.apellidos 
        });
    };

    return (
        <div>
            <h2>Hora Actual: {state.fecha.toLocaleTimeString()}</h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
         </div>
    );
};

export default Clock;

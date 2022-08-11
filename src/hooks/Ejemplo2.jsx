import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const miRef = useRef();

    function addCounter1(){
        setCounter1(counter1 + 1);
    }
    function addCounter2(){
        setCounter2(counter2 + 1);
    }
    /* useEffect */    
    /* efecto se ejecuta cada que se reenderiza la pagina */
    // useEffect(() => {
    //     console.log(miRef);
    // })
    /* efecto se ejecuta cada que se ejecuta el counter1 */
    useEffect(() => {
        console.log(miRef);
    }, [counter1]
    )

    return (
        <div>
            <h1>*** Ejemplo de useEffect, useRef, useState ***</h1>
            <h2>Contador 1: {counter1}</h2>
            <h2>Contador 2: {counter2}</h2>
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={addCounter1}>Incrementar 1</button>
                <button onClick={addCounter2}>Incrementar 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;

import React, { useState } from 'react';

const Ejemplo1 = () => {
    const initValue = 0;
    const initPerson = {
        name: 'Elvis',
        email: 'elviscalero@gmail.com'
    }

    /* A destructuring assignment. It is a way to assign values to variables. */
    const [counter, setCounter] = useState(initValue)
    const [person, setPerson] = useState(initPerson)

    /**
     * The function addCount() is a function that takes no arguments and returns nothing. It uses the
     * setCounter() function to set the counter variable to the current value of counter plus 1
     */
    function addCount(){
        setCounter(counter + 1);
    }

    function updatePerson(){
        setPerson({
            name: 'Pepe',
            email: 'pepe@gmail.com'
        })
    }

    return (
        <div>
            <h1>*** Ejemplo de useState ***</h1>
            <h2>Contador: {counter}</h2>
            <h2>Datos de la persona:</h2>
            <h3>Nombre: {person.name}</h3>
            <h3>Email: {person.email}</h3>
            {/* Bloque de botones */}
            <div>
                <button onClick={addCount}>Incrementar contador</button>
                <button onClick={updatePerson}>Cambiar persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;

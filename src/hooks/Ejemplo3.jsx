import React, { useState, useContext } from 'react';
/*
 * @return Component 1
 * Dispone de un contexto qye va a tener un valor que recibe desde el padre
 */
//Iniciamos un estado vacio que va a llenarse con los datos del contexto del padre
const miContext = React.createContext(null);

const Component1 = () => {
    const state = useContext(miContext);
    return (        
        <div>
            <h1>El token es: {state.token}</h1>
            <Component2></Component2>
        </div>
    );
}

const Component2 = () => {
    const state = useContext(miContext);
    return (
        <div>
            <h2>La sesión es: {state.session}</h2>
        </div>
    );
}

export default function ComponentWithContext () {
    const initState = {
        token: '123456',
        session: 1
    }
    //Creamos el estado de este component
    const [sessionData, setSessionData] = useState(initState);

    function updateSession () { 
        setSessionData(
            {
                token: 'JWT12345',
                session: sessionData.session + 1
            }
        );
    }
    return (
        <miContext.Provider value={sessionData}>
            <h1>*** Ejemplo de useState y useContext ***</h1>
            <Component1></Component1>
            <button onClick={updateSession}>Update session</button>
        </miContext.Provider>
    );
};

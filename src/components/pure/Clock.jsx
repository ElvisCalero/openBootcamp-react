import React, {useState} from 'react';
import PropTypes from 'prop-types';

class state {
    fecha = "";
    edad = 0;
    nombre = "";
    apellido = "";
}

const Clock = (props) => {
    const [state, setState] = useState();
    return (
        <div>
            <h2>Hora Actual: {state.fecha.toLocaleTimeString()}</h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
         </div>
    );
}

export default Clock;

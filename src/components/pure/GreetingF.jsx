import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    const [age, setAge] = useState(26);

    const birthday = () => {
        setAge(age + 1)
    }
    return (
        <div>
            <h1>Hello {props.name}!</h1>
            <h2>Tu edad es: {age}</h2>
            <div>
                <button onClick={birthday}>Click me!</button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
 name: PropTypes.string
};


export default GreetingF;

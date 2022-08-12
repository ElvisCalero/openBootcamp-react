import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado');
    }

    render() {
        return (
            <div>DidUpdate</div>
        );
  }
}

export const DidUpdateHook = () => {
    useEffect(() => {        
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado');
    })

    return (
        <div>
            <h1>DidUpdateHook</h1>
        </div>
    );
}

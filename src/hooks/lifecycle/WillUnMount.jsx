import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que desaparezca');
    }

    render() {
        return (
            <div>WillUnMount</div>
        );
  }
}

export const WillUnMountHook = () => {
    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que desaparezca'); 
        }
    }, [])

    return (
        <div>
            <h1>DidMountHook</h1>
        </div>
    );
}

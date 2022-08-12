import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que se renderice');
    }

    render() {
        return (
            <div>DidMount</div>
        );
  }
}

export const DidMountHook = () => {
    useEffect(() => {
        console.log('Comportamiento antes de que se renderice');  
    }, [])

    return (
        <div>
            <h1>DidMountHook</h1>
        </div>
    );
}

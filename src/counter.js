import React from 'react';

export default class extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <h1>{this.props.number}</h1>
        );
    }
}
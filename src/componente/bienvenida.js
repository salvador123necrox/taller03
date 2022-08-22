import React from "react";
export default class Bienvenida extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state={name:this.props.name}
    }
    render()
    {

        return(
            <h1> Este es mi saludo {this.state.name}, desde mi componente de clase.</h1>
            
        );
        
    }
}
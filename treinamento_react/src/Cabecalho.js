import React, {Component} from "react";


import foto from '../src/assets/Hanna_Uwo.jpg'

class Cabecalho extends Component
{
    render()
    {
        return(
            <>
                <span><strong>Gabriel Luis Julian</strong></span>
                <br />
                <br />
                <span>Idade: 30</span>
                <br />
                <br />
                <img src={foto} />
            </>
        )
    }
}

export default Cabecalho;
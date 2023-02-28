import React, {Component} from "react";


import foto from '../src/assets/Hanna_Uwo.jpg'

class Cabecalho extends Component
{
    render()
    {
        return(
            <>
                <span><strong>Hanna Uwo</strong></span>
                <br />
                <br />
                <span>Idade: 20</span>
                <br />
                <br />
                <img src={foto} alt='foto da moça'/>
            </>
        )
    }
}

export default Cabecalho;
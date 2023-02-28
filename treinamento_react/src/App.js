import React, {Component} from 'react'

import Cabecalho from './Cabecalho';
import Estilo from './Estilo.css';
import MedicoList from './components/MedicoList';


class App extends Component{
    render()
    {
        return (
            <>
                <Cabecalho />
                <h2>Elemento da App.js</h2>
                <br />
                <MedicoList especialidade = 'Clinica Geral' cc='1.10.10'/>
            </>
        )
    }
}

export default App;
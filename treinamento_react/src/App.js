import React, {Component} from 'react'

import Cabecalho from './Cabecalho';
import Estilo from './Estilo.css';
import MedicoList from './components/MedicoList';
import EspecialidadeList from './components/EspecialidadeList';



class App extends Component{

    render()
    {
        return (
            <>
                <Cabecalho />
                <hr />
                <MedicoList />
                <hr />
                <EspecialidadeList />
            </>
        )
    }
}

export default App;
import React, {Component} from 'react'

import Cabecalho from './Cabecalho';
import Estilo from './Estilo.css';


class App extends Component{
    render()
    {
        return (
            <>
                <Cabecalho />
                <h2>Elemento da App.js</h2>
            </>
        )
    }
}

export default App;
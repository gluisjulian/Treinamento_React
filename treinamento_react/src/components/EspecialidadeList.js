import React,{Component} from "react";
import axios from 'axios';
import EspecialidadeItem from "./EspecialidadeItem";


class EspecialidadeList extends Component{


    state = {
        especialidades: []
    }


    componentDidMount(){
        this.atualizaEspecialidades()
    }

    atualizaEspecialidades(){
        axios.get('https://telepephc.famema.br:9898/api/especialidades').then(response => {
            this.setState({
                especialidades:response.data
            });
        })
    }

    handleSubmit = (e) => {
        const nomeEspecialidade = document.getElementById('nome').value
        const data = new FormData()
        data.append('nome', nomeEspecialidade)
        data.append('idLegado', '2')
        data.append('id_ambiente', '2')

        axios.post('https://telepephc.famema.br:9898/api/especialidades').then(() => {
                //alert('gravou')
                this.atualizaEspecialidades()
            }
        )
    }

    handleDelete = (item) => {
        this.setState({
            especialidades: this.state.especialidades.filter(esp => esp.id != item.id)
        })
    }



    render()
    {
        return(
            <>
                <h1>Especialidades</h1>
                <ul>
                    {this.state.especialidades.map(esp => 
                    <EspecialidadeItem key = {esp.id}
                                       item ={esp.nome}
                                       onDelte={() => this.handleDelete(esp)}
                    
                    />    
                )}
                </ul>
                <input type='text' id="nome" />
                <button type="submit" onClick={this.handleSubmit}>Incluir</button>
            </>
        )
    }
}


export default EspecialidadeList;
import React, {Component} from "react";


class MedicoList extends Component {
        
    state = {
            medicos : [
                'Médico 1',
                'Médico 2',
                'Médico 3',
                'Médico 4',
                'Médico 5',
                'Dr. House'
            ],
            novoItem: null
        }

        handleChanged = (e) => {
            this.setState({
                novoItem: e.target.value
            })
        }

        handleSubmit = (e) => {
            this.setState({
                medicos:[...this.state.medicos, this.state.novoItem]
            })
        }


    render()
    {
        console.log(this.state.novoItem)
        return(
            <>
                <span><strong>Centro de custo: {this.props.cc}</strong></span>
                <ul>
                    <li> { this.props.especialidade } </li>
                    { this.state.medicos.map(medico => <li key={medico}> {medico}</li>) }
                </ul>

                <input type="text" onChange={this.handleChanged}/>
                <button type="submit" onClick={this.handleSubmit}>Gravar</button>
            </>
        )
    }
}


export default MedicoList;
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
            ]
        }


    render()
    {
        return(
            <>
                <span><strong>Centro de custo: {this.props.cc}</strong></span>
                <ul>
                    <li> { this.props.especialidade } </li>
                    { this.state.medicos.map(medico => <li key={medico}> {medico}</li>) }
                </ul>
            </>
        )
    }
}


export default MedicoList;
import React from 'react'
import Card from './Card'
import './Intervalo.css'

import { connect } from 'react-redux'

function Intervalo(props){
    const {min, max} = props
    return (
        <Card title="Intevalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} readOnly />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max } readOnly />
                </span>
            </div>
        </Card>
    )
}


function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Intervalo)
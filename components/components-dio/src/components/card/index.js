import { useState } from 'react';
import Button from '../button';

const Card = () => {
    const [value, setValue] = useState(0)

    function Add(){
        setValue(value+1)
    }

    function Remove(){
        setValue(value-1)
    }


    return(


        <div className="card w-50">
            <div className="card-body">
                <h5 className="card-title">Primeiro Card em React</h5>
                <p className="card-text">Texto no cartão</p>
                <Button
                    className="btn btn-success"
                    onClick={Add}
                >
                    Adicionar
                </Button>
                <button className="btn btn-danger"
                onClick={Remove}
                >Remover</button>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default Card
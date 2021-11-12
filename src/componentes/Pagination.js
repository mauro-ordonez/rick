import React from 'react'

const Pagination = ({prev, next, onPrevio, onSiguiente}) => {
   
   const manejarSiguiente = () =>{
        onPrevio();
   };
   const manejarAnterior = () =>{
       onSiguiente();
    };
   
    return (
        <div>
            <nav>
                <ul className="pagination justify-content-center">
                   {
                       prev ? (
                                <li className="page-item">
                                    <button className="page-link" onClick={manejarAnterior}>Anterior</button>
                                </li>)
                            :null
                   }
                   {
                       next ? (
                                <li className="page-item">
                                    <button className="page-link" onClick={manejarSiguiente}>Siguiente</button>
                                </li>) 
                            : null
                   }
                </ul>
           </nav> 
        </div>
    )
}

export default Pagination

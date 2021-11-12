import React from 'react'

const Characters = ({per=[]}) => {
    return (
        <div className="row">
            {per.map((item,index)=>(
                <div key={index} className="col mb-4 shadow-sm">
                    <div className="card text-center" style={{minWidth:"200px"}}>
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <hr />
                            <p>Locacion: {item.location.name}</p>
                            <p>Especie: {item.species}</p>
                            <p>Genero: {item.gender}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Characters

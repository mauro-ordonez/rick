import React, {useEffect, useState} from 'react';
import NavBar from './componentes/NavBar';
import Characters from './componentes/Characters'
import Botones from './componentes/Pagination'


function App() {
 
  const [personajes, setpersonajes] = useState([]);
  const [info, setInfo] = useState({});

  const url ="https://rickandmortyapi.com/api/character";
  
  const fetchCharacters = (url) =>{ 
   fetch(url)
    .then(respuesta=>respuesta.json())
    .then(datos=>{setpersonajes(datos.results);
                  setInfo(datos.info);})
    .catch(error => console.log(error)
)}

const manejarAnterior = () =>{
  fetchCharacters(info.next)
};
const manejarSiguiente = () =>{
  fetchCharacters(info.prev)
};


 useEffect(() => {
   fetchCharacters(url);
 }, [])
 
  return (
   <>
   
    <NavBar brand= "Rick and Morty" />
    
    <Botones prev={info.prev} next={info.next} onPrevio={manejarAnterior}  onSiguiente={manejarSiguiente} />
    
    <div className="container mt-5">
      <Characters per={personajes}/>
    </div>

    <Botones prev={info.prev} next={info.next} onPrevio={manejarAnterior}  onSiguiente={manejarSiguiente} />


  </>
  );
}

export default App;

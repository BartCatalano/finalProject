import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListPage() {

    const [videogames, setvideogames] = useState([]);
    // const [SelectedVideogames, setSelectedVideogames] = useState([]);



    useEffect(() => {
        loadData();
    }, [])


    const loadData = () => {
        axios.get("http://127.0.0.1:8080/api/videogames").then((resp) => {
            setvideogames(resp.data);

        })
    };

    console.log(videogames);

    // const videogameSelectedButton = (id) => {
    //     const videogame = videogames.find((f) => f.id === id);
    //     setSelectedVideogames(videogame)
    // }




    return (
 <>
  <div className="container">
  <h1>Lista Videogame Disponibili</h1>
  <div>
    {videogames.map((curItem) => (
      <div key={curItem.id} className="videogame-card">
        <div><strong>Title:</strong> {curItem.title}</div>
        <div><strong>Descrizione:</strong> {curItem.descrizione}</div>
        <div><strong>Prezzo:</strong> {curItem.prezzo}€</div>

        {/* Qui accedo direttamente all'oggetto genere gestendo la possibilità della mancanza del genere*/}
        <div><strong>Genere:</strong> {curItem.genere ? curItem.genere.nameGenere : 'Nessun genere disponibile'}</div>
<div><strong>Descrizione Genere:</strong> {curItem.genere ? curItem.genere.descrizioneGenere : ''}</div>


        {/* Qui faccio un altro map sull'array piattaforma */}
        <div><strong>Piattaforme disponibili:</strong></div>
        <ul>
          {curItem.piattaforma.map((piattaformaItem) => (
            <li key={piattaformaItem.id}>
              <img src={piattaformaItem.logo} alt={piattaformaItem.nomePiattaforma} width="30" />
              {piattaformaItem.nomePiattaforma} - {piattaformaItem.prezzoPiattaforma}€
            </li>
          ))}
        </ul>
        {/* <button onClick={() => videogameSelectedButton(curItem.id)}> {curItem.title} </button> */}
          <Link to={`/details/${curItem.id}`} >Dettagli</Link>
      </div>
    ))}
    
  </div>
</div>
    </>


    )
}

export default ListPage;
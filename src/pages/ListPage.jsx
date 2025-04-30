import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './ListPage.module.css';

function ListPage() {

    const [videogames, setvideogames] = useState([]);
    const [search, setSearch]= useState('');

    useEffect(() => {
        loadData();
    }, [])


    const loadData = () => {
        axios.get("http://127.0.0.1:8080/api/videogames").then((resp=> { 
          // uso il sort per ordinare i videogames
          const sortedItems = resp.data.sort((a, b) =>
            a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })
          );
          setvideogames(sortedItems);
          console.log(sortedItems);
          
        })
        )          
    };
  // creo il filtro per la search bar
    const filteredGames = videogames.filter((curItem) =>
      curItem.title.toLowerCase().includes(search.toLowerCase())
    );
  


    return (
      <div className={style.container}>
        <h1 className={style.titleList}>Lista Videogame Disponibili</h1>
  
        <input
          type="text"
          placeholder="Cerca un videogioco"
          value={search}
          // salvo quello che viene inserito nella searcBar nel Search
          onChange={(e) => setSearch(e.target.value)} 
          className={style.searchBar}
        />
        {/* creo la condizione AND per dare il mex di gioco non trovato */}
       {filteredGames.length === 0 && (
    <p className={style.notFound}>Nessun videogioco trovato</p>
  )}
         <div className={style.containerGrid}>
          {/* qui ricreo la condizione per far partire il map con o senza filtro */}
    {filteredGames.length === 0 ? null : (
      filteredGames.map((curItem) => (
              
              <div key={curItem.id} className={style.videogameCard}>
                {/* Immagine di copertina */}
                <img
                  src={curItem.foto} 
                  alt={curItem.title}
                  className={style.coverImage}
                />
  
                {/* Titolo */}
                <h2 className={style.gameTitle}>{curItem.title}</h2>
  
                {/* Altri dettagli */}
                <div><strong>Descrizione:</strong> {curItem.descrizione}</div>
                <div><strong>Prezzo:</strong> {curItem.prezzo}€</div>
                <div>
                  <Link className={style.detailButton} to={`/details/${curItem.id}`}>Dettagli</Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default ListPage;
  
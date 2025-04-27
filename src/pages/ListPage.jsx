import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './ListPage.module.css';

function ListPage() {

    const [videogames, setvideogames] = useState([]);
    // const [SelectedVideogames, setSelectedVideogames] = useState([]);



    useEffect(() => {
        loadData();
    }, [])


    const loadData = () => {
        axios.get("http://127.0.0.1:8080/api/videogames").then((resp=> {
          const sortedItems = resp.data.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          });
          setvideogames(sortedItems);
        })
        )  
            

        
    };

    console.log(videogames);

    return (
        <>
          <div className={style.container}>
  <h1 className={style.titleList}>Lista Videogame Disponibili</h1>

  <div className={style.containerGrid}>
    {videogames.map((curItem) => (
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
        <div >
        <Link className={style.detailButton} to={`/details/${curItem.id}`}>Dettagli</Link></div>
      </div>
    ))}
  </div>
</div>

        </>


    )
}

export default ListPage;
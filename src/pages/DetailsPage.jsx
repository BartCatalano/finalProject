import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from './DetailsPage.module.css';

function DetailsPage() {

  const { id } = useParams();


  const [videogames, setvideogames] = useState(null);
  useEffect(() => {
    loadDataDetails();
  }, [id]);


  const loadDataDetails = () => {
    axios.get(`http://127.0.0.1:8080/api/videogames/${id}`)
      .then((resp) => {
        setvideogames(resp.data);

      })
  };

  console.log(videogames);





  return (
    <>
    {videogames ?(
     <div className={style.containerDetail}>
      <div className={style.gameDetailCard}>
        {/* Sezione dettagli */}
        <div className={style.detailTop}>
          <img
            src={videogames.foto}
            alt={videogames.title}
            className={style.coverImageDetail}
          />
          <h2 className={style.gameTitleDetail}>{videogames.title}</h2>
          <p className={style.gameDescription}>{videogames.descrizione}</p>
          <p className={style.gamePrice}>Prezzo: {videogames.prezzo}€</p>
        </div>

        {/* Sezione genere */}
        <div className={style.gameGenre}>
          <strong>Genere:</strong> {videogames.genere.nameGenere} - {videogames.genere.descrizioneGenere}
        </div>

        {/* Sezione piattaforme */}
        <div className={style.gamePlatforms}>
          <strong>Piattaforme:</strong>
          <ul>
            {videogames.piattaforma.map((platform) => (
              <li key={platform.id} className={style.platform}>
                <img
                  src={platform.logo}
                  alt={platform.nomePiattaforma}
                  className={style.platformLogo}
                />
                <span>{platform.nomePiattaforma}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div> ): (
        <div>Caricamento...</div>
      )}
  

    </>
  )
}


export default DetailsPage;
 {/* {videogames ? (
        <div className="container">
          <h1>{videogames.title}</h1>
          <p>{videogames.descrizione}</p>
          <p>Prezzo: {videogames.prezzo}€</p>
        </div>
      ) : (
        <div>Caricamento...</div>
      )} */}

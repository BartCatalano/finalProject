import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      {videogames ? (
        <div className="container">
          <h1>{videogames.title}</h1>
          <p>{videogames.descrizione}</p>
          <p>Prezzo: {videogames.prezzo}€</p>
        </div>
      ) : (
        <div>Caricamento...</div>
      )}

    </>
  )
}


export default DetailsPage;

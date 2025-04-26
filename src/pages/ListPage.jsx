import axios from "axios";
import { useEffect, useState } from "react";

function ListPage() {

    const [videogames, setvideogames] = useState([]);
    useEffect(()=>{
        loadData();
      })


    const loadData = () => {
        axios.get("http://127.0.0.1:8080/api/videogames").then((resp) => {
          
            setvideogames(resp.data);
            console.log(videogames);
            
        })
      };








    return (
        <>
            <div className="container">
                <h1>sono ListPage</h1></div>
        </>
    )
}

export default ListPage;
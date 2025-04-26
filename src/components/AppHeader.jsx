import { NavLink } from "react-router-dom";
import style from './AppHeader.module.css';
import { useState } from "react";



// creo un array di oggetti con valore delle chiavi il path e il titolo per poterle poi usare in un map per creare i bottoni dinamici
const navMenu = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/list',
        title: 'Gallery'
    },

];

  

function AppHeader() {

const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };



    return (
        
        <header className={style.bodyHeader}>
        <div className={style.titleHeader}>
          Videogame World
        </div>
        <div>
        <nav className={style.nav}>
          {navMenu.map((CurButton) => (
            <div className={style.buttonHeader}>
            <NavLink  to={CurButton.path} key={CurButton.title} >
              {CurButton.title}   </NavLink></div>
          ))}
        </nav></div>
    </header>
    );
}
            
      

export default AppHeader;
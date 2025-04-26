import { NavLink } from "react-router-dom";




// creo un array di oggetti con valore delle chiavi il path e il titolo per poterle poi usare in un map per creare i bottoni dinamici
const navMenu = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/list',
        title: 'Videogames Gallery'
    },

];

function AppHeader() {
    return (
        <>
        <div>
        <h1>sono Header</h1>
        {/* creo il map per i bottoni dinamici */}
            <div>
                {navMenu.map((CurButton) => (
                    <NavLink to={CurButton.path} key={CurButton.title}> {CurButton.title}</NavLink>
                ))}</div></div>
            
        </>
    );
}

export default AppHeader;
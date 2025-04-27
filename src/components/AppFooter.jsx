import style from './AppFooter.module.css';

function AppFooter() {
    return (
      <footer className={`${style.footer}`}>
      <div>
      <p>© 2025 BartArcade</p></div>
      <div>
      <a href="mailto:catalanobartolomeo@gmail.com" className={`${style.contactLink}`}>Contattami</a>
      </div>
    </footer>
    );
  }
  
  export default AppFooter;
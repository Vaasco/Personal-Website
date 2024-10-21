import '../css/navbar.css'
import '../css/index.css'
import toogle_light from '../assets/night.png'
import toogle_dark from '../assets/day.png'

export const colors = Object.freeze({
    white: 'light',
    black: 'dark'
});

function Navbar({theme, setTheme}){

    const toogleMode = () => {
        theme == colors.white ? setTheme(colors.black) : setTheme(colors.white);
    }
    const navItems = ['Home', 'Studies','Portfolio','About'];
        return(
        <div className='navbar'>
            <span className='name-text'>Vasco Branco</span>
            <ul>
            {navItems.map((item, index) => (
          <li className= 'navbar-text' key={index}>{item}</li>
        ))}
            </ul>
            <img onClick= { () => {toogleMode()} }  src={theme == colors.black ? toogle_dark : toogle_light } alt="" className='toogle-icon'/>
        </div>
        
    );

}

export default Navbar;
import { Nav } from "react-bootstrap"
import "../css/Navbar.css"
import CartWidgetReactIcons from "./CartWidgetReactIcons"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="nav-container">
            <NavLink to='/'> 
                <img className="logo" src="../logo.png" alt="logo" />
            </NavLink>
            
            <div className="a-container">
                <NavLink to="/category/alimentos">Alimentos</NavLink>
                <NavLink to="/category/accesorios">Accesorios</NavLink>
                <NavLink to="/category/higiene">Higiene</NavLink>
            </div>
            <NavLink to='/cart'>
                <CartWidgetReactIcons/>
            </NavLink> 
            
        </nav>
    )
}
export default Navbar
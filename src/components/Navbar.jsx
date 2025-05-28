import "../css/Navbar.css"
import CartWidget from "./CardWidget"

const Navbar = () => {
    return(
        <nav className="nav-container">
            <h2>Tienda catdog</h2>
            <div className="a-container">
                <a href="">Alimentos</a>
                <a href="">Juguetes</a>
                <a href="">Accesorios</a>
            </div> 
            <CartWidget/>
        </nav>
    )
}
export default Navbar
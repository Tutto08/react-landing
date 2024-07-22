import './NavBar.css'
import CartWidget from './../components/CartWidget'
import { Link } from 'react-router-dom';
function NavBar(){

    return(
        <nav id="navBarContainer" className="navbar navbar-expand-lg">
            <div className='container-fluid d-flex justify-content-between w-100'>
                    <Link to="/" > 
                        <p href="#" className="navbar-brand d-flex align-items-center">
                            <img src='https://raw.githubusercontent.com/Tutto08/react-landing/main/src/assets/PHOENIX_LOGO.png' width={150}></img>
                        </p>
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img className="navbar-toggler-icon" src='https://raw.githubusercontent.com/Tutto08/react-landing/main/src/assets/menu_icon.png'></img>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/Home" >  
                                <span className="nav-link active" aria-current="page" >Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">                            
                            <Link to="/EnStock" >  
                                <span className="nav-link" href="#">En Stock</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>                              
                                <Link to="/Banpresto" >  
                                    <span className="dropdown-item" href="#">Banpresto</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Megahouse" >                                  
                                    <span className="dropdown-item" href="#">Megahouse</span>  
                                </Link>                              
                            </li>
                            <li>
                                <Link to="/Bandai" >  
                                    <span className="dropdown-item" href="#">Bandai</span>
                                </Link>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <span className="nav-link disabled" href="#" aria-disabled="true">Ofertas</span>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-lg-auto">
                        <li className="nav-item">
                        <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar
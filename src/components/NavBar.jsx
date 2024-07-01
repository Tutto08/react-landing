import './NavBar.css'
import CartWidget from './../components/CartWidget'
function NavBar(){

    return(
        <nav id="navBarContainer" className="navbar navbar-expand-lg">
            <div className='container-fluid d-flex justify-content-between w-100'>
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <img src='./../src/assets/PHOENIX_LOGO.png' width={150}></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img className="navbar-toggler-icon" src='./../src/assets/menu_icon.png'></img>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">En Stock</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Banpresto</a></li>
                            <li><a className="dropdown-item" href="#">Nendoroid</a></li>
                            <li><a className="dropdown-item" href="#">Funko</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" href="#" aria-disabled="true">Ofertas</a>
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
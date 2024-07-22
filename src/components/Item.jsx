import React  from "react";
import './Item.css'
import { Link } from "react-router-dom";
const Item = ({index, nombre, precio, imagen, estado, marca}) => {
    return(
        <div key={index} className="col-3">
            <div className="card m-3">
                <div className="row m-0 p-0">
                    <div className="col-12 content-nombre">
                        <p className="card-name">{nombre}</p>
                    </div>
                    <div className="col-12 content-imagen">
                        <img className="navbar-toggler-icon card-imagen" src={imagen}></img>
                    </div>
                    <div className="col-12">
                        <p className="card-price text-orange">Estado: <span className={(estado=="Disponible"? "text-green":"text-red")}>{estado}</span></p>
                    </div>
                    <div className="col-12">
                        <p className="card-price text-orange">Marca: <span className="text-black">{marca}</span></p>
                    </div>
                    <div className="col-12">
                        <p className="card-price text-orange">Precio: <span className="text-black">{precio}</span></p>
                    </div>
                    <div className="col-12 my-3 d-flex justify-content-center">
                        <Link to={`/detalle/${index}`}>                        
                            <button className="btn-card">Agregar al carrito</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
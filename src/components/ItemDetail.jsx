import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "./Context";
const ItemDetail = ({}) => {

    const {productos, agregarAlCarrito}  = useAppContext();
    const {id} = useParams();    

    const [productoSeleccionado, setProductoSeleccionado] = useState({})
    useEffect(() =>{
        const findProduct = productos.find(el => el.id === parseInt(id));
        setProductoSeleccionado(findProduct);
    })
    const descripcionConSaltosDeLinea = productoSeleccionado.descripcion
    ? productoSeleccionado.descripcion.replace(/\n/g, '<br/><br/>')
    : ""

    return(
        <div className="container">
            <div className="row my-4 p-0 border-detail">
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <img className="navbar-toggler-icon card-imagen" src={productoSeleccionado.imagen}></img>
                </div>
                <div className="col-6 border-detail-left d-flex justify-content-center align-items-center">
                    <div className="row m-0 p-0">
                        <div className="col-12 content-nombre">
                            <p className="card-name">{productoSeleccionado.nombre}</p>
                        </div>
                        <div className="col-12">
                            <p className="card-price text-orange">Estado: <span className={(productoSeleccionado.estado=="Disponible"? "text-green":"text-red")}>{productoSeleccionado.estado}</span></p>
                        </div>
                        <div className="col-12">
                            <p className="card-price text-orange">Marca: <span className="text-black">{productoSeleccionado.marca}</span></p>
                        </div>
                        <div className="col-12">
                            <p className="card-price text-orange">Precio: <span className="text-black">{productoSeleccionado.precio}</span></p>
                        </div>
                        <div className="col-12 my-3 d-flex justify-content-start">
                            <button className="btn-card" onClick={() => agregarAlCarrito(productoSeleccionado.id)}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 border-detail-top">
                    <p dangerouslySetInnerHTML={{ __html: descripcionConSaltosDeLinea }} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;

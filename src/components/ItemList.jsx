import React  from "react";
import Item from "./Item";
const ItemList = ({productos, agregarAlCarrito}) => {
    return(
        productos.map((el, index) => {
            return (
                <Item key={index}  index={el.id} nombre={el.nombre} precio={el.precio} imagen={el.imagen} estado={el.estado} marca={el.marca}/>
            )                    
        })
    )
}

export default ItemList;
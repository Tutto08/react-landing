import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useAppContext } from "./Context";
function ItemListContainer(props){
// mostrarBanner mostrara o no el banner
// orden ordenara los item de manera ascendente o descendente (dinero)
// itemPorPag cantidad de items que mostrara en el HOME
//Desctructuring
//const {productos} = props;

const {cargarData, carrito, productos, agregarAlCarrito}  = useAppContext();

const {filtro} = useParams(); 
const [productosFiltrados, setProductosFiltrados] = useState([])
useEffect(() =>{
    cargarData();
    console.log("Actualmente tengo estos productos", productos);
    const findProducts = (!filtro || filtro == "Home"? productos: (filtro == "EnStock")? productos.filter(el => el.estado === "Disponible") : productos.filter(el => el.marca === filtro));
    setProductosFiltrados(findProducts);

}, [filtro , productos])

    return(
        <div className="container h-100">            
            <div className="row p-0 m-0">
                {productos.length === 0 ? 
                <Loader/>              
                :
                <ItemList productos={productosFiltrados} agregarAlCarrito={agregarAlCarrito} />
                }
            </div>
        </div>
    );
}
export default ItemListContainer
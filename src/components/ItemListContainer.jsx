import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
function ItemListContainer(props){
// mostrarBanner mostrara o no el banner
// orden ordenara los item de manera ascendente o descendente (dinero)
// itemPorPag cantidad de items que mostrara en el HOME
//Desctructuring
const {mensajeBienvenida,mensajeContenido, productos} = props;

const {filtro} = useParams(); 
console.log(filtro);
const [productosFiltrados, setProductosFiltrados] = useState([])
useEffect(() =>{
    console.log("Actualmente tengo estos productos", productos);
    const findProducts = (!filtro || filtro == "Home"? productos: (filtro == "EnStock")? productos.filter(el => el.estado === "Disponible") : productos.filter(el => el.marca === filtro));
    setProductosFiltrados(findProducts);
    console.log(findProducts);

}, [filtro , productos])

const nombrePagina = 'PHOENIX TOY';
    return(
        <div className="container h-100">            
            <div className="row p-0 m-0">
                {productos.length === 0 ? 
                <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                    <h2>{mensajeBienvenida} <span className='color-basic'>{nombrePagina}</span></h2>
                    <span>{mensajeContenido}</span>
                    <img src='https://raw.githubusercontent.com/Tutto08/react-landing/main/src/assets/bajo_mantenimiento.png'height="300" width="400"></img>
                </div>               
                :
                <ItemList productos={productosFiltrados} />
                }
            </div>
        </div>
    );
}
export default ItemListContainer
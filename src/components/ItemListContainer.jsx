function ItemListContainer({mostrarBanner, orden, itemPorPag, mensajeBienvenida, mensajeContenido }){
// mostrarBanner mostrara o no el banner
// orden ordenara los item de manera ascendente o descendente (dinero)
// itemPorPag cantidad de items que mostrara en el HOME
const nombrePagina = 'PHOENIX TOY';
    return(
        <div className="container h-75">
            <div className="row h-100 p-0 m-0">
                <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                    <h2>{mensajeBienvenida} <span className='color-basic'>{nombrePagina}</span></h2>
                    <span>{mensajeContenido}</span>
                    <img src='./../src/assets/bajo_mantenimiento.png'height="300" width="400"></img>
                </div>
            </div>
        </div>
    );
}
export default ItemListContainer
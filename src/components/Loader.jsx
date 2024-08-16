import React from "react";
import './Loader.css'
const Loader = (props) => {
    return(
        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <h2>Bienvenido a <span className='color-basic'>PHOENIX TOY</span></h2>
                <span className="loader"></span>
                <span>Cargando ...</span>
            <img src='https://raw.githubusercontent.com/Tutto08/react-landing/main/src/assets/bajo_mantenimiento.png'height="300" width="400"></img>
        </div>
    )
}

export default Loader
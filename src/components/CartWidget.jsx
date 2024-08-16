import React, { useState } from 'react';
import { useAppContext } from './Context';
import ModalComponent from './ModalComponent';

function CartWidget() {
    const { carrito, crearOrden } = useAppContext();
    const [showModal, setShowModal] = useState(false);

    const handleCarritoClick = () => {
        if (carrito.length > 0) {
            setShowModal(true);
        } else {
            console.log("Carrito está vacío");
        }
    };

    const handleSubmit = (formData) => {
        crearOrden(formData);
    };

    return (
        <>
            <div className="nav-link carrito" onClick={handleCarritoClick}>
                <img src='https://raw.githubusercontent.com/Tutto08/react-landing/main/src/assets/cart_icon.png' width={25} alt="Carrito" />
                <label className='ms-2'>{carrito.length}</label>
            </div>

            <ModalComponent
                show={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default CartWidget;
import React from 'react';
import '../assets/components/pages/Admin/style/Pedido.css';
import { useNavigate } from 'react-router-dom';

function ConfirmPago() {
    const navigate = useNavigate();

    const handleVolverHome = () => {
        navigate('/home');
    };

    return (
        <div className='container-pago'>
            <h1>Pago confirmado</h1>
            <p>Gracias por su compra. Su pago ha sido procesado con éxito.</p>
            <button className="Buttons" onClick={handleVolverHome}>
                Volver al Inicio
            </button>
        </div>
    );
}

export default ConfirmPago;
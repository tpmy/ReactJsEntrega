import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)

    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const incrementar = () => contador < stock && setContador(contador+ 1)

    const decrementar = () => contador > 1 && setContador (contador - 1)

    return (
        <>
        <div >
            <div className='tarjeta contadorr'>
            <button onClick={decrementar} className='btn btn-light espacio'>-</button>
            <div className='conta'>{contador}</div>
            <button onClick={incrementar } className='btn btn-dark espacio'>+</button>
            </div>
            <br />
            <button className='btn btn-dark agregar' onClick={agregarAlCarrito}> Agregar al carrito</button>
        </div>
        </>
    );
}

export default ItemCount;

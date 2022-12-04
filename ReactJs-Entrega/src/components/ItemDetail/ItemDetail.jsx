import { useContext } from 'react';
import ItemCount from '../ItemCount/contador';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({producto}) => {

    const {cart, isInCart, addItem} = useContext(CartContext)
    

    const onAdd = (contador) => {
       
        addItem(producto, contador)
    }

    return (
        <div className='tarjeta2 row g-4'>
            <div className='col-md-4'>
                <img src={producto.img} className="tarjeta3 imagen" />
            </div>
            <div className='col-md-8'>
                <div className='card-body '>
                    <h5 className='card-title textotarj'> {producto.nombre}</h5>
                    <p className='card-text textotarj'>Modelo: {producto.modelo}</p>
                    <p className='card-text textotarj'>Marca: {producto.marca}</p>
                    <p className='card-text textotarj'>Precio: {producto.precio}</p>
                    <p className='card-text textotarj'>Stock: {producto.stock}</p>
                    <ItemCount stock = {producto.stock} onAdd={onAdd} />
                    <button className='btn btn-secondary iralcarrito' ><Link to="/cart">Ir al Carrito</Link></button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;

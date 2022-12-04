import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { consultarBDD } from '../../assets/funciones';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        consultarBDD('../JSON/productos.json').then(productos =>{
             const prod = productos.find(productoArray => productoArray.id === parseInt(id))
        
            setProducto(prod)

        }
        )
    })

    return (
        <div>
            <div className='card mb-4 container ItemDetail'></div>
            <ItemDetail producto={producto} />
        </div>
    );
}

export default ItemDetailContainer;

//import {} from 'react';
import { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import {consultarBDD} from '../../assets/funciones'
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkMode"; 

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    const {DarkMode, toggleDarkMode} = useContext(DarkModeContext)

    useEffect(() => {
        if(category){
            consultarBDD('../json/productos.json').then(products => {
                const productsList = products.filter(prod => prod.idCategoria === parseInt(category))
                console.log(productsList);
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            consultarBDD('./json/productos.json').then(productsList => {
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        }, [category]);
        
            

     return (
        //Si es verdadero queda darkmode, sino es falso sale solo row
         <div className={DarkMode ? " darkMode" : ""}>
            <button className={DarkMode ? 'btn btn-light luna' : 'btn btn-dark luna'} onClick={() => toggleDarkMode()}> <i className="fa-solid fa-moon"></i></button>
            {productos}
        </div>
     );
}

export default ItemListContainer;

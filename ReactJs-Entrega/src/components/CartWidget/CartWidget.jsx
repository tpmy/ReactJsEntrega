import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
    

const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
            <Link className="nav-link" to='/cart'>
                <button className='btn'>
                <i className="fa-solid fa-cart-shopping"></i>
                { getItemQuantity() >= 1 && <span className="cantCarrito">{getItemQuantity()}</span>}
                </button>
            </Link>
        </>
    );
 }


export default CartWidget;

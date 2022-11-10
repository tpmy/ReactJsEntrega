import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <>
            <Link className="nav-link" to='/cart'>
                <button className='btn btn-outline-secondary'>
                    <i className='bi bi-basket3'></i>
                </button>
            </Link>
        </>
    );
}

export default CartWidget;

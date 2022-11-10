import { useTransition } from 'react';
import {useState} from 'react';

const ItemCount = () => {
    const [ItemCount, setItemCount] = useState(1)

    const modificarItemCount = (operacion) => {
        if (operacion === "+") {
            if (ItemCount < 10)
            setItemCount(ItemCount + 1)
        } else {
            if (ItemCount > 1 )
            setItemCount(ItemCount - 1)
        }
}

    return (
        <>
            <button onClick={()=> modificarItemCount("+") } className='btn btn-dark'>+</button>
            {ItemCount}
            <button onClick={()=> modificarItemCount("-") } className='btn btn-light'>-</button>
        </>
    );
}

export default ItemCount;

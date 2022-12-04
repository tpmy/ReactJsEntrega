import {useState, useEffect} from 'react';

const Dolar = () => {

    const [dolar, setDolar] = useState ([]);

    useEffect(() =>{
        // setInterval(() => {
            
        // }, interval);     intervalos para cambiar valores mediante una API

        fetch('https://criptoya.com/api/dolar')
        .then (response => response.json())
        .then (({solidario, blue, ccl, mep}) => {
                const dolarDOM = 
                <div >
                    <h2>Cotizacion del dolar en Arg</h2>
                    <p >Dolar Solidario: ${solidario}</p>
                    <p>Dolar Blue: ${blue}</p>
                    <p>Dolalr CCL; ${ccl}</p>
                    <p>Dolar Mep: ${mep}</p>
                </div>

            setDolar(dolarDOM)
            })

    },[]);

    return (
        <div>
            {dolar}
        </div>
    );
}

export default Dolar;

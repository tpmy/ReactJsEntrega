import React from 'react';

const Checkout = () => {
    const datosFormulario = React.useRef()
    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario);
        const datForm = new FormData(datosFormulario.current)
        const valores = Object.fromEntries(datForm)
        console.log(valores);
        e.target.reset()
       
    }


    
    return (
        <div className='container'>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                  <label htmlFor="Nombre" className="form-label">Nombre y apellido</label>
                  <input type="text" className="form-control" name='nombre' />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">Email</label>
                  <input type="email" className="form-control" name='email' />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">Repetir Email</label>
                  <input type="email" className="form-control" name='email' />
                </div>
                <div className="mb-3">
                  <label htmlFor="dni" className="form-label">DNI</label>
                  <input type="number" className="form-control" name='dni' />
                </div>
                <div className="mb-3">
                  <label htmlFor="numero de telefono" className="form-label">Numero de telefono</label>
                  <input type="number" className="form-control" name='celular' />
                </div>
                <div className="mb-3">
                  <label htmlFor="Direccion" className="form-label">Direccion</label>
                  <input type="text" className="form-control" name='direccion' />
                </div>
                  
                
                <button type="submit" className="btn btn-primary botonCompra">Finalizar Compra</button>
            </form>
        </div>
    );

    
}



export default Checkout;

const FormBusqueda = ({busqueda}) => {
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder={busqueda} aria-label="Search" />
            <button className="btn distancia" type="submit">Search</button>
        </form>
    );
}

export default FormBusqueda;

import { Link } from 'react-router-dom';
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import './navbar.css'
import Dropdown from './Dropdown/Dropdown';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link' to= '/'>
            <button className='btn btn-secondary'>Home</button>
          </Link>
        </li>
        <Dropdown/>
      </ul>
        <FormBusqueda busqueda={"Buscar Productos"}/>
    </div>
        <CartWidget/>
  </div>
</nav>
        </div>
    );
}

export default Navbar;

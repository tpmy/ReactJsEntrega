import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
// import Contador from './Contador/contador';
// import Dolar from './Dolar/Dolar';
import Cart from './Cart/Cart';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';


const App = () => {
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;

import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { DarkModeProvider } from '../Context/darkMode';
import { CartContextProvider } from '../Context/CartContext';
import Navbar from './Navbar/Navbar';
import Cart from './Cart/Cart';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Checkout from './Checkout/Checkout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    return (
      <>
      
      <DarkModeProvider>
        <BrowserRouter>
          <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
          </CartContextProvider>
        </BrowserRouter>
      </DarkModeProvider>
      </>
    );
}

export default App;

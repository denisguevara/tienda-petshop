import './App.css'
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './components/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//importar al proveedor
import { CartProvider } from './context/CartContext';


function App() {
  

  return (
    <BrowserRouter>
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi tienda"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria: "/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App

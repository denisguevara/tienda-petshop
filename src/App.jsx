import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a mi tienda"/>
    </>
  )
}

export default App

import './styles/styles.css'
import { NavBar } from './components/Navbar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div>
      <NavBar />  
      <ItemListContainer saludo={"¡Bienvenidos a la primer Preentrega!"}/>

    </div>
    
  )
}

export default App

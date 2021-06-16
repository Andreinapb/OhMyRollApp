import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Info from './Components/Info.json'
import ItemDatailContainer from "./Components/ItemDetailContainer/ItemDatailContainer";



function App() {

const productos = Info

  return (
    <div>
     <NavBar/>
     <ItemListContainer productos= {productos}/>
<ItemDatailContainer productos= {productos}/>

    </div>
  );
}

export default App;

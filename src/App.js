import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'



function App() {
  return (
    <div>
     <NavBar/>
     <ItemListContainer/>
    </div>
  );
}

export default App;

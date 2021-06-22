import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Info from './Components/Info.json'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";



function App() {

const productos = Info

  return (
    <div>

<BrowserRouter>
<NavBar/>
<Switch>
<Route exact path='/'> 
<ItemListContainer productos= {productos}/>
</Route>
<Route exact path='/category/:id'> 
<ItemListContainer productos= {productos}/>
</Route>
<Route path ='/item/:id'> 
<ItemDetailContainer productos= {productos}/>
</Route>
</Switch>
</BrowserRouter>




     
     
    

    </div>
  );
}

export default App;

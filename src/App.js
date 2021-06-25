import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Info from './Components/Info.json'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";


function App() {

const productos = Info

  return (
    <div>

<BrowserRouter>
<NavBar productos = {Info}/>
<Switch>
<Route exact path='/'> 
<ItemListContainer productos= {productos}/>
</Route>
<Route path='/categoria/:nombre'> 
<ItemListContainer productos= {productos}/>
</Route>
<Route path='/item/:id'>
<ItemDetailContainer productos= {productos}></ItemDetailContainer>
</Route>
</Switch>
</BrowserRouter>


    </div>
  );
}

export default App;
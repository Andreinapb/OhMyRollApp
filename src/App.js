import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartProvider from './Context/CartProvider';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout.js/Checkout'


function App() {

  return (
    <div>

<CartProvider>

<BrowserRouter>
<NavBar/>
<Switch>
<Route exact path='/'> 
<ItemListContainer />
</Route>
<Route path='/categoria/:nombre'> 
<ItemListContainer />
</Route>
<Route path='/item/:id'>
<ItemDetailContainer></ItemDetailContainer>
</Route>
<Route path="/cart">
<Cart />
</Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
</Switch>
</BrowserRouter>


</CartProvider>


    </div>
  );
}

export default App;
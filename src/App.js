import './styles/App.scss'
import NavBar from "./Components/Header/NavBar";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemListContainer from './Components/Item/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartProvider from './Context/CartProvider';
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import Cart from './Components/Checkout/Checkout'
import Checkout from './Components/Checkout/Checkout'
import Nosotros from './Components/Home/Nosotros'
import Banner from './Components/Header/Banner'
import Cita from './Components/Home/Cita'


function App() {

  return (
    <div>

<CartProvider>

<BrowserRouter>
<Switch>
<Route exact path='/'> 
<Banner></Banner>
</Route>
</Switch>

<NavBar/>
<Switch>
<Route exact path='/'> 
<Nosotros/>
<ItemListContainer />
<Cita></Cita>
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
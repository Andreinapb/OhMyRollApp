import "./styles/App.scss";
import NavBar from "./Components/Header/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./Components/Item/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./Context/CartProvider";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import Cart from './Components/Cart/Cart'
import Checkout from "./Components/Checkout/Checkout";
import Nosotros from "./Components/Home/Nosotros";
import Banner from "./Components/Header/Banner";
import Cita from "./Components/Home/Cita";
import Footer from "./Components/Footer/Footer";
import Recomendaciones from "./Components/Home/Recomendaciones";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Switch>
            <Route  path="/">
              <Banner></Banner>
            </Route>
          </Switch>
          <NavBar />
          <Switch>
            <Route exact path="/Nosotros">
              <Nosotros/>
              </Route>
              <Route exact path ='/'>
              <ItemListContainer/>
              <Cita/>
              </Route>
              <Route path='/Recomendaciones'>
              <Recomendaciones/>
              </Route>
            <Route path="/categoria/:nombre">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer></ItemDetailContainer>
            </Route>
            <Route exact path="/Cart">
              <Cart></Cart>
            </Route>
              <Route  path="/Checkout">
              <Checkout/>
            </Route>
            <Route path='Contacto'>
              <Footer/>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

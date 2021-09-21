//Components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

//Import routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';

const App = () => {

    return (
        <CartProvider>
        <BrowserRouter>
            <NavBar brandName='HW Market'/>
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/category/:categoryId" component={ItemListContainer} />
                <Route path="/item/:id" component={ItemDetailContainer} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
        </CartProvider>
    )
}

export default App;
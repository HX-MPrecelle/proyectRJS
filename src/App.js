//Components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

//Import routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>
            <NavBar brandName='HW Market'/>
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/category/:categoryId" component={ItemListContainer} />
                <Route path="/item/:id" component={ItemDetailContainer} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
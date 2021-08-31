//Components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {

    return (
        <>
            <NavBar brandName='HW Market'/>
            <ItemListContainer text='Productos destacados' />
            <ItemDetailContainer />
        </>
    )
}

export default App;
//Components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {

    return (
        <>
            <NavBar brandName='HW Market'/>
            <ItemListContainer text='Productos destacados' />
        </>
    )
}

export default App;
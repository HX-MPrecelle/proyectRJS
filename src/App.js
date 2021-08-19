//Components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
    return (
        <>
            <NavBar brandName="HW Market"/>
            <ItemListContainer text='¡Bienvenido a la aplicación de React de Martín Precelle!' />
        </>
    )
}

export default App;
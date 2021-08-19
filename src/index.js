//Tener la variable React en scope
import React from 'react';

//Tener la variable ReactDOM en scope
import ReactDOM from 'react-dom';

//Tener un elemento de React (componente)
import App from './App';

//Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Tener una función render corriendo
ReactDOM.render(<App/>, document.getElementById('root'));

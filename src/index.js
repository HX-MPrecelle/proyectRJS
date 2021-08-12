//Tener la variable React en scope
import React from "react"

//Tener la variable ReactDOM en scope
import ReactDOM from "react-dom"

//Tener un elemento de React (componente)
import App from "./App"

//Tener una función render corriendo
ReactDOM.render(<App/>, document.getElementById('root'))

//NO SE PUEDEN IMPORTAR ARCHIVOS FUERA DE LA CARPETA .SRC SI SE CREA CON create-react-app
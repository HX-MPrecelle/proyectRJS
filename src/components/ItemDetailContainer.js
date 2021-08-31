import { useEffect } from 'react';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from './ItemDetail';

const getItems = () => {

    return new Promise ((resolve, reject) => {

        setTimeout(() =>
    
            resolve(
                [{id: 1, destacado: false, nombre:'Gabinete Mid Tower Aerocool Bolt Black', categoria: 'Gabinetes', precio: '4500', stock: 3, description: 'Marca: Aerocool - Modelo: Bolt  - P/N: Bolt-A-BK-v1 - UPC: 4718009156326 - Formatos de mother compatibles: ATX/micro-ATX/mini-ITX - Color Exterior: Negro - Color Interior: Negro - Ventana: Si (acrílico) - Fuente: No - Display: No - Coolers: Frontal 120mm x 3 , Superior 120mm x 2 , Trasero 120mm x 1 (Incluido) - Usb: 3.0 x 1, 2.0 x 2 - Audio/Mic: HD Audio x 1 - Card Reader: No - Ubicacion de la fuente: Abajo - Ubicacion de botones: Superior - Espacio para GPU: 355 mm - Espacio para CPU cooler: 155 mm - Iluminacion: RGB - Bahias Ext. 5 1/4: No - Bahias Ext. 3 1/2: No - Tamaño maximo placa de video: 340mm - Bahias Int. 3 1/2: 2 - Bahias Int. 2 1/2: 2 - Watercooling: Soportado - Dimensiones: 194 x 444 x 410mm - Peso: 3,38 kg'}]
                ), 3000
            )
        })

}

const id = 1;

const ItemDetailContainer = () => {
    
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {

        getItems()
        .then((data) => {
            let aux = data.find(element => element.id === id)
            setDataToShow(aux)
        })

    })
    
    return ( 
        <>

        {dataToShow.length === 0 ? (
            <div className="posCenter">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>

        ) : (

        <ItemDetail data={dataToShow} />

        )}

        </>
    );
};
        

 
export default ItemDetailContainer;
//Import ItemListContainer.css
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'
import Spinner from 'react-bootstrap/Spinner'
import './ItemListContainer.css';

const Products = () => {

    return new Promise ((resolve, reject) => {

    setTimeout(() =>

        resolve([
            {id: 1, destacado: false, nombre:'Gabinete Mid Tower Aerocool Bolt Black', categoria: 'Gabinetes', precio: 4500, stock: 3},
            {id: 2, destacado: false, nombre:'Gabinete Mid Tower Thermaltake H100 Vidrio Templado', categoria: 'Gabinetes', precio: 7000, stock: 4},
            {id: 3, destacado: true, nombre:'Gabinete Mid Tower Cooler Master Masterbox MB520 ARGB', categoria: 'Gabinetes', precio: 9900, stock: 2},
            {id: 4, destacado: false, nombre:'Motherboard AM4 - Gigabyte GA-B450M GAMING', categoria: 'Motherboards', precio: 9500, stock: 4},
            {id: 5, destacado: true, nombre:'Motherboard AM4 - Asus Rog B550-F GAMING', categoria: 'Motherboards', precio: 26000, stock: 2},
            {id: 6, destacado: false, nombre:'Motherboard 1200 11°Gen - Msi Z590 UNIFY', categoria: 'Motherboards', precio: 53000, stock: 2},
            {id: 7, destacado: true, nombre:'Procesador Amd Ryzen 5 3600 4.2 Ghz - AM4', categoria: 'Procesadores', precio: 32500, stock: 5},
            {id: 8, destacado: false, nombre:'Procesador Amd Ryzen 7 5800X 4.7 Ghz - AM4 Sin Cooler Sin Video', categoria: 'Procesadores', precio: 58000, stock: 3},
            {id: 9, destacado: true, nombre:'Intel Core i7 10700KF 5.10 Ghz Comet Lake 1200 Sin Cooler Sin Video', categoria: 'Procesadores', precio: 42000, stock: 4},
            {id: 10, destacado: false, nombre:'Procesador Intel Core i9 10900 5.2 Ghz Comet Lake 1200', categoria: 'Procesadores', precio: 54000, stock: 3},
            {id: 11, destacado: false, nombre:'Memoria Ram DDR4 - 8Gb 3200 Mhz Predator Rgb HyperX', categoria: 'Memorias RAM', precio: 6900, stock: 6},
            {id: 12, destacado: true, nombre:'Memoria Ram DDR4 - 16Gb 3200 Mhz Beast Kingston Fury Rgb', categoria: 'Memorias RAM', precio: 10500, stock: 4},
            {id: 13, destacado: false, nombre:'Memoria Ram DDR4 - 32Gb 3200 Mhz Ballistix Negro Rgb', categoria: 'Memorias RAM', precio: 29000, stock: 4},
            {id: 14, destacado: true, nombre:'Disco Rigido 1Tb Seagate Ironwolf', categoria: 'Almacenamiento', precio: 8000, stock: 5},
            {id: 15, destacado: false, nombre:'Disco Rigido 6Tb WD Black', categoria: 'Almacenamiento', precio: 30000, stock: 2},
            {id: 16, destacado: false, nombre:'Disco Solido Ssd 480Gb Kingston A400', categoria: 'Almacenamiento', precio: 6700, stock: 3},
            {id: 18, destacado: true, nombre:'Disco Solido Ssd M2 Pci-E 500Gb Gigabyte Aorus Gen4', categoria: 'Almacenamiento', precio: 13500, stock: 4},
            {id: 19, destacado: false, nombre:'Placa De Video GeForce GTX 1650 4Gb Msi Ventus Xs DDR6', categoria: 'Placas de video', precio: 60000, stock: 4},
            {id: 20, destacado: true, nombre:'Placa De Video GeForce RTX 3060 12Gb Asus Dual Oc', categoria: 'Placas de video', precio: 155000, stock: 3},
            {id: 21, destacado: true, nombre:'Placa De Video Radeon RX 6900 XT 16Gb Asrock Phantom Gaming D OC', categoria: 'Placas de video', precio: 315000, stock: 2},
            {id: 22, destacado: true, nombre:'Fuente Corsair VS500 500W 80 Plus White', categoria: 'Fuentes', precio: 7000, stock: 4},
            {id: 23, destacado: true, nombre:'Fuente Thermaltake Smart 600W 80 Plus White', categoria: 'Fuentes', precio: 6000, stock: 4},
            {id: 24, destacado: true, nombre:'Fuente Thermaltake Smart BX1 750W 80 Plus Bronze', categoria: 'Fuentes', precio: 11000, stock: 3},
            {id: 25, destacado: true, nombre:'Cooler Cpu Watercooler Asus Rog Ryuo 120 125W', categoria: 'Refrigeración PC', precio: 35000, stock: 3},
            {id: 26, destacado: false, nombre:'Cooler Cpu Watercooler Gamemax Icechill 240 Argb', categoria: 'Refrigeración PC', precio: 15000, stock: 4},
            {id: 27, destacado: false, nombre:'Cooler Cpu Watercooler Asus Tuf LC 120 Rgb 125 W', categoria: 'Refrigeración PC', precio: 16000, stock: 3}
            ]),
            3000
        )
    })
}

const ItemListContainer = ({text}) => {

    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        Products().then((data) => {
            let aux = data.filter(producto => producto.destacado)
            setDataToShow(aux)
        })
    }, [])   

    return dataToShow.length === 0 ? (
        <>
            <div className="posCenter">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        </> 
        ) : (
        <>
            <div className="posCenter">
                <div>    
                    <h3 className="posCenter">{text}</h3>
                </div>
                <div>    
                    <ItemList products={dataToShow} />
                </div>
            </div>    
        </>
        );
}
 
export default ItemListContainer;
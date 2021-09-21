//Import ItemListContainer.css
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Destacados from './Destacados';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import './generalStyles.css';


const Products = () => {

    return new Promise ((resolve, reject) => {

    setTimeout(() =>

        resolve([
            {id: 1, destacado: false, nombre:'Gabinete Mid Tower Aerocool Bolt Black', categoria: 'gabinetes', precio: 4500, description: 'Esta es la descripción del producto', stock: 3},
            {id: 2, destacado: false, nombre:'Gabinete Mid Tower Thermaltake H100 Vidrio Templado', categoria: 'gabinetes', precio: 7000, description: 'Esta es la descripción del producto', stock: 4},
            {id: 3, destacado: true, nombre:'Gabinete Mid Tower Cooler Master Masterbox MB520 ARGB', categoria: 'gabinetes', precio: 9900, description: 'Esta es la descripción del producto', stock: 2},
            {id: 4, destacado: false, nombre:'Motherboard AM4 - Gigabyte GA-B450M GAMING', categoria: 'motherboards', precio: 9500, description: 'Esta es la descripción del producto', stock: 4},
            {id: 5, destacado: true, nombre:'Motherboard AM4 - Asus Rog B550-F GAMING', categoria: 'motherboards', precio: 26000, description: 'Esta es la descripción del producto', stock: 2},
            {id: 6, destacado: false, nombre:'Motherboard 1200 11°Gen - Msi Z590 UNIFY', categoria: 'motherboards', precio: 53000, description: 'Esta es la descripción del producto', stock: 2},
            {id: 7, destacado: true, nombre:'Procesador Amd Ryzen 5 3600 4.2 Ghz - AM4', categoryId: 'procesadores', precio: 32500, description: 'Esta es la descripción del producto', stock: 5},
            {id: 8, destacado: false, nombre:'Procesador Amd Ryzen 7 5800X 4.7 Ghz - AM4 Sin Cooler Sin Video', categoryId: 'procesadores', precio: 58000, description: 'Esta es la descripción del producto', stock: 3},
            {id: 9, destacado: true, nombre:'Intel Core i7 10700KF 5.10 Ghz Comet Lake 1200 Sin Cooler Sin Video', categoryId: 'procesadores', precio: 42000, description: 'Esta es la descripción del producto', stock: 4},
            {id: 10, destacado: false, nombre:'Procesador Intel Core i9 10900 5.2 Ghz Comet Lake 1200', categoryId: 'procesadores', precio: 54000, description: 'Esta es la descripción del producto', stock: 3},
            {id: 11, destacado: false, nombre:'Memoria Ram DDR4 - 8Gb 3200 Mhz Predator Rgb HyperX', categoryId: 'memorias-ram', precio: 6900, description: 'Esta es la descripción del producto', stock: 6},
            {id: 12, destacado: true, nombre:'Memoria Ram DDR4 - 16Gb 3200 Mhz Beast Kingston Fury Rgb', categoryId: 'memorias-ram', precio: 10500, description: 'Esta es la descripción del producto', stock: 4},
            {id: 13, destacado: false, nombre:'Memoria Ram DDR4 - 32Gb 3200 Mhz Ballistix Negro Rgb', categoryId: 'memorias-ram', precio: 29000, description: 'Esta es la descripción del producto', stock: 4},
            {id: 14, destacado: true, nombre:'Disco Rigido 1Tb Seagate Ironwolf', categoryId: 'almacenamiento', precio: 8000, description: 'Esta es la descripción del producto', stock: 5},
            {id: 15, destacado: false, nombre:'Disco Rigido 6Tb WD Black', categoryId: 'almacenamiento', precio: 30000, description: 'Esta es la descripción del producto', stock: 2},
            {id: 16, destacado: false, nombre:'Disco Solido Ssd 480Gb Kingston A400', categoryId: 'almacenamiento', precio: 6700, description: 'Esta es la descripción del producto', stock: 3},
            {id: 18, destacado: true, nombre:'Disco Solido Ssd M2 Pci-E 500Gb Gigabyte Aorus Gen4', categoryId: 'almacenamiento', precio: 13500, description: 'Esta es la descripción del producto', stock: 4},
            {id: 19, destacado: false, nombre:'Placa De Video GeForce GTX 1650 4Gb Msi Ventus Xs DDR6', categoryId: 'placas-de-video', precio: 60000, description: 'Esta es la descripción del producto', stock: 4},
            {id: 20, destacado: true, nombre:'Placa De Video GeForce RTX 3060 12Gb Asus Dual Oc', categoryId: 'placas-de-video', precio: 155000, description: 'Esta es la descripción del producto', stock: 3},
            {id: 21, destacado: true, nombre:'Placa De Video Radeon RX 6900 XT 16Gb Asrock Phantom Gaming D OC', categoryId: 'placas-de-video', precio: 315000, description: 'Esta es la descripción del producto', stock: 2},
            {id: 22, destacado: true, nombre:'Fuente Corsair VS500 500W 80 Plus White', categoryId: 'fuentes', precio: 7000, description: 'Esta es la descripción del producto', stock: 4},
            {id: 23, destacado: true, nombre:'Fuente Thermaltake Smart 600W 80 Plus White', categoryId: 'fuentes', precio: 6000, description: 'Esta es la descripción del producto', stock: 4},
            {id: 24, destacado: false, nombre:'Fuente Thermaltake Smart BX1 750W 80 Plus Bronze', categoryId: 'fuentes', precio: 11000, description: 'Esta es la descripción del producto', stock: 3},
            {id: 25, destacado: true, nombre:'Cooler Cpu Watercooler Asusun aog Ryuo 120 125W', categoryId: 'refrigeracion-pc', precio: 35000, description: 'Esta es la descripción del producto', stock: 3},
            {id: 26, destacado: false, nombre:'Cooler Cpu Watercooler Gamemax Icechill 240 Argb', categoryId: 'refrigeracion-pc', precio: 15000, description: 'Esta es la descripción del producto', stock: 4},
            {id: 27, destacado: false, nombre:'Cooler Cpu Watercooler Asus Tuf LC 120 Rgb 125 W', categoryId: 'refrigeracion-pc', precio: 16000, description: 'Esta es la descripción del producto', stock: 3}
            ]),
            1000
        )
    })
}

const ItemListContainer = () => {

    const [dataToShow, setDataToShow] = useState([]);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        Products().then((data) => {
            let aux = data.filter(producto => producto.destacado === true)
            setDataToShow(aux)
            if(categoryId) {
            let categorias = data.filter(producto => categoryId === producto.categoria)
            setProducts(categorias)
            } else {
                setProducts(data)
            }
        })
    }, [categoryId]) 

    return dataToShow.length === 0 ? (
        <>
            <div>
                <Spinner animation="border" role="status" />    
            </div>
        </>
    ) : (
        <>
            <div>
                <ItemList products={products} />
            </div>
            <div>
                <Destacados dataToShow={dataToShow} />
            </div>
        </>
    );
};

export default ItemListContainer;
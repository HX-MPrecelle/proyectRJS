import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { firestore } from "../firebase";

const ItemDetailContainer = () => {
    
    const [dataToShow, setDataToShow] = useState({});
    const {id} = useParams()

    useEffect(() => {

        const item = firestore.collection("productos").doc(id)

        item.get()
        .then(e => setDataToShow({id: e.id, ...e.data()}))

    }, [id])
    
    return ( 

        <ItemDetail data={dataToShow} />

        )
};
        

 
export default ItemDetailContainer;
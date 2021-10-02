import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {firestore} from '../firebase';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Form = () => {

    const {cart, totalPrice, clear} = useContext(CartContext)

    const [name, setName] = useState("")

    const [email, setEmail] = useState("")

    const [phone, setPhone] = useState(0)


    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePhone = (e) => {
        setPhone(e.target.value)
    }

    //Incluyo elementos específicos de cada item
    const items = {...cart};

    const buyer = {name, email, phone}

    console.log('nombre: ' + name, '| email: ' + email, '| telefono: ' + phone);

    const confirmOrder = () => {
        const batch = firestore.batch();
        
        const order = firestore.collection("orders");
        const newOrder = {
            buyer,
            items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice()
        }

        console.log('new order', newOrder)
        order.add(newOrder)
            .then(({id}) => {

                /* Actualizo Cantidad */
                cart.forEach((element) => {
                    const itemRef = firestore.collection("items").doc(element.item.id)
                    batch.update(itemRef, {
                        stock: element.item.stock - element.quantity
                    });
                
                })

                batch.commit();  
                alert(`Tu orden id es: ${id}`)
            })
            .catch(err => err)
            .finally(() => {
                clear()
            }) // reseteo carrito)

            console.log(buyer)
    }

    return ( 

        <>
            <h3 className="posCenter">Complete los datos para el pedido</h3>
            <input type="text" placeholder="Nombre" onChange={changeName} className="inputsBut" />
            <input type="text" placeholder="Email" onChange={changeEmail} className="inputsBut" />
            <input type="number" placeholder="Teléfono" onChange={changePhone} className="inputsBut" />
            
            <button onClick={confirmOrder} className="inputsBut">Confirmar pedido</button>
        </>
     );
}
 
export default Form;
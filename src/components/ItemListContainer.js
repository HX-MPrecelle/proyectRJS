//Import ItemListContainer.css
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Destacados from "./Destacados";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import "./generalStyles.css";

const ItemListContainer = () => {
  const [dataToShow, setDataToShow] = useState([]);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    //Referencia de la "base de datos"
    //const db = firestore;

    //Referencia a la collection
    let collection;

    categoryId
      ? (collection = firestore
          .collection("productos")
          .where("categoryId", "==", categoryId))
      : (collection = firestore.collection("productos"));

    //Hago un query
    const query = collection.get();

    query
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      })

      .catch((error) => {
        console.error(error);
      });

    const destacados =  firestore.collection("productos").where("destacado", "==", true).get();

      destacados
        .then((destac) => {
          setDataToShow(destac.docs.map((doc) => ({...doc.data(), id:doc.id})))
        })
        .catch((error) => {
          console.error(error);
        });
      
  }, [categoryId]);

  console.log('que viene en products', products);
  console.log('que viene en destacados', dataToShow);

  return products.length === 0 ? (
    <>
      <div className="posCenter">
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
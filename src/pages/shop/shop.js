import React, { useState } from "react";
import TextField from "@mui/material/TextField";


// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import MensajeCompra from "../../Components/MensajeCompra/MensajeCompra";

const styles = {
    containerShop: {
        textAlign: "center",
        paddingTop: 20,
    },
    };

const initialState = {
    name: "",
    lastName: "",
    city: "",
    };

const Shop = () => {
    const [values, setValues] = useState(initialState);
    // Este estado está destinado a guardar el id de la compra
    const [purchaseID, setPurchaseID] = useState("");
    const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
    };

    const onSubmit = async (e) => {
    e.preventDefault();
      // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchases"), {
        values,
});
      // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
    };

    return (
    <div style={styles.containerShop}>
        <h1>Shop</h1>
        <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
            placeholder="Nombre"
            style={{ margin: 10, width: 400 }}
            name="name"
            value={values.name}
            onChange={onChange}
        />
        <TextField
            placeholder="Apellido"
            style={{ margin: 10, width: 400 }}
            name="lastName"
            value={values.lastName}
            onChange={onChange}
        />
        <TextField
            placeholder="Domicilio"
            style={{ margin: 10, width: 400 }}
            name="city"
            value={values.city}
            onChange={onChange}
        />
        <button className="btnASendAction" type="submit">
            Send
        </button>
        </form>
        {purchaseID.length ? <MensajeCompra purchaseID={purchaseID} /> : null}
        </div>
    );
    };

export default Shop;

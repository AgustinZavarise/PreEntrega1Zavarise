import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detailVoces.css";
// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardProduct from "../../Components/CardProduct/CardProduct";


const DetailVoces = () => {
const [instrumentoData, setInstrumentoData] = useState([]);

let { voces } = useParams();

    useEffect(() => {
    const getInstrumentos = async () => {
    const q = query(collection(db, "Instrumentos"), where("voces", "==", voces));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
    });
      // console.log(docs);
    setInstrumentoData(docs);
    };
    getInstrumentos();
    }, [voces]);

return (
    <div className="detailVoces" >
        
        {instrumentoData.map((data) => {
        return <CardProduct instrumentosData={data} key={data.id} />;
        })}
    </div>
    );
};

export default DetailVoces;



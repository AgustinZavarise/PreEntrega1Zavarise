import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CardListComponent.css";


//Components

import CardProduct from "../CardProduct/CardProduct";
import Spinner from "../Spinner/Spinner";

//Firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CardList = () => {

    const [instrumentosData, setInstrumentosData] = useState ([]);

    const [isLoading, setIsLoading] = useState(true);


    useEffect (() =>{
        const getInstrumentos = async() => {
            const q = query (collection(db, "Instrumentos"));
            const querySnapshot = await getDocs(q);
            const docs= [];
            querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
            });
            setInstrumentosData(docs)
        };
        getInstrumentos();
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

    },[]);
    
    return (
    <>
        {isLoading ? (
        <div className="Spinner">
            <Spinner />
        </div>
    ) : (
        <div className="CardListContainer">
            {instrumentosData.map((data) => {
            return (     
            <Link
                to={`details/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
                >
                <CardProduct instrumentosData={data} />
            </Link>
            );
            })}
        </div>
        )}
    </>
    );
};



export default CardList;


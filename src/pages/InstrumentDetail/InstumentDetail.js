import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CardProduct from "../../Components/CardProduct/CardProduct";

//Firebase
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";



const InstumentDetail= () => {
  const [instrumentoData, setInstrumentoData] = useState ([]);

  let {id} = useParams();

    useEffect (() =>{
        const getInstrumentos = async() => {
            const q = query (collection(db, "Instrumentos"), where(documentId(), "==", id));
            const querySnapshot = await getDocs(q);
            const docs= [];
            querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
            });
            setInstrumentoData(docs)
        };
        getInstrumentos();
    }, [id]);

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>InstrumentDetail</h1>
        {instrumentoData.map((data) => {
          return <CardProduct instrumentosData={data} key={data.id} />;
        })}
        </div>
    );
};

export default InstumentDetail;
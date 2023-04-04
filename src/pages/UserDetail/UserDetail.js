import React ,  { useEffect, useState } from "react";
import axios from "axios";
import CardUser from "../../Components/CardUser/CardUser";
import {useParams} from "react-router-dom";



const UserDetail = () => {
    let{ id } = useParams();
    const [ user, setUser ] =useState ([id]);
    
    

    useEffect( () => {
        axios("https://raw.githubusercontent.com/luisemiliopizzolanti/json_test/main/json_test.json/").then((res) =>
        setUser (res.data)
        ); 
    }, [id]);
        
    return (
    <div Style= {{ display: "flex", justifyContent: "center", flexDirection: "Column", alingItems: "center"}}>
        <CardUser data={user} />
        </div>
    )
}

export default UserDetail;
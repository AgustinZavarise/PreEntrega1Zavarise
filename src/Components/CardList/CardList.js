import React, { useEffect, useState } from "react";
import axios from "axios";
import CardUser from "../CardUser/CardUser";
import { Link } from "react-router-dom";
import "./CardListComponent.css"





const CardList = () => {

    const [ users, setUsers ] = useState ([]);

    useEffect( () => {
        axios("https://raw.githubusercontent.com/luisemiliopizzolanti/json_test/main/json_test.json").then((res) => 
        setUsers (res.data)
        ); 
    }, []);

    return (
        <div className="Cards-Lists">
            {users.map((user) => {
                return (

                    <div key={user.id}>
                        <Link className="Link" to="/user-detail/">
                            <CardUser data={user} />
                            
                        </Link>
                    </div>
                );
            })};
        </div>
    );
};

export default CardList;
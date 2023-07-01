import React from "react";
import {UserDto} from "../classes/user.dto";

const Me = ({user}:{user: UserDto}) => {
    return (
        <>
            <h1>Tvoji podatki</h1>
            <h3>Ime: {user.first_name}</h3>
            <h3>Priimek: {user.last_name}</h3>
            <h3>Email: {user.email}</h3>
        </>
    );
}

export default Me;

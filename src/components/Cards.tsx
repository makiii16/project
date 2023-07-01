import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";

const Cards = () => {
    const[cards,setCards] = useState([]);

    const loadCards = async () => {
        const res = await axios.get('http://localhost:3001/concert',{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data);
            setCards(res.data);
        }
    }

    useEffect(()=>{
        loadCards();
    },[]);

    if(cards.length>0) {
        return (
            <>
                {cards.map((card: any, i) => {
                    console.log(card);
                    return <Card cardData={card} key={i} id={card.id}/>;
                })
                }
            </>
        );
    }

    return (
        <h1>Ni koncertov</h1>
    );


}

export default Cards;

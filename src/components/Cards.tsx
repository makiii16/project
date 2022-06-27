import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    const loadCards = async () => {
        const res = await axios.get('http://localhost:3001/concerts', {withCredentials: true});


        if (res.status == 200) {
            setCards(res.data);
        }
    }

    useEffect(() => {
        loadCards();
    }, []);

    if(cards.length > 0) {
        return (
            <>
                {cards.map((card: any, i) => {
                    return <Card cardData={card} key={i} />;
                })
                }
            </>
        );
    }
    return (
        <h1></h1>
    );
}
export default Cards;

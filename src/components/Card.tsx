import React from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import { Link } from "react-router-dom";


const Card = ({cardData, id}:{cardData:any, id: number}) => {
    console.log(cardData);

    async function clickDelete(){
        const res = await axios.delete('http://localhost:3001/concert/'+cardData.id, {withCredentials: true});
        window.location.reload();
        window.alert("A ste prepričani?");
    }
    async function clickUpdate(){
        return <Navigate to = {`/update_concert/${cardData.id}`}/>
    }
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"/>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>

                    <div className="card-body">
                        <h5>{cardData.title}</h5>
                        <p className="card-text">{cardData.content}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <Link to={`/update_concert/${cardData.id}`}>
                                    <button type="button"  className="btn btn-sm btn-outline-secondary">Uredi</button></Link>
                                <button type="button" onClick={clickDelete} className="btn btn-sm btn-outline-secondary">Briši</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;


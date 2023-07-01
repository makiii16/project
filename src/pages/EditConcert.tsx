import React, { SyntheticEvent, useEffect, useState } from 'react';
import {Navigate, useParams} from 'react-router-dom';
import axios from 'axios';

const styleTextArea = {
    height:"100%"
}

const EditConcert = () => {

    const[concertData,setConcerts] = useState([]);
    const[error, setError] = useState('');
    const[title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const[redirect, setRedirect] = useState(false);
    const { id } = useParams();

    const loadConcerts = async () => {
        const res = await axios.get('http://localhost:3001/concert/' + id, {withCredentials: true});
        if (res.status == 200){
            setConcerts(res.data);
        }
    }

    useEffect(() => {
        loadConcerts();
    }, []);

    const submit = async(e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            title,
            description
        }
        console.log('Bogogoggoo');

        const res = await axios.put('http://localhost:3001/concert/' + id, data, { withCredentials: true });

        if(res.status == 200){
            setRedirect(true);
        }

    }

    if(redirect){
        return <Navigate to='/' />
    }

    return (
        <>
            <h2>{error}</h2>
            <form onSubmit={submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Title"
                           onChange={(e) => setTitle(e.target.value)}/>
                    <label htmlFor="floatingInput">Ime izvajalca</label>
                </div>
                <div className="form-floating">


          <textarea className="form-control" id="floatingContent" rows={8} style={styleTextArea} placeholder="Vnesi vsebino"
                    onChange={(e)=>setDescription(e.target.value)}>
          </textarea>

                    <label htmlFor="floatingContent">Vsebina</label>
                </div>
                <button type="submit" className="btn btn-sm btn-outline-secondary">Uredi</button>
            </form>
        </>
    )
}

export default EditConcert;

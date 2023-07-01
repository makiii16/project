import React, {SyntheticEvent, useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";

const styleTextarea = {
    height:"100%",
}

const CreateConcert = () => {

        const [error, setError] = useState('');
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [redirect, setRedirect] = useState(false);
        const [contents, setContents] = useState([]);
        const [contentSelected, setContentSelected] = useState(1);

        const getContent = async () => {
            const req = await axios.get('http://localhost:3001/content',{withCredentials:true});
            setContents(req.data);
            console.log(contents)
        }

        useEffect(() => {
            getContent();
        }, []);


        const submit = async (e:SyntheticEvent) => {
            e.preventDefault();


            const data = {
                    title,
                description,
                "content_id": contentSelected
            }

            console.log("podatki");
            console.log(data);

            const res = await axios.post('http://localhost:3001/concert',data,{withCredentials:true});

            if(res.status == 201) {
                setRedirect(true);
            }
        }

        if(redirect) {
            return <Navigate to ='/ ' />
        }

    return (
            <>
                <h2>{error}</h2>
                <form onSubmit={submit} className="form-signin w-100 m-auto">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="Ime izvajalca"
                               onChange={(e) => setTitle(e.target.value)}/>
                        <label htmlFor="floatingInput">Ime izvajalca</label>
                    </div>
                    <div>
                        <div className="form-floating">
                            <select className="form-control" id="floatingSelect"
                                    onChange={(e: any) => setContentSelected(e.target.value)}>
                                {contents.map((content:any, i) => {
                                    return (<option value={content.id} key={content.id}>{content.title}</option> );
                                })}

                            </select>
                            <label htmlFor="floatingSelect">Zvrsti glasbe</label>
                        </div>
                    </div>
                    <div className="form-floating">
                    <textarea className="form-control" id="floatingContent"
                              rows={8}
                              style={styleTextarea}
                              placeholder="Vnesi vsebino koncerta"
                              onChange={(e)=>setDescription(e.target.value)}>
                    </textarea>
                        <label htmlFor="floatingContent">Vsebina</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Shrani</button>
                </form>
            </>
    )

}
export default CreateConcert;

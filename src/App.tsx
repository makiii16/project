import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import axios from "axios";
import {UserDto} from "./classes/user.dto";
import Me from "./pages/Me";
import Login from "./pages/Login";
import Register from "./pages/Register";


function CreateConcert() {
  return null;
}

function App() {

  const [user, setUser] = useState<UserDto>(new UserDto(0,'', '', ''));

  const currentUser = async () => {
    try {
      const res = await axios.get('http://localhost:3000/users/profile', {withCredentials: true});

      if (res.status == 200) {
        console.log(res.data);
        setUser(res.data);
      }
    }
    catch (e){

    }
  }

  useEffect( () => {
    currentUser().then(r => 0);
  }, []);


  return(
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/create'} element={<CreateConcert />} />
            <Route path={'/me'} element={<Me user={user}/>} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
  );
}

export default App;

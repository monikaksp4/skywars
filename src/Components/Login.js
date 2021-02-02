import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './login.css';

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [errName, setErrName] = useState('')
  const [errPassword, setErrPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = handleValidation();

    if (!validate) {
      const found = user.some(el => (el.name === name && el.birth_year === password));
      if (found) {
        localStorage.setItem("token", name)
        history.push('/search');
      }
      else {
        alert("Invalid username or password!!")
        setName("");
        setPassword("");
      }

      return user;

    }

  }

  const handleValidation = () => {

    var isErr = false;
    if (name === '') {
      setErrName("Please enter username")
      isErr = true
    }
    if (password === '') {
      setErrPassword("Please enter your password")
      isErr = true
    }
    return isErr;
  }

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/').then(res => {
      setUser(res.data.results)
   

    })
  }, [])


  return <div className="wrapper fadeInDown" style={{ paddingTop: '200px' }}>
    <div id="formContent">

      <div className="fadeIn first">
        <br />
        <i className="fa fa-user-circle-o" aria-hidden="true" style={{ fontSize: '6em', color: 'rgb(132 196 229)' }}></i>
      </div>
      <form onSubmit={handleSubmit}>
        <span style={{ color: 'red' }}>{errName}</span>
        <input type="text" value={name} onChange={e => setName(e.target.value)} id="login" className="fadeIn second" placeholder="Username" />
        <br /><span style={{ color: 'red' }}>{errPassword}</span>
        <input type="text" id="password" value={password} onChange={e => setPassword(e.target.value)} className="fadeIn third" placeholder="Password" />
        <input type="submit" className="fadeIn fourth" value="Log In" />
      </form>


    </div>
  </div>
}
export default React.memo(Login);

import { useState } from 'react';
import './App.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")

  function handleName(e) {
    setName(e.target.value)
  }

  function handlePass(e) {
    setPass(e.target.value)
  }
  function check() {
    // var loginDetails = axios.get(`http://localhost:3500/Login?userName=${name}&password=${pass}`)
    var loginDetails = axios.post("http://localhost:3500/Login", { "userName": name, "password": pass })

    loginDetails.then(function (data) {
      if (data.data === true) {
        navigate('/Success')
      } else {
        navigate('/Fail')
      }
    })
  }

  return (
    <div className='container'>
      <div className="login">
        <h1>Login</h1>
        <input onChange={handleName} name='userName' placeholder='userName' />
        <input onChange={handlePass} name='password' placeholder='password' />
        <button onClick={check}>Login</button>
      </div>
    </div>

  );
}

export default App;

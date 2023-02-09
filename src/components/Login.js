import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"",password:""})
    let navigate = useNavigate();
    const url = 'https://notebooks-react-app.herokuapp.com'

    // login handle
    const handleLogin = async (e)=>{
        e.preventDefault();
        // API CALL
    const response = await fetch(`${url}/api/auth/login/`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:credentials.email,password:credentials.password})
      });
      const json = await response.json(); 
      // console.log(json);
      if(json.success){
        // save the authtoken and redirect
        localStorage.setItem('token',json.authToken);
        props.showAlert("Logged in Successfully","success");
        navigate('/');
      }else{
        props.showAlert("Invalid Details","danger");
      }
    };

    const onChange =(e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };
  return (
    <div>
        <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="passwod"name='password' value={credentials.password} autoComplete="none"  onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary" >Login</button>
</form>
    </div>
  )
}

export default Login
import { fetchData } from "../main.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/Login",
      {
        username,
        password
      },
      "POST")
      .then((data) => {
        if (!data.message) {
            console.log(data)
            navigate("/posts")
        }
       })
      .catch((error) => {
        console.log(error)
      })

  }
    return (

    <div>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
    <div className ="form-group mb-3">
                    <label htmlFor="exampleInputUsername">Username</label>
                    <input type="text" className ="form-control" name="username" placeholder="Enter Username" onChange={onChange} value ={ username}/>
    </div>
    <div className ="form-group mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className ="form-control" name="password" placeholder="Password"  onChange={onChange} value ={ password}/>
    </div>
    <div className ="form-check mb-3">
                    <input type="checkbox" className ="form-check-input" id="Check" onChange={onChange}/>
                    <label className ="form-check-label" htmlFor="Check">I am not ROBOT</label>
    </div>
    <button type="submit" className ="btn btn-primary">Log in</button>
        </form>
    </div>
    );
}

export default Login;

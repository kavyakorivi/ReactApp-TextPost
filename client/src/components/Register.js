import { fetchData } from "../main.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Register = () => {
    const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    useremail: '',
    password: '',
  });
  const { username, useremail, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/register",
      {
        username,
        useremail,
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
          <h2>Register</h2>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label className="form-label" hmtlFor="username">User name</label>
                <input type="text" id="username" name="username" onChange={onChange} className="form-control" placeholder="Enter UserName" value ={ username } />
            </div>
            <div className="form-group">
                <label htmlFor="useremail">User Email </label>
                <input type="useremail" className="form-control" id="useremail" name="useremail" onChange={onChange} aria-describedby="useremail" placeholder="Enter Useremail" value = {useremail} />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" id="Password" name="Password" onChange={onChange} placeholder="Password" value = {password} />
            </div>  
          <button type="submit" className="btn btn-primary">Register</button>
          </form> 
        </div>
        
            );
        }
        
        export default Register;
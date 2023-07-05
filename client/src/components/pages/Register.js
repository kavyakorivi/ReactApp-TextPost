import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import UserContext from "../../context/userContext.js";


const Register = () => {
    const navigate = useNavigate();

  const {user, updateUser} = useContext(UserContext);

  const { username, useremail, password } = user;

  const onChange = (e) => updateUser(e.target.name, e.target.value )

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
          updateUser("authenticated", true)
          navigate("/login")
        }
      })
      .catch((error) => {
        console.log("error")
        
      })
      
      
  }

  return (
  <div className ="container">
    <div className="row justify-content-center">
      <div className="col-md-6 col-xl-4">
        <div className="card  mt-5">
          <div className="card-body">
          <h2>Register</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
                <label className="form-label" hmtlFor="username">User name</label>
                <input type="text" id="username" name="username" onChange={onChange} className="form-control" placeholder="Enter UserName" value ={ username } />
            </div>
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="useremail">User Email </label>
                <input type="useremail" className="form-control" id="useremail" name="useremail" onChange={onChange} aria-describedby="useremail" placeholder="Enter Useremail" value = {useremail} />
            </div>
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password" value = {password} />
            </div>  
          <button type="submit" className="btn btn-primary">Register</button>
          </form> 
          </div>
        </div>
      </div>
    </div>
  </div>
  );
        }
        
        export default Register;
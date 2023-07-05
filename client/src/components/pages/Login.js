import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext.js";
const Login = () => {

  const navigate = useNavigate();

  const {user, updateUser} = useContext(UserContext
    );

  const { username, password } = user;

  const onChange = (e) => updateUser(e.target.name, e.target.value )

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/login",
      {
        username,
        password
      },
      "POST")
      .then((data) => {
        if(!data.message) {
          updateUser("authenticated", true)
          navigate("/profile")

        }
      })
        .catch((error) => {
          console.log(error)
        })
   }
  return (

  <div className ="container">
    <div className="row justify-content-center">
      <div className="col-md-6 col-xl-4">
        <div className="card  mt-5">
          <div className="card-body">
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
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;

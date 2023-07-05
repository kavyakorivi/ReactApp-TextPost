import { Outlet, Link, useLocation } from "react-router-dom";
import UserContext from "../../context/userContext";
import { useContext, Fragment } from "react";

const Navbar = () => {
  const { user } = useContext(UserContext);

  const authenticated = (
    <Fragment>
      <h2>Hi, { user.username } </h2>
    </Fragment>
  )

  const guest = (
    <Fragment>
      <h2>Welcome! </h2>
    </Fragment>
  )



  const location =useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        { user.authenticated ? authenticated : guest }
          <h3><Link className="navbar-brand" to="/">TweetTouch App</Link></h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {location.pathname ==="/profile" &&
                    <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Logout</Link>
                    </li>
                    </>
              }
              {location.pathname !=="/profile" &&
                    <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    </>
                }
             </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;

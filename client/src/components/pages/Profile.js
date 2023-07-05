import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { fetchData } from "../../main.js";
import UserContext from "../../context/userContext.js";
import Posts from "./Posts.js";

const Profile = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState({
    postcontent: ''
  });

  
  const {  postcontent } = post;
    const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value })
    const onSubmit = (e) => {
      e.preventDefault();
      console.log('submitted');
      
      fetchData("/post/create",
          {
            postcontent,
            
          },
          "POST")
          .then((data) => {
              if (!data.message) {
                  console.log(data)
                  setPost({
                      postcontent: ''
                  });
                  fetchData("/post/view",
                      {
                        postcontent
                      },
                      "POST")
                      .then((res) => {
                          console.log(res);
                          if (!res.message) {
                              navigate("/profile", { state: {  data: res } });
                          }
                      })
                      .catch((error) => {
                        console.log(error)
                      })
              }
          })
          .catch((error) => {
              console.log(error)
          })

  }

  

         
    return(
    <div className ="container">
    <div className="row justify-content-center">
        <div className="card mb-3 col-md-8 col-xl-6 mt-5">
          <form onSubmit={onSubmit}>
            <div className ="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Post Contents</label>
              <input type="text" className ="form-control" name="postcontent" placeholder="Enter content"  onChange={onChange} value ={ postcontent}/>
            </div>
            <button type="submit" className ="btn btn-primary mb-3">Create</button>
          </form>
        </div>
    </div>
    <Posts />
  </div>
  
  );
    }

  export default Profile;

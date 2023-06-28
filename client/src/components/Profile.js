import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const navigate = useNavigate();
  const [post, setPost] = useState({
    postname: '',
    postcontext: ''
  });
  const { postname, postcontext } = post;
    const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value })
    
         
    return (
      
              <form>
                <h2>Profile</h2>
                <div>
                  <label>
                    Create postname:
                    <input type="text" name="postname" id="postname" onChange={onChange} placeholder="Enter Post Title" value={postname}/>
                  </label>
                  <label>
                    Create postcontext:
                    <input type="text" name="postcontext" id="postcontext" onChange={onChange} placeholder="Enter Post content" value={postcontext}/>
                  </label>
                  <input type="submit" value="submit" />
                </div>
              </form>
                  
      );
    }

  export default Profile;

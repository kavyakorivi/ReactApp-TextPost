import { useContext,Fragment } from "react";
import UserContext from "../../context/userContext.js";

const userposts= [
    {
      id: 1,
      postcontent: "I am Ironman"
    },
    {
      id: 2,
      postcontent: "I am Tonystark"
    },
    {
      id: 3,
      postcontent: "Hey spidey!"
    },
  ]

const Posts = (props) => {
    const {user } = useContext(UserContext);
    return (
        <div>
            <Fragment>
            <h2 className="text-center"> {user.username}'s  Posts </h2>
            </Fragment>
            <ul>
                {
                   userposts.map((post) => 
                   <li key={post.id}> {post.postcontent} </li>
                   )
                }
            </ul>
        </div>
        
    );
}



export default Posts;
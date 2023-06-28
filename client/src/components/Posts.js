const user = {
    id: 1111,
    username: "Robert Downey Jr."
}

const Posts = (props) => {
    return (
        <div>
            <h2 className="text-center"> {user.username}'s  Posts </h2>
            <ul>
                {
                   props.posts.map((post) => 
                   <li key={post.id}> {post.postcontent} </li>
                   )
                }
            </ul>
        </div>
        
    );
}



export default Posts;
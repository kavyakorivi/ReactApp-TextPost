import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts.js";
import About from "./components/About.js";
import Navbar from './components/Navbar.js';
import Register from './components/Register.js';
import Profile from './components/Profile.js';
import Login from './components/Login.js';

const posts= [
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

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

            <Route element={<Navbar />}>
              <Route index element={<About />}/>
              <Route path="posts" element={<Posts posts={posts}/>}/>
              <Route path="register" element={<Register />}/>
              <Route path="login" element={<Login />}/>
              <Route path="profile" element={<Profile />}/>
            </Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

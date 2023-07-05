import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/pages/Posts.js";
import About from "./components/pages/About.js";
import Navbar from './components/pages/Navbar.js';
import Register from './components/pages/Register.js';
import Profile from './components/pages/Profile.js';
import Login from './components/pages/Login.js';
import { UserProvider } from './context/userContext';

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
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<About />}/>
              <Route path="posts" element={<Posts posts={posts}/>}/>
              <Route path="register" element={<Register />}/>
              <Route path="login" element={<Login />}/>
              <Route path="profile" element={<Profile />}/>
            </Route>
          </Routes>
        </BrowserRouter>
        </UserProvider>

    </div>
  );
}

export default App;

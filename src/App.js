import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import './styles/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Success from './components/Success';

function App() {
  // State Decalarations
  const [user, setUser] = useState({ // The logged in user
    username: '',
    password: '',
  });
  const [isLoggedIn, setLogIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [msgs, setMsgs] = useState([]);

  // API Calls
  const fetchUsers = async () => {
    try {
      const res = await fetch('https://blog-api-production-6aeb.up.railway.app/users', { method: 'GET' });
      const data = await res.json();
      setUsers(data);
    } catch (err) { console.error(err); }
  };
  const fetchPosts = async () => {
    try {
      const res = await fetch('https://blog-api-production-6aeb.up.railway.app/posts', { method: 'GET' });
      const data = await res.json();
      setPosts(data);
    } catch (err) { console.error(err); }
  };
  const fetchMsgs = async () => {
    try {
      const res = await fetch('https://blog-api-production-6aeb.up.railway.app/msgs', { method: 'GET' });
      const data = await res.json();
      setMsgs(data);
    } catch (err) { console.error(err); }
  };

  // Refresh API Calls
  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
    fetchMsgs();
  }, []);

  // State Handlers
  // const loginSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   setUser({
  //     username: formData.get('username'),
  //     password: formData.get('password'),
  //   });
  //   setLogIn(true); // set log in status to true
  //   console.log('user logged in');
  //   console.log(`username: ${user.username}`);
  //   console.log(`password: ${user.password}`);
  // };

  //   // DOM Handler functions
  //   const loginRef = useRef(null);
  //   const backdropRef = useRef(null);
  //   const exitRef = useRef(null);

  //   function handleLogin() { // Handles the login popup styling/hiding
  //     const loginPopup = loginRef.current;
  //     const backdrop = backdropRef.current;
  //     if (loginPopup.style.display === 'none') { // show
  //       loginPopup.style.display = '';
  //       backdrop.style.visibility = 'visible';
  //     } else { // hide
  //       loginPopup.style.display = 'none';
  //       backdrop.style.visibility = 'hidden';
  // //       loginPopup.style.animation = 'fade-right 0.7s cubic-bezier() 0s'; // exit animation
  // //       loginPopup.style['animation-fill-mode'] = 'forwards';
  //     }
  //   }

  //   function exitLogin() { // Handles interaction with login popup cross
  //     const cross = exitRef.current;
  //     if (loginPopup.style.display === 'none') { // show
  //       loginPopup.style.display = '';
  //       backdrop.style.visibility = 'visible';
  //     } else { // hide
  //       loginPopup.style.display = 'none';
  //       backdrop.style.visibility = 'hidden';
  // //       loginPopup.style.animation = 'fade-right 0.7s cubic-bezier() 0s'; // exit animation
  // //       loginPopup.style['animation-fill-mode'] = 'forwards';
  //     }
  //   }

  return (
    <div className="App">

      <Header
        // handleLogin={handleLogin}
      />

      {/* <div id="backdrop-shadow" ref={backdropRef} /> */}

      {/* //       <div id="login" ref={loginRef}>
//         <h3>Login</h3>
//         <div class="cross" ref={exitRef}><span class="material-symbols-outlined">cancel</span></div>
//         <form className="user-form" onSubmit={loginSubmit} action="" method="post">
//           <input
//             type="text"
//             id="username"
//             name="username"
//             placeholder="Create a username"
//           />
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Create a password"
//           />
//           <input type="submit" value="Log In" />
//         </form>
//         <div className="signup">
//           <span className="signup">
//             Don't have an account?
//             <label htmlFor="check">Signup</label>
//           </span>
//         </div>
//       </div>

//       <Success
//           successMsg="Log In Successful!"
//       /> */}

      <Outlet
        context={[
          user, isLoggedIn, // Passing on current logged in user
          users, setUsers, fetchUsers,
          posts, setPosts, fetchPosts,
          msgs, setMsgs, fetchMsgs,
        ]}
      />

      <Footer />

    </div>
  );
}

export default App;

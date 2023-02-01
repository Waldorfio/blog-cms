/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function Home() {
  const [user, isLoggedIn] = useOutletContext();

  return (
    <main id="home">
      { isLoggedIn ? (
        // eslint-disable-next-line react/jsx-one-expression-per-line
        <div id="welcome">Welcome to the Content Management System {user.username}.<br>Please click on one of the links below to get started.</div>
      ) : (
        <div id="welcome">Please log in as an administrator to gain access to the Content Management System.</div>
      )}
    
      <div id="content">

        <div id='user-card' className="post">
          <a href="/users"><h2>Users</h2></a>
        </div>

        <div id='post-card'className="post">
          <a href="/posts"><h2>Posts</h2></a>
        </div>

        <div id='msg-card' className="post">
          <a href="/messages"><h2>Messages</h2></a>
        </div>

      </div>
    </main>
  );
}

export default Home;

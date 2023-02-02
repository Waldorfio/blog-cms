import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Users from './Users';
import Posts from './Posts';
import Messages from './Messages';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;

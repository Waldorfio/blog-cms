/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function Users() {
  const [user, isLoggedIn, users, setUsers, fetchUsers, posts, msgs] = useOutletContext();

  // --------- CREATE User ---------
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    admin: '',
  });

  const addUser = async (e) => {
    e.preventDefault();
    try {
    // Send post request
      const res = await fetch('https://blog-api-production-6aeb.up.railway.app/users/create', {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(formData),
      });
      // Check data
      const data = await res.json();
      if (data.success) {
        console.log('Registration successful');
      } else { console.log('data was not a success'); }
    } catch (err) { console.error(err); }
  };

  // --------- UPDATE User ---------
  const updateUser = async (usr) => {
    try {
    // Send post request
      const res = await fetch(`https://blog-api-production-6aeb.up.railway.app/users/${usr._id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(usr),
      });
      const data = await res.json();
      console.log(`User updated! ${usr._id}`);
      fetchUsers();
    } catch (err) { console.error(err); }
  };

  // --------- DELETE User ---------
  const delUser = async (usr) => {
    try {
      await fetch(`https://blog-api-production-6aeb.up.railway.app/users/${usr._id}/delete`, { method: 'DELETE' });
      console.log(`User deleted! ${usr._id}`);
      fetchUsers();
    } catch (err) { console.error(err); }
  };

  return (
    <main id="home">
      <div id="welcome">Create, Read, Update and Delete the Users below.</div>
      <div className="form-content">
        <div className="labels">
          <span>Username</span>
          <span>Password</span>
          <span>Admin</span>
        </div>
        { users.map((usr) => (
          <form className="cms-form">
            <input
              type="text"
              name="username"
              value={usr.username}
              onChange={(e) => setUsers( // Updating the users state every key change
                users.map((checkUsr) => {
                  if (checkUsr.username === usr.username) { // Finding the key of the current user
                    return { ...checkUsr, username: e.target.value }; // Settings state of user
                  }
                  return checkUsr;
                }),
              )}
            />
            <input
              type="text"
              name="password"
              value={usr.password}
              onChange={(e) => setUsers( // Updating the users state every key change
                users.map((checkUsr) => {
                  if (checkUsr.password === usr.password) { // Finding the key of the current user
                    return { ...checkUsr, password: e.target.value }; // Settings state of user
                  }
                  return checkUsr;
                }),
              )}
            />
            <input
              type="checkbox"
              name="admin"
              value={usr.admin}
              onChange={(e) => setUsers( // Updating the users state every key change
                users.map((checkUsr) => {
                  if (checkUsr.admin === usr.admin) { // Finding the key of the current user
                    return { ...checkUsr, admin: e.target.value }; // Settings state of user
                  }
                  return checkUsr;
                }),
              )}
            />
            <input type="button" value="UPDATE" onClick={() => updateUser(usr)} />
            <input type="button" value="DELETE" onClick={() => delUser(usr)} />
          </form>
        )) }

        <form id="cms-newuser" className="cms-form">
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <input
            type="checkbox"
            name="admin"
            value={formData.admin}
            onChange={(e) => setFormData({ ...formData, admin: e.target.value })}
          />
          <input type="button" value="CREATE" onClick={addUser} />
        </form>

      </div>
    </main>
  );
}

export default Users;

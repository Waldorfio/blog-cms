/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function Users() {
  const [user, isLoggedIn, users, posts, msgs] = useOutletContext();

  // DELETE API Call
  const delUser = async (usr) => {
    try {
      await fetch(`https://blog-api-production-6aeb.up.railway.app/users/${usr._id}/delete`, { method: 'DELETE' });
      console.log(`User deleted! ${usr._id}`);
    } catch (err) { console.error(err); }
  };
  // // Refresh API Call
  // useEffect(() => {
  //   delUser();
  // }, []);

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
          <form id="users-form" className="cms-form">
            <input type="text" name="username" value={usr.username} disabled />
            <input type="text" name="password" value={usr.password} disabled />
            <input type="checkbox" name="admin" value={usr.admin} disabled />
            <input type="button" value="EDIT" />
            <input type="button" value="DELETE" onClick={() => delUser(usr)} />
            <input type="button" value="UPDATE" disabled />
          </form>
        )) }

      </div>
    </main>
  );
}

export default Users;

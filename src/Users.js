/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function Users() {
  return (
    <main id="home">
      <div id="welcome">Create, Read, Update and Delete the Users below.</div>
      <div className="form-content">

        <form id="users-form" className="cms-form" action="" method="post">
            <input type="text" name="username" value="Waldorfio" disabled>
            <input type="text" name="email" value="test@gmail.com" disabled>
            <input type="password" name="password" value="password" disabled>
            <input type="button" value="EDIT">
            <input type="submit" value="DELETE">
            <input type="button" value="UPDATE" disabled>
        </form>

      </div>
    </main>
  );
}

export default Users;

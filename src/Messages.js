/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function Messages() {
  return (
    <main id="home">
      <div id="welcome">Create, Read, Update and Delete the Messages below.</div>
      <h4 className="form-content" id="msg-content">
        First Post
        <form className="cms-form" action="" method="post">
            <input type="text" name="username" value="Waldorfio" disabled>
            <input type="date" name="date" value="1/02/2023" disabled>
            <input type="textarea" name="message" value="This is a test message.">
            <input type="button" value="EDIT">
            <input type="submit" value="DELETE">
            <input type="button" value="UPDATE" disabled>
        </form>
        <form className="cms-form" action="" method="post">
            <input type="text" name="username" value="Waldorfio" disabled>
            <input type="date" name="date" value="1/02/2023" disabled>
            <input type="textarea" name="message" value="This is a test message.">
            <input type="button" value="EDIT">
            <input type="submit" value="DELETE">
            <input type="button" value="UPDATE" disabled>
        </form>
      </h4>
    </main>
  );
}

export default Messages;

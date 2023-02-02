/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function Posts() {
  return (
    <main id="home">
      <div id="welcome">Create, Read, Update and Delete the Posts below.</div>
      <div className="form-content">

        <form id="posts-form" className="cms-form" action="" method="post">
          <input type="text" name="title" value="Test Title" disabled />
          <input type="text" name="username" value="Waldorfio" disabled />
          <input type="date" name="date" value="1/02/2023" disabled />
          <input type="textarea" name="content" value="Lorem ipsum dored" />
          <textarea id="mytextarea" name="content" value="Lorum ipsum dored" />
          <input type="button" value="EDIT" />
          <input type="submit" value="DELETE" />
          <input type="button" value="UPDATE" disabled />
        </form>

      </div>
    </main>
  );
}

export default Posts;

/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function Posts() {
  const [user, isLoggedIn, users, posts, msgs] = useOutletContext();

  // DELETE Post
  const delPost = async (post) => {
    try {
      await fetch(`https://blog-api-production-6aeb.up.railway.app/posts/${post._id}/delete`, { method: 'DELETE' });
      console.log(`Post deleted! ${post._id}`);
    } catch (err) { console.error(err); }
  };

  return (
    <main id="home">
      <div id="welcome">Create, Read, Update and Delete the Posts below.</div>
      <div className="form-content">
        <div className="labels">
          <span>Title</span>
          <span>Creator</span>
          <span>Date</span>
          <span>Content</span>
        </div>
        { posts.map((post) => (
          <form id="posts-form" className="cms-form" action="" method="post">
            <input type="text" name="title" value={post.title} disabled />
            <input type="text" name="username" value="Waldorfio" disabled />
            <input type="date" name="date" value={post.date} disabled />
            <input type="textarea" name="content" value={post.content} />
            {/* <textarea id="mytextarea" name="content" value="Lorum ipsum dored" /> */}
            <input type="button" value="EDIT" />
            <input type="button" value="DELETE" onClick={() => delPost(post)} />
            <input type="button" value="UPDATE" disabled />
          </form>
        )) }

      </div>
    </main>
  );
}

export default Posts;

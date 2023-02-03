/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Posts() {
  const [user, isLoggedIn, // Passing on current logged in user
    users, setUsers, fetchUsers,
    posts, setPosts, fetchPosts,
    msgs, setMsgs, fetchMsgs] = useOutletContext();

  // --------- CREATE Post ---------
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    content: '',
  });

  const addPost = async (e) => {
    e.preventDefault();
    try {
    // Send post request
      await fetch('https://blog-api-production-6aeb.up.railway.app/posts/create', {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(formData),
      });
      console.log('Created post!');
      fetchPosts();
    } catch (err) { console.error(err); }
  };

  // --------- UPDATE Post ---------
  const updatePost = async (post) => {
    try {
    // Send post request
      await fetch(`https://blog-api-production-6aeb.up.railway.app/posts/${post._id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(post),
      });
      console.log(`Post updated! ${post._id}`);
      fetchPosts();
    } catch (err) { console.error(err); }
  };

  // --------- DELETE Post ---------
  const delPost = async (post) => {
    try {
      await fetch(`https://blog-api-production-6aeb.up.railway.app/posts/${post._id}/delete`, { method: 'DELETE' });
      console.log(`Post deleted! ${post._id}`);
      fetchPosts();
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
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={(e) => setPosts( // Updating the posts state every key change
                posts.map((checkPost) => {
                  if (checkPost.title === post.title) { // Finding the key of the current post
                    return { ...checkPost, title: e.target.value }; // Settings state of post
                  }
                  return checkPost;
                }),
              )}
            />
            <input
              type="date"
              name="date"
              value={post.date_formatted}
              onChange={(e) => setPosts(
                posts.map((checkPost) => {
                  if (checkPost.date === post.date) {
                    return { ...checkPost, date: e.target.value };
                  }
                  return checkPost;
                }),
              )}
            />
            <input
              type="textarea"
              name="content"
              value={post.content}
              onChange={(e) => setPosts(
                posts.map((checkPost) => {
                  if (checkPost.content === post.content) {
                    return { ...checkPost, content: e.target.value };
                  }
                  return checkPost;
                }),
              )}
            />
            {/* <textarea id="mytextarea" name="content" value="Lorum ipsum dored" /> */}
            <input type="button" value="UPDATE" onClick={() => updatePost(post)} />
            <input type="button" value="DELETE" onClick={() => delPost(post)} />
          </form>
        )) }

        <form id="cms-newpost" className="cms-form">
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <input
            type="date"
            name="date"
            placeholder="Enter date"
            value={formData.date_formatted}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <input
            type="textarea"
            name="content"
            placeholder="Type content here"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          />
          <input type="button" value="CREATE" onClick={addPost} />
        </form>

      </div>
    </main>
  );
}

export default Posts;

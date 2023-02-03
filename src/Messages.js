/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Messages() {
  const [user, isLoggedIn, // Passing on current logged in user
    users, setUsers, fetchUsers,
    posts, setPosts, fetchPosts,
    msgs, setMsgs, fetchMsgs] = useOutletContext();

  // --------- CREATE Msg ---------
  const [formData, setFormData] = useState({
    username: '',
    date: '',
    text: '',
  });

  const addMsg = async (e, msg) => {
    e.preventDefault();
    try {
      // Send post request
      await fetch(`https://blog-api-production-6aeb.up.railway.app/posts/${msg.postid}/msg/create`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(formData),
      });
      console.log('Created msg!');
      fetchMsgs();
    } catch (err) { console.error(err); }
  };

  // --------- UPDATE Msg ---------
  const updateMsg = async (msg) => {
    try {
      // Send post request
      await fetch(`https://blog-api-production-6aeb.up.railway.app/posts/${msg.postid}/msg/${msg._id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(msg),
      });
      console.log(`Msg updated! ${msg._id}`);
      fetchMsgs();
    } catch (err) { console.error(err); }
  };

  // --------- DELETE Msg ---------
  const delMsg = async (msg) => {
    try {
      await fetch(`https://blog-api-production-6aeb.up.railway.app/posts/${msg.postid}/msg/${msg._id}/delete`, { method: 'DELETE' });
      console.log(`Msg deleted! ${msg._id}`);
      fetchMsgs();
    } catch (err) { console.error(err); }
  };

  return (
    <main id="home">
      <div id="welcome">Create, Read, Update and Delete the Messages below.</div>
      <div className="labels">
        <span>Username</span>
        <span>Date</span>
        <span>Message</span>
      </div>
      { posts.map((post) => (
        <h4 className="form-content" id="msg-content">
          {post.title}
          { msgs.map((msg) => (
            post._id === msg.postid ? (
              <form className="cms-form" action="" method="post">
                <input
                  type="text"
                  name="username"
                  value={msg.username}
                  onChange={(e) => setMsgs( // Updating the msgs state every key change
                    msgs.map((checkMsg) => {
                      if (checkMsg.username === msg.username) { // Finding key of the current msg
                        return { ...checkMsg, username: e.target.value }; // Settings state of msg
                      }
                      return checkMsg;
                    }),
                  )}
                />
                <input
                  type="date"
                  name="date"
                  value={msg.date}
                  onChange={(e) => setMsgs(
                    msgs.map((checkMsg) => {
                      if (checkMsg.date === msg.date) {
                        return { ...checkMsg, date: e.target.value };
                      }
                      return checkMsg;
                    }),
                  )}
                />
                <input
                  type="textarea"
                  name="message"
                  value={msg.text}
                  onChange={(e) => setMsgs(
                    msgs.map((checkMsg) => {
                      if (checkMsg.message === msg.message) {
                        return { ...checkMsg, message: e.target.value };
                      }
                      return checkMsg;
                    }),
                  )}
                />
                <input type="button" value="UPDATE" onClick={() => updateMsg(msg)} />
                <input type="button" value="DELETE" onClick={() => delMsg(msg)} />
              </form>
            ) : null
          )) }
        </h4>
      )) }
    </main>
  );
}

export default Messages;

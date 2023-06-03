
import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [error, setError] = useState(null);

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    if (title.trim() === "" ) {
      setError("Judul tidak boleh kosong");
      return;
    }

    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
              setError(null); // Clear error when input changes
            }}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
              /*setError(null); // Clear error when input changes*/
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;

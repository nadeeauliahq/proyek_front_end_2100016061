/*import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore';
import { auth, db } from "../firebase";
function Home() {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc)=> ({...doc.data(), id:doc.id})));
        }
        getPosts()
    })
  
    return (
        <div className='homepage'>
            {postLists.map((post) => {
                return (
                    <div className='post'>
                        <div className='postHeader'>
                            <div className='title'>
                                <h1> {post.title}</h1>
                            </div>
                        </div>
                        <div className='postTextContainer'> {post.postText}</div>
                        <h3>@{post.author.name}</h3>
                        </div>
                )
            })}
        </div>
    )
        }

export default Home







/*function Home({ isAuth }) {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    const deletePost = async (id) => {
        const postDoc = doc(db, 'posts-database', id)
        await deleteDoc(postDoc)
        window.location.reload()
      }

    useEffect(() => {
        /*const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getPosts();
      }, [deletePost]);

    /*const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
      };

      
   

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;*/
import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';



function Home(isAuth) {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, 'posts');

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className='homepage'>
      {postList.map((post) => {
        return (
          <div className='post' key={post.id}>
            <div className='postHeader'>
              <div className='title'>
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
              {isAuth && auth.currentUser && post.author.id === auth.currentUser.uid && (
  <button
    onClick={() => {
      deletePost(post.id);
    }}
  >
    &#128465;
  </button>
)}

              </div>

            </div>
            <div className='postTextContainer'>{post.postText}</div>
            <h3>@{post.author?.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;

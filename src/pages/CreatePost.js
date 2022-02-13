import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

 

  return (
    <div className='text-center'>
      <div className=' bg-slate-800 mx-auto p-10 rounded-xl w-96'>
        <h1 className='mb-4 font-bold text-2xl text-slate-100'>Create Post</h1>
        <div className='inputGroup flex'>
          <div className='my-2'>
            <label htmlFor='' className='text-slate-100 mx-3 text-left'>
              Title:{" "}
            </label>
          </div>
          <div>
            <input
              type='text'
              placeholder='title'
              className=' w-60 rounded-lg p-2 my-1'
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
        </div>
        <div className='inputGroup flex'>
          <div>
            <label htmlFor='' className='text-slate-100 mx-3'>
              Post:{" "}
            </label>
          </div>
          <div>
            <textarea
              type='textarea'
              placeholder='post'
              className='w-60 rounded-lg p-2 my-1'
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            />
          </div>
        </div>
        <button
          onClick={createPost}
          className='bg-blue-500 rounded-md px-3 py-2 mt-3 text-gray-100 font-bold'
        >
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;

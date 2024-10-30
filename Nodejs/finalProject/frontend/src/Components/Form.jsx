import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"

const Form = () => {

    const[title, setTitle] = useState("")
    const[author, setAuthor] = useState("")
    const[content, setContent] = useState("")
    const navi = useNavigate()


  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-24">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create a Blog Post</h2>
      
      <div className="space-y-4">
        <input
        onChange={(e) => {
            setTitle(e.target.value)
        }}

        value={title}
          type="text"
          name="title"
          placeholder="Enter your blog's title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
        onChange={(e) => {
            setAuthor(e.target.value)
        }}
        value={author}
          type="text"
          name="author"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <textarea
        value={content}
        onChange={(e) => {
            setContent(e.target.value)
        }}
          name="content"
          placeholder="Enter your blog's content"
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
        
        <button onClick={async() => {
            const data = await fetch("http://localhost:8080/newblog", {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body : JSON.stringify({
                    author : author,
                    content : content,
                    title : title
                })
            })

            const json = await data.json()
            navi("/home")
            // console.log(json)

        }} className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default Form;

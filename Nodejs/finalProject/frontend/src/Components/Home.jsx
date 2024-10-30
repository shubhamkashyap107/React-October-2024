import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('http://localhost:8080/blogs');
      const json = await data.json();
      setBlogs(json);
    };

    getData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {blogs && blogs.map((item) => (
        <div
          key={item.id}
          className="flex border border-gray-300 rounded-lg shadow-lg w-full md:w-10/12 lg:w-8/12 p-4 mx-auto my-5 bg-white transition-transform transform hover:scale-105"
        >
            <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.content}</p>
            <h3 className="text-sm text-gray-500 font-medium">By {item.author}</h3>

            </div>
            <div onClick={async() => {
                // console.log(item.id)
                const data = await fetch(`http://localhost:8080/delete/${item.id}`, {
                    method : "DELETE"
                })
                const json = await data.json()
                console.log(json)
                setBlogs(json)
            }

            
            
            
            } className='cursor-pointer flex items-center'>
                🗑️
            </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

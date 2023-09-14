/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handelAddToTheBookmark,handelMarkRead}) => {
    const [blogs,setBlogs] =useState([]);
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-3xl pl-9">Blogs:{blogs.length}</h2>
            <div>
                {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                handelAddToTheBookmark={handelAddToTheBookmark}
                handelMarkRead={handelMarkRead}
                ></Blog>   )
                }
            </div>
        </div>
    );
};

export default Blogs;
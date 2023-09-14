/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import Blog from './Componants/Blog/Blog'
import Blogs from './Componants/Blogs/Blogs'
import Bookmarks from './Componants/Bookmarks/Bookmarks'
import Header from './Componants/Header/Header'

function App() {
  const [bookmarks,setBookmarks]= useState([]);
  const [readingTime,setReadingTime] =useState(0);
    
    const handelAddToTheBookmark = blog =>{
      // console.log(blog)
      const newBookmarks =[...bookmarks,blog];
      setBookmarks(newBookmarks);
      
    }
    const handelMarkRead = (id,time) =>{
      // console.log('show time',time);
      const newReadingTime =readingTime + time;
      // const parsing = parseInt(newReadingTime)
      setReadingTime(newReadingTime)
      // console.log(newReadingTime)
    // console.log('remove bookmark', id);
    const remainingBookmark =bookmarks.filter(bookmark =>bookmark.id !==id);
    setBookmarks(remainingBookmark)


    }


 
  

  return (
    <div className='max-w-7xl mx-auto'>
     
     <Header ></Header>
   <div className=' mx-auto container md:flex justify-between mt-5'>
   <Blogs handelAddToTheBookmark={handelAddToTheBookmark}
    handelMarkRead={handelMarkRead}
    ></Blogs>
   <Bookmarks bookmarks={bookmarks}
   readingTime={readingTime}></Bookmarks>
   </div>
     
    </div>
  )
}

export default App

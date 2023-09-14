/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handelAddToTheBookmark,handelMarkRead}) => {
    // console.log(blog)
        
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags}= blog;
    return (
        <div className='pt-5 mx-10  space-y-3'>
            <img  className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
           <div className='flex justify-between'>
           <div className='flex justify-start gap-4'>
        
           <img className='rounded-full w-14 ' src={author_img} alt="" />
           
            <div className='mt-4'>
            <p className='font-bold'>{author}</p>
            <p><small>{posted_date}</small></p>
            </div>
            </div>
           </div>
           <div className='flex justify-end gap-2'>

           <p><small>{reading_time} mins read</small></p>
           <button
            onClick={() =>handelAddToTheBookmark( blog)} className='text-2xl text-red-900'>
            <FaBookmark></FaBookmark></button>

           </div>
            
            <h2 className="text-2xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href=''>#  {hash}</a></span>)
                }
            </p>
            <button
            onClick={()=>handelMarkRead(id,reading_time)}
            className=' text-blue-500 font-bold underline'> Mark as read </button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;
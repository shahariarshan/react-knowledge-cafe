import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    // console.log(blog)
        
    const {title,cover,author_img,author,posted_date,reading_time,hashtags}= blog;
    return (
        <div className='pt-5 mx-10'>
            <img src={cover} alt={`cover pocture of the title ${title}`} />
           <div className='flex justify-between'>
           <div className='flex justify-start gap-4'>
        
           <img className='rounded-full w-1/12' src={author_img} alt="" />
           
            <div>
            <p>{author}</p>
            <p><small>{posted_date}</small></p>
            </div>
            </div>
            <p><small>{reading_time} mins read</small></p>
           </div>
            <p>{hashtags}</p>
            <h2 className="text-2xl">{title}</h2>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;
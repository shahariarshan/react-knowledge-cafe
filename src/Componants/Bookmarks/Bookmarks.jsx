import Bookmark from "../Bookmark/Bookmark";

/* eslint-disable react/prop-types */

const Bookmarks = ({bookmarks,readingTime}) => {
    // console.log(bookmarks)
    return (
        
        <div className="md:w-1/3 bg-gray-200 rounded-xl pt-4 text-center p-4">
            <div  className="bg-white rounded-xl   h-5 w-auto">
                <h2 className="text 4xl font-bold ">Reading Time Count:{readingTime}</h2>
            </div>
            <h3 className="text-3xl pt-4">Bookmarked Blogs:{bookmarks.length}</h3>
            {
              
              bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                
            }
        </div>
    );
};

export default Bookmarks;
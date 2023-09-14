/* eslint-disable react/prop-types */


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    // console.log(title)
    return (
        <div className="bg-white text-center p-3 rounded-xl my-4 ">
            <h2 className="text-xl  ">{title}</h2>
        </div>
    );
};

export default Bookmark;
import { useState } from "react";

const SingleItem = ({
  item,
  bookMarked,
  setBookMarked,
  readTimes,
  setReadTime,
}) => {
  const [isBookMark, setIsBookMark] = useState(false)
  const { author, authorImg, coverImg, title, createAt, readTime } = item;

  // -----Handle Book Functions-----
  const handleBookMark = (bookMark) => {
    const exist = bookMarked.find((mark)=>mark === bookMark)
    if(exist){
      console.log('already exists', bookMark);
      return
    }else{
      const newBookMark = [...bookMarked, bookMark];
      setBookMarked(newBookMark);
    }
    setIsBookMark(true)
  };

  const handleReadTime = (time)=>{
    const newReadTime = [...readTimes, time]
    setReadTime(newReadTime)
  }

  return (
    <div className=" border-2 shadow-md p-3 rounded-md my-3">
      <img className="w-full rounded-md" src={coverImg} alt="" />

      <div className="my-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={authorImg}
            alt=""
          />

          <div className="text-sm">
            <p>{author}</p>
            <p>{createAt}</p>
          </div>
        </div>

        <div className="flex items-center">
          {readTime} min read{" "}
          <span className="cursor-pointer" onClick={() => handleBookMark(item)}>
            {isBookMark ? (
              <i className="ri-bookmark-fill"></i>
            ) : (
              <i className="ri-bookmark-line"></i>
            )}
          </span>
        </div>
      </div>
      <h1 className="text-2xl font-semibold">{title}</h1>

      <a onClick={() => handleReadTime(readTime)} href="#">
        Mark as read
      </a>
    </div>
  );
};

export default SingleItem;

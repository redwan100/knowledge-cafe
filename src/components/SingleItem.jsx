const SingleItem = ({
  item,
  bookMarked,
  setBookMarked,
  readTimes,
  setReadTime,
}) => {
  const { author, authorImg, coverImg, title, createAt, readTime } = item;

  // -----Handle Book Functions-----
  const handleBookMark = (bookMark) => {
    const newBookMark = [...bookMarked, bookMark];
    setBookMarked(newBookMark);
  };

  const handleReadTime = (time)=>{
    const newReadTime = [...time, readTimes]
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

        <div>
          {readTime} min read <span className="cursor-pointer" onClick={()=>handleReadTime(readTime)}>🔖</span>
        </div>
      </div>
      <h1 className="text-2xl font-semibold">{title}</h1>

      <a onClick={() => handleBookMark(item)} href="#">
        Mark as read
      </a>
    </div>
  );
};

export default SingleItem;

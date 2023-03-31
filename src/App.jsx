import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  let [bookMarked, setBookMarked] = useState([]);


  let total = 0;
  for(const book of bookMarked){
    console.log(book.readTime);
    total += book.readTime;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto w-[70%] grid grid-cols-1 sm:grid-cols-[3fr_1fr] justify-between gap-3">
        {/* left side  */}

        <Cards bookMarked={bookMarked} setBookMarked={setBookMarked} />

        {/* right side  */}
        <div>
          <div className="bg-green-100 text-emerald-600 py-2 px-3 rounded-md font-semibold">
            <h1>
              Spent time on read:<span>{total}</span>min
            </h1>
          </div>

          <div className="bg-slate-200 my-3">
            <h1>Bookmarked Blogs: {bookMarked.length}</h1>
            <div className="bg-slate-200">
              {bookMarked.map((item) => (
                <div className="bg-slate-100 my-2">
                  <h1>{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

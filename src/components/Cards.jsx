import React from 'react'
import fakeData from '../fakeData/fakeData'
import SingleItem from './SingleItem'
const Cards = ({bookMarked,setBookMarked}) => {

  return (
    <div>
      {fakeData.map((item) => (
        <SingleItem key={item.id} item={item} bookMarked={bookMarked} setBookMarked={setBookMarked}/>
      ))}
      
    </div>
  );
};

export default Cards
import React from 'react';
import ReactDom from 'react-dom';

import './index.css'
 

const firstBook = {
   
     img : 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg',
Title: "Ikigai: The Japanese secret to a long and happy life",
 author: 'Héctor García and Francesc Miralles '
}
const secondBook = {
   
     img : 'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL232_SR232,232_.jpg',
Title: "Atomic Habits: The life-changing",
 author: 'James Clear'
}
const thirdBook = {
   
     img : 'https://m.media-amazon.com/images/I/41r6F2LRf8L._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg',
Title: "The Psychology of Money",
 author: ' Morgan Housel'
}



function Booklist()
{
  return (
  <section className = "booklist">
  <Book img ={firstBook.img}
   Title = {firstBook.Title} 
   author = {firstBook.author}
   />
  <Book img ={secondBook.img}
   Title = {secondBook.Title}
    author = {secondBook.author}
    />
  <Book img ={thirdBook.img} 
  Title = {thirdBook.Title} 
  author = {thirdBook.author}
  />
  </section>
  );   
}

const Book = ({img,Title,author})=>  {
//  const {img,Title,author} = props;

  return (
<article className="book">
 <img src={img} alt="" />
  <h1>
   {Title} 
  </h1>
  <h4>
  {author}
  </h4>

</article>
);};

ReactDom.render(<Booklist/>,document.getElementById('root'));




// always return something

import React from 'react';
import ReactDom from 'react-dom';

import './index.css'
 
function Booklist()
{
  return (
  <section className = "booklist">
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  </section>
  );   
}
const author = 'Héctor García and Francesc Miralles '
const Book = ()=>  {
const Title = "Ikigai: The Japanese secret to a long and happy life"

  return (
<article className="book">

   <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg" alt="" />
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

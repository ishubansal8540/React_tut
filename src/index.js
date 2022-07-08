import React from 'react';
import ReactDom from 'react-dom';


 
function Booklist()
{
  return (
  <section>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  </section>
  );   
}

const Book = ()=>  {
  return (
<article>
   <Image/>
   <Title/>
   <Author/>
</article>
);};
const Image = ()=> (
<img src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg" alt="" />
);

const  Title= ()=>  
 (
<h1>
Ikigai: The Japanese secret to a long and happy life
</h1>
  );

  const Author = () => (

    <h4>
      Héctor García and Francesc Miralles 
    </h4>
  );



ReactDom.render(<Booklist/>,document.getElementById('root'));




// always return something

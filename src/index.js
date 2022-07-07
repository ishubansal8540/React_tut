import React from 'react';
import ReactDom from 'react-dom';


 
function Greeting()
{
  return <>hello world</>;   
}

ReactDom.render(<Greeting/>,document.getElementById('root'));




// always return something

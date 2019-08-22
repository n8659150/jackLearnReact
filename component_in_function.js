import React from 'react';
import ReactDOM from 'react-dom';

const Header = (
  <header>
    I am the header
  </header>
)

// How you write a funcion-like component using React
const IncrementButton = () => {
  let [n,setN] = React.useState(0); // give it a default value of 0;
  return (
    <div>
      {n}
      <button onClick={function(){
        setN(n+1);
      }}>Add 1
      </button>
    </div>
  )
}
const div = (
  <div>
    {Header}
    <p>
      <span>
        hi
      </span>
    </p>
    <IncrementButton />
  </div>
)

ReactDOM.render(
  div,
  document.getElementById('root')
);

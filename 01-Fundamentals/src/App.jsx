import React, { useState } from 'react';

function Card({ children }) {
  return (
    <div className="m-5 p-3 rounded-lg bg-white shadow-xl">{children}</div>
  );
}

function ChildrenProps() {
  return (
    <React.Fragment>
      <h1 className="text-4xl capitalize text-center font-semibold font-serif">
        Children Props
      </h1>
      <Card>
        <h1>Hello, hi Banti</h1>
        <p>
          I am the Card 1, and we are exploring the children prop in the react.
        </p>
        <button className="block bg-blue-600 text-white px-5 py-2 rounded-md my-5 hover:bg-blue-800 hover:cursor-pointer">
          Click me
        </button>
      </Card>
      <Card>
        <h1>Hey, hi Kaira</h1>
        <span>
          I am the Card 2 (span), and we are exploring the children prop in the
          react.
        </span>
        <button className="block bg-blue-600 text-white px-3 py-2 rounded-md my-5 hover:bg-blue-800 hover:cursor-pointer">
          Card 2
        </button>
      </Card>
    </React.Fragment>
  );
}

function SmartCounter() {
  const [count, setCount] = useState(0);

  let message = "";
  if(count > 10) message = "High Value Zone 🚀. Max Limit 20.";
  else if(count > 5) message = "Moderate Value Zone ◼️";
  else message = "Low Value Zone ⚠️. Min Limit 0.";

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function addFive() {
    setCount((prev) => {
      if(prev + 5 > 20){
        alert("Max Limit is 20.");
        return prev;
      }
      return prev + 5;
    });
  }

  return (
    <React.Fragment>
      <h1 className="text-4xl capitalize text-center font-semibold font-serif">
        useState in React
      </h1>
      <div className="flex justify-center">
        <button
          onClick={decrement}
          disabled={count === 0}
          className="block mx-5 bg-blue-600 text-white px-3 py-2 rounded-md my-5 hover:bg-blue-800 hover:cursor-pointer"
        >
          -
        </button>
        <span className="block border-2 border-blue-600 px-3 py-2 rounded-md my-5 hover:bg-blue-800 ">
          {count}
        </span>
        <button
          onClick={increment} disabled={count === 20}
          className="block mx-5 bg-blue-600 text-white px-3 py-2 rounded-md my-5 hover:bg-blue-800 hover:cursor-pointer"
        >
          +
        </button>
        <button
          onClick={addFive} disabled={count >= 16}
          className="block mx-5 bg-blue-600 text-white px-3 py-2 rounded-md my-5 hover:bg-blue-800 hover:cursor-pointer"
        >
          +5
        </button>
      </div>
      <div>{message}</div>
    </React.Fragment>
  );
}

function App() {
  return (
    <div>
      <h1 className='text-6xl text-green-600 capitalize text-center font-semibold font-serif'>Fundamentals In React</h1>
      <ChildrenProps />
      <SmartCounter />
    </div>
  );
}

export default App;

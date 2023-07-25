
import { useState, useEffect } from 'react';
import './App.css';

function App() {
   const [dateTime , setDateTime] = useState(new Date());

   useEffect(() =>{
       const interval = setInterval(() => {
        setDateTime(new Date());
       
       }, 1000);

       return () => clearInterval(interval);
   }, []);


   const formattedTime = dateTime.toLocaleTimeString();
   const formattedDate = dateTime.toLocaleDateString();

  return (
    <div className="App">
    <h1>Digital Watch</h1>
    <div class="watch">
      <div>{formattedTime}</div>
      <div>{formattedDate}</div>
    </div>
         
    </div>
  );
}

export default App;

import React,{useEffect, useState} from 'react';
import './App.css';

function App() { 
   var m=[{name:"mamun",roll:1804064 },
          {name:"kamal",roll:1804000 },
          {name:"kamal",roll:1804000 },
          {name:"kamal",roll:1804000 },

  
  ] 

   var style={
     color:'red',
     backgroundColor:'blue',
   }

  return (
    <div className="App">
      <header className="App-header">
        <h3>React developer</h3>

        <Users></Users>

        <Counter></Counter>

        {
           m.map(student=><Person nam={student}  style={style}></Person>)
        }
        
         

       </header>
    </div>
  );
}

function Person(props){
  
  const {name,roll}=props.nam

  return(
    <div style={{color:"red" ,backgroundColor:'cyan',margin:'5px',width:'400px'}}>
       <h1>{name}</h1>
       <h3>id : {roll+9}</h3>
    </div>
  )

}

function Counter(){
  const [count, setCount] = useState(150)
  const incleaseFunction= ()=>{
    setCount(count+1)
  }
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count-1)}>dicrease</button>
      <button onClick={incleaseFunction}>increase</button>
      <button onMouseMove={incleaseFunction}>Mouse increase</button>
    </div>
  )
  
}

function Users(){
  const [users, setUser] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));


   },[] )
  return(
    <div>
      <h3>Users : {users.length} </h3>
      {
         users.map(user => <li>{user.email}</li> )

      }
    </div>
  )
}

export default App;

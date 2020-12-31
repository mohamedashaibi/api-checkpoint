import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setUsers(res.data))
  })
  return (
    <div className="App">
      {users.map((user)=><div className="user">
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
        <h1>{user.username}</h1>
      </div>)}
    </div>
  );
}

export default App;

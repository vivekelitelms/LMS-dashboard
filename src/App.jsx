import { useState } from 'react';
import Dashboard from './Dashboard';
import './App.css';
import Menu from './Menubar';
import Profile from './Profile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <div >
    <Dashboard/>
        
      </div>
      <div>   
           <Menu/>
           <Profile/>
</div>
<div></div>


</div> 
     
  );
}

export default App;

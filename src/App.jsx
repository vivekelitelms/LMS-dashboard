import { useState } from 'react';
import Dashboard from './Dashboard';
import './App.css';
import Menu from './Menubar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <div >
      
        <Dashboard/>
      </div>
      <div>      <Menu/>
</div>

</div> 
     
  );
}

export default App;

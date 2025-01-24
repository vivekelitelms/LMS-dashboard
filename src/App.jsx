import { useState } from 'react';
import Dashboard from './Dashboard';
import './App.css';
import Menu from './Menubar';
import Profile from './Profile';
import NotificationList from './progressList/NotificationList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <div >
    <Dashboard/>
        </div>

      <div className='compo'>   
      <div>
           <Menu/>
           </div>
           <div>           <NotificationList/>
           </div>
           <Profile/>
          
</div>
 </div>



     
  );
}

export default App;

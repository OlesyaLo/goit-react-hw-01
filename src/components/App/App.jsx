import Profile from '../Profile/Profile';
import userData from '../../userData.json';
import FriendList from '../FriendList/FriendList.jsx';
import friends from "../../friends.json";

import css from './App.module.css';



function App() {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
       <FriendList friends={friends} />
    </div>
  )
}

export default App;

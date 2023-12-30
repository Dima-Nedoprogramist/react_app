import './App.css';
import Friends from './Friends';
import Header from './Header';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import data from './data';
import Profiles from './Profiles';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/friends' element = {<Friends data={data.FriendsPage}/>}/>
        <Route path='/main' element = {<Main data={data.PostPage}/>}/>
        <Route path='/profile' element = {<Profiles data={data.ProfilePage}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

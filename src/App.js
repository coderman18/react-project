import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import './App.css';
import { Route, Routes } from 'react-router-dom';




const App = (props) => {
  return (
    
      <div className='app-wrapper'>
      <Header />
      <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile 
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}

                />}/>
            <Route exact path='/dialog' element={<Dialogs store={props.store} />}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>  
          </Routes>  
        </div>
      </div>
 
  );
}


export default App;

import './App.css';
import Home from './components/home';
import Chat from './components/chat';
import API from './components/api';
import Counter from './components/counter';
import Nav from './components/nav'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav/>

      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/chat' Component={Chat}/>
        <Route path='/api' Component={API}/>
        <Route path='/counter' Component={Counter}/>
      </Routes>
    </>
  )  
}

export default App;

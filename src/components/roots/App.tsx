import '../../style/font.css';
import '../../style/app.css';
import {Routes, Route} from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { HomePage } from './MainPage';
import { Photos } from './Photos';
import { ToDoS } from './ToDos';
import { Posts } from './Posts';

function App(){
  return (
    <div className="app">
      <Header isLoggedIn={true}/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/photos' element={<Photos />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/ToDoS' element={<ToDoS />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
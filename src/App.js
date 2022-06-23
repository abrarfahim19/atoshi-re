import Blog from './Components/Blog/Blog';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import NavBar from './Components/Shared/NavBar/NavBar';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Shared/Footer/Footer';
import About from './Components/About/About';

function App() {
  
  return (
    <div className='dark:bg-slate-800 dark:text-slate-200'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

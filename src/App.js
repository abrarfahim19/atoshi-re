import Blog from './Components/Blog/Blog';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import NavBar from './Components/Shared/NavBar/NavBar';

function App() {
  
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

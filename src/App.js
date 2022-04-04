import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Review from "./Components/Review/Review"
import Dashboard from "./Components/Dashboard/Dashboard";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import NotFound from "./Components/NoFound/NotFound"

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/review' element={<Review></Review>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/notfound' element={<NotFound></NotFound>}></Route>
    </Routes>

    </div>
  );
}

export default App;

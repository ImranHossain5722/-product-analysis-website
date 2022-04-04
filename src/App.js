import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import NotFound from "./Components/NoFound/NotFound"
import AllReview from './Components/AllReviews/AllReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/allReviews' element={<AllReview></AllReview>} ></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/notfound' element={<NotFound></NotFound>}></Route>
    </Routes>

    </div>
  );
}

export default App;

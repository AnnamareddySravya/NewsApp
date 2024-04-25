// import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react'
import Nav from './Navbar'
import News from './News'
// import News1 from './news1'
// import Home from './Home'
import TopLoading from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  const [progress, setProgress] = useState(0);
  // const apikey = 'f33cd24bd27d44f4b0b28db0a4511c29'
  return (
    <div className="App">
      <Router>
        <Nav/>
        <TopLoading color="red" height={5} progress={progress} onLoaderFinished={()=>setProgress(0)}/>
        <Routes>
      
          <Route path='/Home' element={<News category='Home' setProgress={setProgress}/>}/>
          <Route path='/Business' element={<News category='Business' setProgress={setProgress}/>}/>
          <Route path='/Entertainment' element={<News category='Entertainment' setProgress={setProgress}/>}/>
          <Route path='/General' element={<News category='General' setProgress={setProgress}/>}/>
          <Route path='/Health' element={<News category='Health' setProgress={setProgress}/>}/>
          <Route path='/Science' element={<News category='Science' setProgress={setProgress}/>}/>
          <Route path='/Sports' element={<News category='Sports' setProgress={setProgress}/>}/>
          <Route path='/Technology' element={<News category='Technology' setProgress={setProgress}/>}/>

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

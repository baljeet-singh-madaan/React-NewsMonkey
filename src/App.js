
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

import About from './Components/About';

import './App.css';

import React,{useState} from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';


const App = () => {
  const [progress, setProgress] = useState(0)

  const ProgressSet=(Progress)=>{
    setProgress(Progress)
  }
  const pagesize=12;
  const apikey=process.env.REACT_APP_API_KEY

    return (
      <div>
        <Router>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={progress}/>
        <Routes>
        <Route e path='/' element={<News apikey={apikey} setProgress={ProgressSet} key='app' pageSize={pagesize}  country='in' category="general"/>}/>
        <Route e path='/home' element={<News apikey={apikey} setProgress={ProgressSet} key='general' pageSize={pagesize}  country='in' category="general"/>}/>
        <Route e path='/entertainment' element={<News apikey={apikey} setProgress={ProgressSet} key='entertainment' pageSize={pagesize} country='in' category="entertainment"/>}/>
        <Route e path='/health' element={<News apikey={apikey} setProgress={ProgressSet} key="health" pageSize={pagesize} country='in' category="health"/>}/>
        <Route e path='/business' element={<News apikey={apikey} setProgress={ProgressSet} key="business" pageSize={pagesize} country='in' category="business"/>}/>
        <Route e path='/sports' element={<News apikey={apikey} setProgress={ProgressSet} key="sports" pageSize={pagesize} country='in' category="sports"/>}/>
        <Route e path='/technology' element={<News apikey={apikey} setProgress={ProgressSet} key='technology' pageSize={pagesize} country='in' category="technology"/>}/>
        <Route e path='/about' element={<About/>} />

      <Route path='/science' element={<News apikey={apikey} setProgress={ProgressSet} pageSize={pagesize} country='in' category="science"/>}/>
      
      </Routes>
        </Router>
      </div>
    )
}

export default App;

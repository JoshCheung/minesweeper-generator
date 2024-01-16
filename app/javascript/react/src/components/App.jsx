import * as React from 'react'                          
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Board from './Board/Board';
import "./App.css";                                                         

const App = () => {                                   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path={`viewBoard/:id`} element={<Board/>} />
      </Routes>
    </Router>
  )                   
}                                                       
                                        
// Use it if you don't plan to use "remount"                
// document.addEventListener('DOMContentLoaded', () => {     
  // ReactDOM.render(<Hello />, document.getElementById('hello'))                  
// })                                                    
                                                        
export default App
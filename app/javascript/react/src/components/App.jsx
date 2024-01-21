import * as React from 'react'                          
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Board from './Board/Board';
import BoardCollection from './BoardCollection/BoardCollection';
import PageNotFound from './Pages/PageNotFound';
import "./App.css";                                                         

const App = () => {                                   
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path={`viewBoard/:id`} element={<Board/>} />
        <Route exact path={`boardCollection`} element={<BoardCollection/>} />
        <Route exact path="/page-not-found" element={ <PageNotFound /> } />
        <Route path="/*" element={ <Navigate to="/page-not-found" replace />} />
      </Routes>
    </Router>
  )                   
}                                                       
                                        
// Use it if you don't plan to use "remount"                
// document.addEventListener('DOMContentLoaded', () => {     
  // ReactDOM.render(<Hello />, document.getElementById('hello'))                  
// })                                                    
                                                        
export default App
import * as React from 'react'                          
import Home from './Home/Home';
import "./App.css";                                                         
const App = () => {                                   
  return (
    <div>
      <Home/>
    </div>
  )                   
}                                                       
                                        
// Use it if you don't plan to use "remount"                
// document.addEventListener('DOMContentLoaded', () => {     
  // ReactDOM.render(<Hello />, document.getElementById('hello'))                  
// })                                                    
                                                        
export default App
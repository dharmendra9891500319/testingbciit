import React,{Component} from 'react';



import './App.css';
import Myheader from './component/Header';
import MyLogin from './component/Login';
import MySlide from './component/Slide';



class App extends Component
{
  render(){

  return (
    <div>
      
      <Myheader/>
      <MySlide/>
      <MyLogin/>
      
    
      
    </div>
  );
}
}
export default App;


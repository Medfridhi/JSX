import React from 'react';
import imageInSrc from './imageInSrc.jpg';
import './App.css';

function App() {
  let firstName="Med";
  let lastName="Fridhi";
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
 
  <h1 className="title red">My name is {firstName}  {lastName}</h1>  
 
        	<br/>  
 
            < img alt="public" src={'/imageInPublic.jpg'}className="my-profile"/> <br/> 
            < img style={{height:"350px",width:"350px"}} alt="src" src={imageInSrc} className="my-profile"/>
     
 
     
  
    <video width="320" height="240" controls>  
 
        <source src={'/myVideo.mp4'} type='video/mp4' className="my-video"/> 
 
    </video> 
    </div>
    
      </header>
    </div>
    
  );
}

export default App;

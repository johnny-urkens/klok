
import React , { Component } from 'react';
import Stopwatch from "./Stopwatch";
import Countdown from './Countdown';
import Score from './Score';


class App extends Component {
  
  render() {
    return (
      <div className="App container mx-auto mt-3 font-normal">
        {/* <div className="text-5xl text-red-700">Scorebord</div> */}
        <div >
        <div>
        <Score/>
        </div>
        <div >
        <Stopwatch />
        </div>
    <div className="float-right mr-10"><Countdown /></div>
    <div className="float-left ml-10"><Countdown /></div>
        </div>
        
      </div>
    
    );
  }
}



export default App;

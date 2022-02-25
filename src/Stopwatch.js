import React, { Component, useEffect } from "react";
import TimeOut from "./TimeOut";

// import "./App.css";

class Stopwatch extends Component {
  
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
        test: true,
        klok: 65000,
       
      };
      
      startTimer = () => {
        this.setState({
          test: true,
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
          const newTime = ((this.state.timerTime + 10)/60000)%60;

          if (newTime >= 25.01) {
            
            clearInterval(this.timer);
            this.setState({ timerOn: false });
            alert("time is up");
           
          } else {
          this.setState({
            timerTime: Date.now() - this.state.timerStart
          });}
        }, 10);
      };
      stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
      };
      TimeOut = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
        this.setState({timeOut: true});
        this.setState({test: false})

      this.timer = setInterval(() => {
          const newTime = this.state.klok - 10;
          if (newTime >= 0) {
            this.setState({
              klok: newTime
            });
          } else {
            clearInterval(this.timer);
            
          
           
          }
        }, 10);
      
      };
      resetTimer = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0,
          timerOn: false
        });
      };
  render() {
    console.log(this.state.test)
    const { timerTime,test,klok } = this.state;
    // let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
      
if( test=== true){
    return (
      
      <div>
       
        <div className="text-3xl text-red-800">Timer</div>
     
        <div className="text-7xl">
   {minutes} : {seconds} 
</div>

{this.state.timerOn === false && this.state.timerTime === 0 && (
  <button onClick={this.startTimer} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">Start</button>
)}
{this.state.timerOn === true && (
  <button onClick={this.stopTimer} className=" bg-orange-800 rounded text-white m-1 py-0s px-1 font-bold">Stop</button>
)}
{this.state.timerOn === true && (
  <button onClick={this.TimeOut} className=" bg-orange-800 rounded text-white m-1 py-0s px-1 font-bold">Time out</button>
)}
{this.state.timerOn === false && this.state.timerTime > 0 && (
  <button onClick={this.startTimer} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">Resume</button>
)}
{this.state.timerOn === false && this.state.timerTime > 0 && (
  <button onClick={this.resetTimer} className=" bg-red-800 rounded text-white m-1 py-0 px-1 font-bold float-left">Reset</button>
)}
 
      </div>
    )}else{return(<div>
      <div><TimeOut/></div>
      <div>
      {this.state.timerOn === false && this.state.timerTime > 0 && this.state.klok === 0 &&(
        <button onClick={this.startTimer} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">Resume</button>
      )}</div></div>)
    }
  }
}

export default Stopwatch;
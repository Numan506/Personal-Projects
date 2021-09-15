import React, { Component } from 'react'
import './style.css'


class Timer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0,
            intervalId:null
             
        }
    };

    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    };

    handleDicrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    };
   startTime=()=>{
       if(this.state.count>0 && !this.intervalId){
        this.intervalId = setInterval(()=>{
              this.setState({
                count:this.state.count-1
              },()=>{
                  if(this.state.count===0){
                      alert("Timer Finished")
                      clearInterval(this.intervalId)
                      this.intervalId=null
                  }
              })
           },1000)
       }
   };

   stopTimer=()=>{
       if(this.intervalId){
           clearInterval(this.intervalId)
           this.intervalId=null;
       }
   };

   resetTimer =()=>{
       this.setState({
           count:0
       })
       clearInterval(this.intervalId)
       this.intervalId=null
   }
    
    render() {
        return (
            <div>
                      <h3 className="heading">Timer</h3>
                <div className="container">
                  <div>
                       <button className="Btn" onClick={this.handleIncrement}>+</button>
                  
                        <span className="text">{this.state.count}</span>
                  
                       <button className="Btn" onClick={this.handleDicrement} disabled={this.state.count===0?true:false}>-</button>
                  </div>

                  <div>
                        <button className="btn" onClick={this.startTime}>Start</button>
                        <button className="btn" onClick={this.stopTimer}>Stop</button>
                        <button className="btn" onClick={this.resetTimer}>Reset</button>
                  </div>
                </div>
            </div>
        )
    }
}

export default Timer
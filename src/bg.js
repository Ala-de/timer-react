import React from 'react'
import './App.css'



const Time = () =>
    <div>
      <div className ="date1">
        <div className="time-digits">
            00:30:00
        </div>
        <div className="time-text">
            <button className="btt" onclick="starPause()">play</button>
            <button className="btt">pause</button>
            <button className="btt"> reset</button>
        </div>
        </div>
    </div>
    
export default Time





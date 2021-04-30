import React from 'react';
import Time from './bg'
import './App.css'
 

 class App extends React.Component{
  constructor(){
    super()
    this.state={text:''}

  }

  handlechange(event){
    var tt = event.target.value
    console.log(tt)
    this.setState({text:tt})
  }
 
  render(){
    return <div>
      
      <form  class ="inputt"onSubmit={this.handlechange.bind(this)}>
        <input onChange={this.handlechange.bind(this)} value={this.state.text}/>
        <button>Submit</button>
      </form>
      <div className="date">
      <h3 className='val'><u>heure: </u>{Math.floor(this.state.text/3600)}</h3>
      <h3 className='val'><u> minute </u>{Math.floor(this.state.text%3600/60)}</h3>
      <h3 className='val'><u> seconde:</u> {this.state.text%60}</h3>
      </div>
   <Time/>
   
    </div>
  }
}
export default App

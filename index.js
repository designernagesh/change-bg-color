import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class ChangeBg extends Component{
  constructor(){
    super()
    this.state = {
      bgcolor: 'blue'
    }
  }
  changeHandler = (e) => {    
    this.setState({
      bgcolor: e.target.value
    })
  }
    render(){
      console.log(this.state)
      const bgStyle = {
        background: this.state.bgcolor
      }
      return(
      <Fragment>          
          <div className='container' style={bgStyle}>
            <h2>{this.props.heading}</h2>
            <input type='text' value={this.state.bgcolor} 
            onChange={this.changeHandler} />
          </div>
      </Fragment>
      )
    }
  }

ReactDOM.render(<ChangeBg heading='Hello! Change the Background Color in the Input Field' />, document.getElementById('root'))
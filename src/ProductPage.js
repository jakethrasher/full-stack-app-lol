
import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import ProductDetail from './List'

export default class ProductPage extends Component {
  state={
    data:[]
  }
  componentDidMount=async()=>{
    
    const data = await request.get(`https://lab-06-express.herokuapp.com/records`)

    this.setState({
      data: data.body.results,
    })
  
  }

  render() {
 
  
    return (
      <div className="main">
          <ProductDetail  data={this.state.data}/>
      </div>
    )
  }
}

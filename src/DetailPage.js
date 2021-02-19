import React, { Component } from 'react'
import request from 'superagent'

export default class DetailPage extends Component {
    state={
        recordData:{},
    }
    componentDidMount=async()=>{
        const data = await request.get(`https://lab-06-express.herokuapp.com/records/${this.props.match.params.id}`)

        this.setState({
            recordData:data.body.results
        })
        
    }
    render() {
        const productContainer={
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            marginTop: '20px',

        }
        return (
            <div style={productContainer}>
                <div>
                    <img src={this.state.recordData.image} alt="album"/>
                    <p>Artist: {this.state.recordData.artist}</p>
                    <p>Album: {this.state.recordData.album} </p>
                    <p>Price:${this.state.recordData.price}</p>
                    <p>Condition: {this.state.recordData.condition}</p>
                </div>
            </div>
        )
    }
}
               

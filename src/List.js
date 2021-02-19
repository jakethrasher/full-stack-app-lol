import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class List extends Component {
    render() {
        const imageStyle={
            width:'12em',
          }
          const listItem ={
            height: '18em',
            width:'min-content',
            padding: '5px'
          }
          const containerStyle={
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems: 'center',
            height: '100vh',
            width: '70%',
            margin:'0 auto',
          }
        return (
            <div style={containerStyle}>
                {this.props.data.map(record=>
                <Link to={`/${record.id}`} key={record.id} >
                     <div style={listItem}>
                    <img src={record.image} alt="cover" style={imageStyle}/>
                    <p>Artist: {record.artist}</p>
                    <p>Album: {record.album}</p>
                    <p>Price:$ {record.price}</p>
                </div>
                </Link>
            )}
            </div>
        )
    }
}
               

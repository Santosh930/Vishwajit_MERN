
import React from 'react'

class Car extends React.Component{
    render(){
        return <h2>Hi ,I am {this.props.color} {this.props.name} {this.props.number+2} {this.props.number1+4} Car!</h2>
    }
}

export default Car;



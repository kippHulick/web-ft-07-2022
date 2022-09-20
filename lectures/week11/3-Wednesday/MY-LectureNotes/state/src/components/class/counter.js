import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAddClick = () => {
        // console.log(this.state.count);
        // this.state.count ++

        this.setState(state => {
            return {
                count: state.count + 1
            }
        })
    }

  render() {

    let {count} = this.state

    return (
        <>
            <h1>{count}</h1>
            <button onClick={this.handleAddClick}>Incriment Count</button>
        </>
    )
  }
}

export default Counter
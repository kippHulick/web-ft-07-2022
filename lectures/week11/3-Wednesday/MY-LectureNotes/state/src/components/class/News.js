import React, { Component } from 'react'

export default class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
        count: 0,
        articles: []
    }
  }

  handleClick = () => {
    this.setState({count: this.state.count +1})
  }

  componentDidMount() {
    // Where we put the api calls so it doesnt recall the api every reload
    console.log('Component did mount');
  }

  componentWillMount() {
    console.log('Component will mount')
  }

  render() {
    return (
      <>
      <br></br>
      {this.state.count}
      <br></br>
      <button onClick={this.handleClick}>Incriment</button>
      </>
    )
  }
}


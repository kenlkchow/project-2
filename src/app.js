import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './styles/style.scss'

class App extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (      
      <h1>Hello world</h1>
    
    )
    
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
  console.log('45d10d2c7c32e0e63ea28fb1c6b321ef')
)
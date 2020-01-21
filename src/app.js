import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/main'
import Navbar from './Components/Navbar'
import SingleMovie from './Components/singleMovie'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/main/:id" component={SingleMovie} />
      <Route exact path="/Main" component={Main} />
      <Route exact path="/EditMovie" component={EditMovie} />
      {/* <Route path="/watchlater" component={Favourites} /> */}
      
    </Switch>
  </BrowserRouter>
)

class EditMovie extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        name: '',
        original_title: '',
        image: '',
        testingNotes: ''
      },
      errors: {}
    }
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
)
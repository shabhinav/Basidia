import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
// import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Header from './Components/Header';
import Weather from './Components/Weather'
import Home from './Components/Home'
import SignUp from './Components/SignUp'

class App extends Component{
  render() {
    return (
      <div className='App'>
        <Router>
          <Route path='/' exact component={SignUp}></Route>
          <Route path='/signin' component={SignIn}/>
          <Route path='/header' component={Header}/>
          <Route path='/weather' component={Weather}/>
          <Route path='/home' component={Home}/>
        </Router>
      </div>
    )
  }
}

export default App
import React from 'react';
import logo from './logo.svg';
import './App.css';
import cookie from 'react-cookies';
import Login from './Components/Login';
import Home from './Components/Home';
import {Router,Switch,Route} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Admin from './Components/Admin';
import Publisher from './Components/Publisher/index';

const history = createBrowserHistory()


class  App extends React.Component {
  ///get the cookies if the login is done than 
  /// show home page else show login page
   constructor(props){
     super(props);
     this.state={
       loginID:""
     }
   }
  componentWillMount(){
    this.state={loginID:cookie.load('login')}
  }
  render(){
    // if(   this.state.loginID ===null || this.state.loginID==undefined || this.state.loginID.length==0 ){
      
    
    // return <Login/>;
  
      
      
  return (
    <Router history={history}> 
     
    <Switch>
      <Route path="/superAdmin" component={Admin}/>
      <Route path="/publisher" component = {Publisher}/>
      <Route path="/" component={Home}/>
    </Switch>
       
         </Router> 
  );
}

  // }
}
export default App;

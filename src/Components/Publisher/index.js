import React from 'react';
import Login from './login';
import {Route , Switch} from 'react-router-dom';
import DashBoard from './DashBoard';
import PublisherHeader from './PublisherHeader';
import NotFoundPage from '../NotFoundPage';
import Archived from './Archived';
import Results from './Results';
import Verification from './Verification';
import Publish from './Publish';
import ActiveScholarships from './ActiveScholarships';
export default class Publisher extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
               <PublisherHeader/>
                   {/* <Login/>
                     */}
                  
                <Switch>
                   
                     <Route path="/publisher/archived" component={Archived}/>
                      <Route path="/publisher/results" component={Results}/>
                      <Route path="/publisher/verification" component={Verification}/>
                      <Route path="/publisher/publish" component={Publish}/>
                      <Route path="/publisher/activeScholarships" component={ActiveScholarships}/>
                      <Route path="/publisher" exact  component={DashBoard}/>
                      <Route path="/publisher/*" component={NotFoundPage}/> 
                </Switch>
                     

                </div>
        )
    }
}
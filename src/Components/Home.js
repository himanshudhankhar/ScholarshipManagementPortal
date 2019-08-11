import React from 'react';
//Home page will have routing and header in it
import Header from './Header';
import DashBoard from './DashBoard';
import OpenScholarships from './OpenScholarships';
import AppliedScholarships from './AppliedScholarships';
import ArchivedScholarships from './ArchivedScholarships';
import Results from './results';
import {Route , Switch} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
export default class Home extends React.Component{
render(){
    console.log(this.props);
    return <div>
        <Header/>
        <Switch style={{margin:"auto"}}>
        
       <Route path="/" exact component= {DashBoard}/> 
       <Route path="/openScholarships" component={OpenScholarships}/>  
        <Route path="/appliedScholarships" component={AppliedScholarships}  />  
        <Route path="/archivedScholarships" component={ArchivedScholarships} />
        <Route path="/results" component={Results}/>
        <Route path="/*" component={NotFoundPage}/>
        </Switch>
    </div>
}

}
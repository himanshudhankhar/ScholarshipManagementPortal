import React from 'react';
import Profile from './Profile';
import WelcomePage from '../WelcomePage';
import Paper from '@material-ui/core/Paper';
import AboutUs from '../AboutUs';

export default class DashBoard extends React.Component{

render(){
    return(
<div style={{display:"flex",flexWrap:"wrap",height:"100%",padding:10,margin:10}}>
<Profile/>

<WelcomePage/>

<AboutUs/>
    </div>


    )
}

}
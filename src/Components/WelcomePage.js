import React from 'react';
import {Card } from '@material-ui/core';
export default class WelcomePage extends React.Component{

render(){
    return(
        <Card style={{margin:10}} >
            <h1>Welocome to Skolarship</h1>
            <img src="https://www.midwestscc.org/blog2/wp-content/uploads/2016/01/scholarships.png"/>

            </Card>
    )
}

}
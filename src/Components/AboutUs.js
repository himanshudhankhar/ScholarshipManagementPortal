import React from 'react';
import Card from '@material-ui/core/Card';
export default class AboutUs extends React.Component{

    render(){
        return(
            <Card style={{display:"flex",flexWrap:"wrap",width:"auto",maxWidth:400,margin:10,padding:10}}>
                <h5>Hi Himanshu!!</h5> 
                <p>Here at Skolarship we try our best to make best candidates to get the best available scholarships to apply in an easy way to apply and an easy for the scholarship providers to select the best candidates.</p>
                </Card>
        )
    }



}
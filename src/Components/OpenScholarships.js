import React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ApplyCard from './ApplyCard';
export default class OpenScholarships extends React.Component{
render(){
    return(
        <div style={{margin:"auto" ,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <h1>
    Apply to the available scholarships:
    </h1>
    <div style={{display:"flex",flexWrap:"wrap",overflow:"auto",margin:"auto"}}> 
    <List component="nav" aria-label="Available Scholarships"  >
        <ListItem >
        <ApplyCard/>
        </ListItem>
        <ListItem >
        <ApplyCard/>
        </ListItem>
      </List>
      
</div>

    </div>
    )
}
}
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppliedCard from './AppliedCard';
export default class AppliedScholarhips extends React.Component{


render(){

    return(
        <div style={{margin:"auto" ,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h1>
        Applied to open scholarships:
        </h1>
        <div style={{display:"flex",flexWrap:"wrap",overflow:"auto",margin:"auto"}}> 
    <List component="nav" aria-label="Available Scholarships"  >
        <ListItem >
        <AppliedCard/>
        </ListItem>
        <ListItem >
        <AppliedCard/>
        </ListItem>
      </List>
      
</div>
        

        </div>
    )
}


}
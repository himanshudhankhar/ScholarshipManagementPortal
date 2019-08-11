import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PreviousScholarship from '../PreviousScholarship';
export default class ArchivedScholarships extends React.Component{


render(){

    return(
        <div style={{margin:"auto" ,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h1>
        All Scholarships:
        </h1>
        <p>
It includes all scholarships which were present on this platform till now in the descending order of time.
            </p>
        <div style={{display:"flex",flexWrap:"wrap",overflow:"auto",margin:"auto"}}> 
    <List component="nav" aria-label="Available Scholarships"  >
        <ListItem >
        <PreviousScholarship/>
        </ListItem>
        <ListItem >
        <PreviousScholarship/>
        </ListItem>
      </List>
      
</div>
        

        </div>
    )
}


}
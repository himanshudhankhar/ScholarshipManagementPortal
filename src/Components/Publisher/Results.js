import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ResultOfScholarship from '../resultOfScholarship';
export default class ArchivedScholarships extends React.Component{


render(){

    return(
        <div style={{margin:"auto" ,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h1>
        Results of all Scholarships:
        </h1>
        <p>
            </p>
        <div style={{display:"flex",flexWrap:"wrap",overflow:"auto",margin:"auto"}}> 
    <List component="nav" aria-label="Available Scholarships"  >
        <ListItem >
         <ResultOfScholarship/>
        </ListItem>
        <ListItem >
        <ResultOfScholarship/>
        </ListItem>
      </List>
      
</div>
        

        </div>
    )
}


}
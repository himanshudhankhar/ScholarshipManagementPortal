import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
export default class Profile extends React.Component{

render(){
    return(
        <Card style={{margin:10,minWidth:300, display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
       
             <CardContent>
                <img style={{width:200,height:200,border:"1px solid black", borderRadius:100}} src="https://previews.123rf.com/images/bondsza/bondsza1101/bondsza110100011/8630099-beautifull-male-white-lion-resting-in-the-hot-african-sun.jpg"/>
                 <h3>
                     Himanshu Dhankhar 
{/* name */}
                 </h3>
                 <h5>
                     Final Year UnderGraduate
        {/* nick name */}
                 </h5>
                 <h6>
                     CSE IIT Jodhpur
                 {/* branch college */}
                 </h6>
                 


                 </CardContent>
                 <CardActions  >
                     <div align="right" style={{width:"100%"}}> 
            <Button color="primary">
                EDIT
                </Button>
                </div>
                 </CardActions>
         </Card>    
    )
}

}
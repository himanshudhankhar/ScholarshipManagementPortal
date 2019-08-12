import React from 'react';
import {Card,Button,Dialog} from '@material-ui/core';
export default class Applicant extends React.Component{

constructor(props){
    super(props);

    this.state={
        showDetails:false,
        formDetails:[{
            inputName:"Name",
            value:"Himanshu Dhankhar"
        },{
            inputName:"College",
            value:"IIT Jodhpur"
        },{
            inputName:"DOB",
            value:"2001-09-20"
        }]
    }
this.showDetails=this.showDetails.bind(this);
this.closeDetails=this.closeDetails.bind(this);
}

closeDetails(){
    this.setState({showDetails:false})
}

showDetails(){
    this.setState({showDetails:true})
}



render(){
return(
    <Card style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",margin:5,border:"1px solid black"}}>
        <div style={{display:"flex",flexDirection:"column",alingItems:"center",justifyContent:"center"}}>
<h3>Himanshu Dhankhar</h3>
<p>Final Year UnderGrad IIT Jodhpur</p>
<Button color="primary" variant="contained" style={{margin:"auto",marginBottom:3}} onClick={this.showDetails}>View Details</Button>
     
     <Dialog open={this.state.showDetails} onClose={this.closeDetails}>
<div style={{padding:10,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}>

<p><b>Note:</b>Applicant Details are as per he filled the scholarship form.</p>
<div style={{overflow:"auto",marginBottom:10,maxHeight:500}}> 
<table style={{padding:10,textAlign:"left"}}>
 {this.state.formDetails.map((key,id)=>{
return (
    <tr>
        <td>
            <b>{key.inputName}:</b>
        </td>
        <td>
            {key.value}
        </td>
    </tr>
)

 })}
</table>
</div>
    </div>
     </Dialog>
     
     
     
        </div>

        <div style={{display:"flex",flexDirection:"column" ,padding:5,marginLeft:10}}>
           
            <Button color="primary" variant="contained" style={{margin:3}}>Accept</Button>
            <Button color="secondary" variant="contained" style={{margin:3}}>Reject</Button>
        </div>
        <div>

        </div>
    </Card> 
)

}


}
import React from 'react';

import {Card,CardContent,Button,Dialog}from '@material-ui/core';
export default class Verification extends React.Component{
    constructor(props){
        super(props);
        this.state={
            applyForm:false,
            organisationName:""
        }
        this.showApplyForm=this.showApplyForm.bind(this);
        this.closeApplyForm =this.closeApplyForm.bind(this);
    }
    closeApplyForm(){
        this.setState({applyForm:false});
    }
    showApplyForm(){
        this.setState({applyForm:true})
    }
render(){
    return(
        <Card style={{padding:10,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:1000,textAlign:"center",margin:"auto"}}> 
            <h1 style={{color:"#aaaaee"}}>Verification</h1>
           <p style={{ color:"red",textAlign:"center"}}>  Verification is required to get the authority to publish the scholarships on our platform.
            After manual verification only you can post the scholarships.
            </p>
            <CardContent style={{display:"flex",flexDirection:"column"}}>
            <table style={{minWidth:500,textAlign:"left",color:"#aaaaee"}}>
<tr>
    <td>
<b>Verification Status</b>:
    </td>
<td>
    <b style={{color:"red"}}>NOT Verified</b>
    </td>
    </tr>
    <tr>
    <td>
<b>Authority Provided:</b>
    </td>
<td>
    <b style={{color:"red"}}>NOT Provided</b>
    </td>
    </tr>
    <tr>
    <td>
<b>Reason:</b>
    </td>
<td style={{color:"black"}}>
    NOT Applied Yet.
    </td>
    </tr>

            </table>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",padding:10,justifyContent:"center",paddingTop:50}}>
            <Button variant="contained" color="primary" style={{margin:10}} onClick={this.showApplyForm}>Apply</Button>
            <Button variant="contained" color="primary" disabled style={{margin:10}} onClick={this.showApplyForm}>Re-Apply</Button>
            </div>
            </CardContent>
            <Dialog open={this.state.applyForm} onClose={this.closeApplyForm}>
            <div style={{display:"flex",flexDirection:"column",padding:20}}>
           <h3>
               <b>Apply for verification</b>
           </h3>
           <p>Enter Details and Scanned Documents correctly</p>
            <table>

<tr>
    <td>
        Name of Organisation:
    </td>
    <td>
        <input type="text"/>
    </td>
</tr>
<tr>
    <td>
        Name of Authority Personnel:
    </td>
    <td>
        <input type="text"/>
    </td>
</tr>
<tr>
    <td>
        Post of Authority Personnel:
    </td>
    <td>
        <input type="text"/>
    </td>
</tr>
<tr>
    <td>
        Proof of Organisation validity:
    </td>
    <td>
        <input type="file" multiple/>
    </td>
</tr>
<tr>
    <td>
       Personnel Organisation ID:
    </td>
    <td>
        <input type="file" multiple/>
    </td>
</tr>
<tr>
    <td>
        Any Comments:
    </td>
    <td>
       <textarea row="10" columns="12" name="comments"/>
    </td>
</tr>




            </table>

<Button variant="contained" color="primary" style={{margin:"auto",marginTop:10}} onClick={this.closeApplyForm}>
Submit
    </Button>
            </div>

            </Dialog>
            </Card>
    )
}


}
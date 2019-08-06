import React from 'react';
 
import {Card,Button,Dialog,DialogTitle,DialogContent} from '@material-ui/core';
export default class ApplyCard extends React.Component{
constructor(props){
    super(props);
    this.state={
        dialogOpen:false
    }
    this.handleClose=this.handleClose.bind(this);
   this.showResults=this.showResults.bind(this);
}
 

handleClose(){
    this.setState({dialogOpen:false})
}
showResults(){
    this.setState({dialogOpen:true});
}

 
render(){
    return(
        <Card style={{width:"100%",display:"flex",flexDirection:"row",padding:10,margin:"auto",alignItems:"center"}}>
            <img 
            src="data:image/jpeg;base64,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
            h0Wf/2Q==" 
            style={{width:90,height:90,border:"1px solid white",borderRadius:45}}/>
            <div style={{display:"flex",flexDirection:"column",marginLeft:20,alignItems:"center",justifyContent:"center"}}>
            <h1>
                Vivekanand UnderGraduate Research scholarship
                </h1>
                <h6>
                    Swami Vivekand Foundation
                </h6>
                <p style={{maxWidth:600,textAlign:"center"}}>
Scholarship for Undergraduate Students in field of Basic-Science/Medical/Engineering.Top 200 meritorius students will be provided with a scholarship of Rs.4000/pm each.
                    </p>
            </div>
            
      <div style={{display:"flex",flexDirection:"column"}}>   
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"#c7c7c7",padding:10,borderRadius:3,paddingTop:0,paddingBottom:20,border:"1px solid #333"}}>
<p>  
Timeline:
</p>
<b>18th  Aug 2019</b>
to 
<b>18th Sep 2019</b> 
    
            </div>
            <Button variant="contained" color="primary" onClick={this.showResults} style={{marginTop:10}}>View Results</Button>
        
        </div>
        <Dialog open={this.state.dialogOpen} onClose={this.handleClose}>
        <DialogTitle>Results for this scholaraship are as follows:</DialogTitle>
            <DialogContent>

<b>Note that all selected candidates are informed through e-mail.</b>
<div style={{maxHeight:300,overflowY:"auto"}}>
        <table style={{margin:10,border:"1px solid black",backgroundColor:"#c7c7c7"}}>
            <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr>


                <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr>


                <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr>

                <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr>
                <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr> <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr> <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr> <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr> <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr> <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr>

                <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr> <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr> <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr> <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr> <tr style={{margin:10}}> 
            <td style={{border:"1px solid black",width:150}}>
<b>Name</b> 
                </td>
                <td style={{border:"1px solid black",width:150}}>
<b>Email</b>
</td>
            
                </tr>
                </table>
                </div>
            </DialogContent>

            </Dialog>
        </Card>
    )
}



}
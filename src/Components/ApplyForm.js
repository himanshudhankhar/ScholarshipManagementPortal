import React from 'react';
import {Button} from '@material-ui/core';
export default class ApplyForm extends React.Component{

//what does apply form contains 
//Apply Upto 
//Name ,email, phone, college/school, course, CGPA ,12th marks, 10th marks, resume upload ,any achievements, upload documents for verification

constructor(props){
    super(props);

    this.state={
        name:"",
        email:"",
        contact:"",
        college:"",
        course:"",
        cgpa:"",
    //component will mount or did mount will provide us these functionalities

        formDetails:[{
            key:0,
            inputName:"Name",
            inputType:"text",
            value:""
        },
   {
       key:1,
       inputName:"Email",
       inputType:"text",
       value:""
   },
   {key:2,
       inputName:"Contact",
       inputType:"number",
       value:""
   },{
       key:3,
       inputName:"College",
       inputType:"text",
       value:""
   },{key:4,
       inputName:"Course",
       inputType:"text",
       value:""
   },{key:5,
       inputName:"CGPA",
       inputType:"number",
       value:""
   }
    ]
    }
    this.handleChange=this.handleChange.bind(this);
    this.applyForm=this.applyForm.bind(this);
    this.handleChange=this.handleChange.bind(this);
}
handleChange(event,key,id){
    
    key.value=event.target.value;
    let cc =this.state.formDetails;
    cc[id]=key;
    this.setState({formDetails:cc});
   console.log(cc);
}

applyForm(){
    console.log(this.state.formDetails);
}
 
render(){
    return(
        <div style={{display:"flex",flexDirection:"column",padding:10}}>
            <p><b>Fill the details for applying for scholarship</b></p>
            <table style={{margin:10}}>
       {this.state.formDetails.map((key,id)=>{
         return  <tr><td><b>{key.inputName}</b></td>
           <td><input type={key.inputType} value={key.value} style={{minWidth:300}} onChange={(event)=>{this.handleChange(event,key,id)}}/></td>
           </tr>
       })}
           </table>
           <Button variant="contained" color="primary" onClick={this.applyForm} style={{margin:"auto"}}>Apply</Button>
        </div>
    )
}


}
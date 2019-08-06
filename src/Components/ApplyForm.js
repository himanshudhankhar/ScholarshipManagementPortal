import React from 'react';

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
        cgpa:""
    }
    this.handleChange=this.handleChange.bind(this);
}

handleChange(event){
    console.log( event.target.id );
    
}
render(){
    return(
        <div style={{display:"flex",flexDirection:"column",padding:10}}>
            <table>
            <tr>
            <td>
            Apply Upto:
            </td>
            <td>
            12th Dec 2019
            </td>
            </tr>
<tr>
<td>
Name:
    </td>
    <td>
<input type="text" value={this.state.name}  id="name"onChange={this.handleChange} style={{width:300}}/>

    </td>

    </tr>

    <tr>
<td>
Email:
    </td>
    <td>
    <input type="text" value={this.state.email}  id="email"onChange={this.handleChange} style={{width:300}}/>
     
    </td>

    </tr>

<tr>
<td>
phone:
    </td>
    <td>
    <input type="number" value={this.state.contact}  id="contact" onChange={this.handleChange} style={{width:300}}/>
    </td>
    </tr>

    <tr>
<td>
College/School:
    </td>
    <td>
    <input type="text" value={this.state.college}  id="college" onChange={this.handleChange} style={{width:300}}/>
    </td>
    </tr>


    <tr>
<td>
Course:
    </td>
    <td>
    <input type="text" value={this.state.course}  id="course" onChange={this.handleChange} style={{width:300}}/>
    </td>
    </tr>




    <tr>
<td>
CGPA:
    </td>
    <td>
    <input type="number" value={this.state.cgpa}  id="cgpa" onChange={this.handleChange} style={{width:300}}/>
    </td>
    </tr>


 


                </table>
        </div>
    )
}


}
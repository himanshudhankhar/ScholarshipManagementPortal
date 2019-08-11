import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = {
    container: {
      display: 'flex',
      flexDirection:'column'
    },
    textField: {
      marginLeft: "5px",
      marginRight: "5px",
      width: "200px",
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  } 
export default class Login extends React.Component{
constructor(){
super();
        this.state={
        showLogin:true,
        email:"",
        password:"",
        showRegistration:false,
        registerConfirmPassword:"",
        registerEmail:"",
        registerName:"",
        registerPassword:""
    }
this.handleChange=this.handleChange.bind(this);     
this.handleRegister=this.handleRegister.bind(this);
this.handleLogin=this.handleLogin.bind(this);
this.showLoginDialog=this.showLoginDialog.bind(this);
}
showLoginDialog(){
    this.setState({
        showLogin:true
    })
}
 classes = useStyles;
handleChange(event){
 if(event.target.id==='email'){
     this.setState({'email':event.target.value});
 }
 if(event.target.id==='password'){
     this.setState({'password':event.target.value});
 }
 if(event.target.id==="registerName"){
    this.setState({
        'registerName':event.target.value
    })
 }
 if(event.target.id==="registerEmail"){
    this.setState({
        'registerEmail':event.target.value
    })
 }
 if(event.target.id==="registerPassword"){
    this.setState({
        'registerPassword':event.target.value
    })
 }
 if(event.target.id==="registerConfirmPassword"){
    this.setState({
        'registerConfirmPassword':event.target.value
    })
 }
}
handleLogin(){
    this.setState({'showLogin':true,'showRegistration':false, 
    registerConfirmPassword:"",
    registerEmail:"",
    registerName:"",
    registerPassword:"",
    email:"",
    password:""

})
}
handleRegister(){
    this.setState({'showRegistration':true,showLogin:false,
    registerConfirmPassword:"",
    registerEmail:"",
    registerName:"",
    registerPassword:"",
    email:"",
    password:""
})
}
doRegisteration(){
    //make axios post request to this api
}
doLogin(){
//make axios post request to this api
}


render(){
    return(
       
         <div style={{display:'flex',flexDirection: 'column'}}>
          
    <Dialog  aria-labelledby="Login" open={this.state.showLogin} >
      <DialogTitle id="Login" style={{color:'#fff',backgroundColor:"#aaaaee"}}>Login for Publishers</DialogTitle>
      <form style={{display:'flex',flexDirection:"column", padding:"10px",width:"400px"}}  >
      <TextField
        id="email"
        label="Email"
        // style={{width:'300px'}}
        value={this.state.email}
        onChange={this.handleChange}
        margin="normal"
      />
       <TextField
        id="password"
        label="Password"
        type="password"
        // style={{width:'300px'}}
        autoComplete="current-password"
        margin="normal"
        value={this.state.password}
        onChange={this.handleChange}
      />
    <div align="right">
    <Button color="primary" style={{color:'#aaaaee'}} onClick={this.doLogin}>
       Login
      </Button>
    <Button color="primary" style={{color:'#aaaaee'}} onClick={this.handleRegister} >
    Register
      </Button>
</div>

      </form>
      </Dialog>


      <Dialog  aria-labelledby="Register" open={this.state.showRegistration} >
      <DialogTitle id="Login" style={{color:'#fff',backgroundColor:"#aaaaee"}}>Register for Publishers</DialogTitle>
      <form style={{display:'flex',flexDirection:"column", padding:"10px",width:"400px"}}  >
     
      <TextField
        id="registerName"
        label="Name"
        value={this.state.registerName}
        onChange={this.handleChange}
        margin="normal"
      />
      <TextField
        id="registerEmail"
        label="Email"
        // style={{width:'300px'}}
        value={this.state.registerEmail}
        onChange={this.handleChange}
        margin="normal"
      />
       <TextField
        id="registerPassword"
        label="Password"
        type="password"
        // style={{width:'300px'}}
        autoComplete="current-password"
        margin="normal"
        value={this.state.registerPassword}
        onChange={this.handleChange}
      />
       <TextField
        id="registerConfirmPassword"
        label="Confirm Password"
        type="password"
        // style={{width:'300px'}}
        autoComplete="current-password"
        margin="normal"
        value={this.state.registerConfirmPassword}
        onChange={this.handleChange}
      />
    <div align="right">
    <Button color="primary" style={{color:'#aaaaee'}} onClick={this.handleLogin}>
       Login
      </Button>
    <Button color="primary" style={{color:'#aaaaee'}} onClick={this.doRegisteration} >
    Register
      </Button>
</div>

      </form>
      </Dialog>

    </div> 
    )
}

}
import React from 'react';
import  Button  from '@material-ui/core/Button'
import { FaAngleDoubleRight ,FaArrowLeft,FaHome,FaBookOpen,FaFileAlt,FaArchive,FaFlag,FaSignOutAlt} from "react-icons/fa";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { GoVerified,GoRocket } from "react-icons/go";

import { Link } from 'react-router-dom'

export default class Header extends React.Component{
constructor(props){
    super(props);
    this.state={
        drawerOpen:false,

    }
    this.logout=this.logout.bind(this);
    this.toggleDrawer=this.toggleDrawer.bind(this);
}
logout(){
    alert("logging you out");
}
toggleDrawer(){
    let open=this.state.drawerOpen;
    this.setState({
        drawerOpen:!open
    })
}
render(){
    return(
        <div style={{
            display:"flex",
            flexDirection:"column"
        }}> 
        <div style={{
            height:50,
            width:"100%",
            backgroundColor:"#aaaaee",
            color:"#fff",
            fontSize:40,
            fontWeight:'bold',
            
            }} align='right'>
           SKOLARSHIP 
        </div>
            <div align="left">
               <Button onClick={this.toggleDrawer} style={{color:"#fff",backgroundColor:"#aaaaee" ,  borderRadius:20}}>Menu <FaAngleDoubleRight style={{height:20,width:20}} />
                </Button>
                </div>
                <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer}  >
            <div style={{backgroundColor:"#aaaaee"}}>
            <List>
                <ListItem onClick={this.toggleDrawer} style={{cursor:'pointer'}}>
                <ListItemText style={{color:"#fff"}}>Close</ListItemText>
                    <ListItemIcon ><FaArrowLeft style={{color:'#fff',height:20,width:20,marginLeft:10}}/></ListItemIcon>
                </ListItem> 
                <Divider/>
                <Link to="/publisher" style={{ textDecoration: 'none',display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
     
<ListItem>
        <ListItemText style={{color:"#fff"}}>
           Home  
        </ListItemText>
        <ListItemIcon>
            <FaHome   style={{color:'#fff',height:20,width:20,marginLeft:10}}/>
        </ListItemIcon>
   
      
</ListItem>
</Link>
<Divider/>
<Link to="/publisher/verification"  style={{textDecoration:"none"}} >
<ListItem>
      
        <ListItemText style={{color:"#fff"}}>
         Verification
        </ListItemText>
        <ListItemIcon  >
            <GoVerified   style={{color:'#fff',height:20,width:20,marginLeft:10}}  />
        </ListItemIcon>
       
</ListItem>
</Link>
<Divider/>
<Link to="/publisher/publish" style={{ textDecoration: 'none',display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
    
<ListItem>
        <ListItemText style={{color:"#fff"}}>
            Publish
        </ListItemText>
        <ListItemIcon>
            <GoRocket   style={{color:'#fff',height:20,width:20,marginLeft:10}}/>
        </ListItemIcon>
       
</ListItem>
</Link>
<Divider/>
<Link to="/publisher/results" style={{ textDecoration: 'none',display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
    
<ListItem>
        <ListItemText style={{color:"#fff"}}>
            Results
        </ListItemText>
        <ListItemIcon>
            <FaFlag   style={{color:'#fff',height:20,width:20,marginLeft:10}}/>
        </ListItemIcon>
      
</ListItem>
</Link>
<Divider/>

<Link to="/publisher/archived" style={{ textDecoration: 'none',display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
      
<ListItem>
        <ListItemText style={{color:"#fff"}}>
            Archived
        </ListItemText>
        <ListItemIcon>
            <FaArchive   style={{color:'#fff',height:20,width:20,marginLeft:10}}/>
        </ListItemIcon>
       
</ListItem>
</Link>
<Divider/>
<ListItem onClick={this.logout} style={{cursor:"pointer"}} >
       
        <ListItemText style={{color:"#fff"}}>
            LogOut
        </ListItemText>
        <ListItemIcon>
            <FaSignOutAlt   style={{color:'#fff',height:20,width:20,marginLeft:10}}/>
        </ListItemIcon>
</ListItem>


                </List>
                </div>
      </Drawer>

        </div>
    )
}



}
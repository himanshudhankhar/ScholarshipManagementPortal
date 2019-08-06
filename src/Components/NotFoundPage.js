import React from 'react';

export default class NotFoundPage extends React.Component{

render(){
    return(
        <div style={{color:"#aaaaee",display:"flex",flexDirection:"column",margin:"auto",width:"100%" ,paddingTop:"5%",textAlign:"center"}}>
            <h1>Sorry!!</h1><h4>  the requested page doesn't exist</h4>
        </div>
    )
}

}
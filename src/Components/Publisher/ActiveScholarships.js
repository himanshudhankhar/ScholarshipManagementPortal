import React from 'react';
import ActivePost from './ActivePost';
export default class ActiveScholarShips extends React.Component{

render(){
    return(
        <div style={{display:"flex",flexDirection:"column",margin:'auto',padding:10,textAlign:"center",maxWidth:1200}}>
            <h1><b>All Active Scholarships</b></h1>
            <p>You can view your published scholarships which are active right now and you can also view all applications for those who had applied for this scholarship.You have to reject or accept all the applicants from here only.</p>

             <ActivePost/>
             <ActivePost/>   

        </div>

    )
}


}
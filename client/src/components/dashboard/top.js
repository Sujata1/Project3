
import React from "react";
import Topsources from "./topsources.js"


const Top= props => {
    return (
        <div class="top">      
 <h3>Top source</h3>

<Topsources name={props.name} score={props.score}/>

</div>      
    )
  }
  
  export default Top;



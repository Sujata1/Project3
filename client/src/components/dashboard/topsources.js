
import React from "react";

const Topsources= props => {
    return (
    <div class="topsources">      
 <h2 class="topsources"> {props.name} </h2>
 <p class="score"> {props.score} </p>
</div>      
    )
  }
  
  export default Topsources;
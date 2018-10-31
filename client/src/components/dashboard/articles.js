
import React from "react";
import RateButton from "./topsources.js"
import Newsline from "./newsline.js"


const Articles= props => {
    return (
<div>
    <h3>Articles</h3>
        <div class="articlecomponent">
        <img class="thumbnails" src={props.imgurl} />
        <Newsline news={props.news}/>
        <RateButton/>
    </div>
    </div>
     
    )
  }
  
  export default Articles;
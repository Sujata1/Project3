
import React from "react";
import RateButton from "./topsources.js"
import Newsline from "./newsline.js"


const Articles= props => {
    return (

        <div class="articlecomponent">
        <img class="thumbnails" src={logoUrl} />
        <Newsline/>
        <RateButton/>
    </div>

     
    )
  }
  
  export default Articles;

import React from "react";
import RateButton from "./rate.js";
import Newsline from "./newsline.js"


const RecentArticles= props => {
    return (
        <div class="recentarticles">      
 <h3>Recent Articles</h3>

 <Newsline/>
 <RateButton/>
</div>      
    )
  }
  
  export default RecentArticles;



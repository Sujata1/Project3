import React from "react";
import Top from "./top.js"
import Search from "./search.js"
import Articles from "./articles.js"
import RateModal from "./rateModal.js"




const Dashboard = props => {
  return (
    
<div class="container">
<h1><strong>Press The Freedom</strong></h1>

<div class="appbox">

<div class="row"> 
<div class="col-md-12">
<Top name="CNN" score="-10"/>
</div>
</div>

<div class="row"> 
<div class="col-md-12">
<Search/>
</div>
</div>

<div class="row">
<div class="col-md-12"> 
<Articles news="Trump stumped"/>
</div>
</div>

</div>
</div>
  )
}

export default Dashboard;























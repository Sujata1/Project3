import React from "react";
import RecentArticles from "./recent.js"
import Topsource from "./top.js"
import Search from "./search.js"
import Headlines from "./headlines.js"


const Dashboard = props => {
  return (
    
<div class="container">
<h1><strong>Press The Freedom</strong></h1>

<div class="appbox">

<div class="col-md-5 leftside">
<RecentArticles/>
<Topsource/>
</div>

<div class="col-md-7 rightside">
<Search/>
<Headlines/>
</div>

</div> 
</div>
  )
}

export default Dashboard;























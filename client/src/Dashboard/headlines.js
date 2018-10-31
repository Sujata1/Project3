import React from "react";
import Send from "./send.js"

const Headlines = props => {
  return (
    <div class="headlines">
        <h3>Headlines</h3>

  <div class="headlinescomponent">
                <p id="head"></p>
         <div class="twobut">
                     <button type="submit" class="btn btn-primary rate headlinebut rateButton">Rate Me </button>
             <Send/>
         </div>

        </div>
        </div>
  )
}

export default Headlines;
import React from "react";

const RateModal = props => {
  return (

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Rate This Article</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
 Credibile: 
 <b>Disagree</b>
 <input  id="credible" type="text" class="span2 slider" value="" data-slider-min="1" data-slider-max="10" data-slider-step="5" data-slider-value="[250,450]"/> 
 <b>Agree</b>

 Accurate: 
 <b>Agree</b> 
 <input id="accurate" type="text" class="span2 slider" value="" data-slider-min="1" data-slider-max="10" data-slider-step="5" data-slider-value="[250,450]"/> 
 <b>Disagree</b>

 Relevant: 
 <b>Agree</b> 
 <input id="relevant" type="text" class="span2 slider" value="" data-slider-min="1" data-slider-max="10" data-slider-step="5" data-slider-value="[250,450]"/> 
 <b>Disagree</b>

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary submit">Submit</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default RateModal;

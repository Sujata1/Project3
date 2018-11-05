import React from "react";
import dashboard from '../../assets/css/Dashboard.module.css';

const RateModal = props => {
  return (
    <div className={dashboard.modalWrapper}>
      <section className={dashboard.section}>
        <h2>Rate This Article</h2>
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

          <div>
            <span className='button'>Submit Rating</span>
            <span className='button' onClick={e => {
              props.closeModal();
            }}>Cancel</span>
          </div>
        </form>
      </section>
    </div>
  )
}

export default RateModal;

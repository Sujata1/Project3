import React from "react";
import RateScale from './RateScale';
import dashboard from '../../assets/css/Dashboard.module.css';

class RateModal extends React.Component {
  constructor() {
    super();
    this.state = {
      credible: 4,
      accurate: 0,
      relevant: 0
    }
  }

  render() {
    return (
      <div className={dashboard.modalWrapper}>
        <section className={dashboard.section}>
          <h2>Rate This Article</h2>
  
          <div className={dashboard.ratingField}>
            <span>This article is <b>credible</b>.</span>
            {/* <RateScale category='credible' currentValue={this.state.credible} /> */}
  
  
            <input  id="credible" type="text" className="span2 slider" value="" data-slider-min="1" data-slider-max="10" data-slider-step="5" data-slider-value="[250,450]"/> 
          </div>
  
          <div className={dashboard.ratingField}>
            <span>This article is <b>accurate</b>.</span>
  
            <input id="accurate" type="text" className="span2 slider" value="" data-slider-min="1" data-slider-max="10" data-slider-step="5" data-slider-value="[250,450]"/> 
          </div>
  
          <div className={dashboard.ratingField}>
            <span>This article is <b>relevant</b>.</span> 
  
            <input id="relevant" type="text" className="span2 slider" value="" data-slider-min="1" data-slider-max="10" data-slider-step="5" data-slider-value="[250,450]"/> 
          </div>
   
          <div>
            <span className='button'>Submit Rating</span>
            <span className='button' onClick={e => {
              this.props.closeModal();
            }}>Cancel</span>
          </div>
  
        </section>
      </div>
    )
  }

}

export default RateModal;

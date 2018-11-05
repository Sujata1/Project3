import React from "react";
import RateScale from './RateScale';
import dashboard from '../../assets/css/Dashboard.module.css';

class RateModal extends React.Component {
  constructor() {
    super();
    this.state = {
      credible: 0,
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
            <RateScale category='credible' currentValue={this.state.credible} />
          </div>
  
          <div className={dashboard.ratingField}>
            <span>This article is <b>accurate</b>.</span>
            <RateScale category='accurate' currentValue={this.state.accurate} />
          </div>
  
          <div className={dashboard.ratingField}>
            <span>This article is <b>relevant</b>.</span> 
            <RateScale category='relevant' currentValue={this.state.relevant} />
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

import React from 'react';
import dashboard from '../../assets/css/Dashboard.module.css';

class RateScale extends React.Component {
  highlight(value) {
    return this.props.currentValue >= value ? dashboard.highlight : ''
  }

  handleClick(e) {

  }

  render() {
    let scale = [];
    for(let i = 1; i <= 7; i++) {
      scale.push(<span className={this.highlight(i)}>{i}</span>)
    }

    return (
      <div className={dashboard.ratingScale}>
        {scale}
      </div>
    )
  }
}

export default RateScale;
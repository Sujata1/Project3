import React from "react";
import Source from './Source';
import dashboard from '../../assets/css/Dashboard.module.css';

class TopSources extends React.Component  {

    componentDidMount() {
        this.props.getTopSources();
    }

    render() {

        let sources = Boolean(this.props.sources.length) ?
        <div>{this.props.sources.map((src, i) => {
            return <Source src={src} key={i} />
        })}</div> :
        <div className='msg'>Loading...</div>;

        return (
            <section className={dashboard.section}>
                <h2>Top Sources</h2>
                {sources}
            </section>       
        )
    }

}

export default TopSources;
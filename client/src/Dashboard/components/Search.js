import React from "react";
import Dashboard from "./Dashboard";
import dashboard from '../../assets/css/Dashboard.module.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      sourceInput: ''
    }
  }
  
  render() {
    return (
      <section className={dashboard.section}>
        <h3>Search for Articles</h3>
  
        <form>
          <div>
            <input type="text" placeholder="Keywords"/>
          </div>
          
          <div>
            <select id="source">
              <option>News Source</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          
          <div className='button'>Search</div>
        </form>
      </section>       
    )
  }
}

export default Search;

import React from "react";

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
      <section id='search'>
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

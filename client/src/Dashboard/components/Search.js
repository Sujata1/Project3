import React from "react";
import dashboard from '../../assets/css/Dashboard.module.css';
import SearchResults from './SearchResults';

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
        <div>Search for Articles</div>
  
        <form>
          <div>
            <input type="text" placeholder="Keywords"
              value={this.state.searchInput}
              onChange={e => {
                this.setState({searchInput: e.target.value})
              }}
            />
          </div>
          
          <div>
            <select id="source">
              <option>News Source (optional)</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          
          <div className='button' onClick={e => {
            this.props.clickSearch(this.state);
            this.setState({searchInput: ''});
            }}
          >Search</div>
        </form>

        {this.props.searchResults.length && (
          <SearchResults results={this.props.searchResults} />
        )}
      </section>       
    )
  }
}

export default Search;

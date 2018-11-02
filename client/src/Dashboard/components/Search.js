import React from "react";
import dashboard from '../../assets/css/Dashboard.module.css';
import SearchResults from './SearchResults';
import {searchStatus} from '../../actions/searchArticles';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      sourceInput: '',
      sources: []
    }
  }

  getOptions() {
    return this.state.sources.map((source, i) => {
      return <option value={source.id} key={i+1}>{source.name}</option>
    })
  }

  componentDidMount() {
    this.props.reset();
    fetch('api/sources')
      .then(response => {
        if(response.ok) {
          response.json().then(data => {
            if(data.sources) {
              this.setState({sources: data.sources});
            }
          })
        }
      })
      .catch(err => console.log(err));
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
            <select onChange={e => {
              this.setState({sourceInput: e.target.options[e.target.options.selectedIndex].value});
            }}>
              {[<option value='' key={0}>News Source (optional)</option>, ...this.getOptions()]}
            </select>
          </div>
          
          <div className='button' onClick={e => {
            this.props.clickSearch(this.state);
            this.setState({searchInput: ''});
            }}
          >Search</div>
        </form>

        {this.props.searchStatus === searchStatus.IN_PROGRESS && (
          <div>Searching...</div>
        )}

        {Boolean(this.props.searchResults.length) && (
          <SearchResults results={this.props.searchResults} />
        )}
      </section>       
    )
  }
}

export default Search;


import React from "react";


const Search= props => {
    return (

  <div class="search">
        <h3>Search for Articles</h3>

        <form>
                <div class="form-group">
                  <label for="searchbar">Search</label>
                  <input type="text" class="form-control" id="searchbar" placeholder="search"/>
                </div>
                
                <div class="form-group">
                  <label for="source">Source</label>
                  <select class="form-control" id="source">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                      <button type="submit" class="btn btn-primary go">Go!</button>
              </form>


        </div>
            
    )
  }
  
  export default Search;

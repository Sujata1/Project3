import React from 'react';
import ArticleContainer from '../containers/ArticleContainer';
import dashboard from '../../assets/css/Dashboard.module.css';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alreadyRated: props.results.map(result => { return true })
    }
  }

  componentDidMount() {
    let userEmail = localStorage.getItem('userEmail');
    if(userEmail) {
      alreadyRatedAsyncWrapper.call(this);

      async function alreadyRatedAsyncWrapper() {
        let alreadyRated = await Promise.all(this.props.results.map(article => {
          return new Promise((resolve, reject) => {
            fetch('./findUserRating', {
              method: 'POST',
              body: JSON.stringify({
                useremail: userEmail,
                articleurl: article.url
              }),
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              }
            }).then(response => {
              if(response.ok && response.body) {
                response.json()
                  .then(data => {
                    if(data) resolve(true)
                    else resolve(false)
                  })
                  .catch(err => reject())
              } else reject();
            }).catch(err => console.log(err));
          })
        }))
        this.setState({ alreadyRated })
      }
    }
  }

  render() {
    let results = this.props.results
    .filter(article => {
      return Boolean(article.source)
    })
    .map((article, i) => {
      return <ArticleContainer article={article} key={i} alreadyRated={this.state.alreadyRated[i]} />
    })

  return <div className={dashboard.resultsWrapper}>{results}</div>
  }
}

export default SearchResults;
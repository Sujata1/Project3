import React from "react";
import dashboard from '../../assets/css/Dashboard.module.css';

const RecentArticles = props => {
  let articles = props.articles.map((article, i) => {
    return (
    <div>
      <div>{article.title}</div>
      <img className={dashboard.recentImg} src={article.urlToImage} alt='article'></img>
    </div>
    )
  })

  return (
    <section className={dashboard.section}>
      <div>Your Recent Articles</div>
      <div className={dashboard.recentArticle}>{articles}</div>
    </section>       
  )
}

export default RecentArticles;
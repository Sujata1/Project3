import React from "react";
import dashboard from '../../assets/css/Dashboard.module.css';

const RecentArticles = props => {
  let articles = props.articles.map((article, i) => {
    return (
    <div className={dashboard.recentArticle}>
      <div className={dashboard.imgWrapper}>
        <img className={dashboard.img} src={article.urlToImage} alt='article'></img>
      </div>
      <div>{article.title}</div>
    </div>
    )
  })

  return (
    <section className={dashboard.section}>
      <div>Your Recent Articles</div>
      <div>{articles}</div>
    </section>       
  )
}

export default RecentArticles;
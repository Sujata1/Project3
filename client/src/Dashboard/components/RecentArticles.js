import React from "react";
import dashboard from '../../assets/css/Dashboard.module.css';

const RecentArticles = props => {
  let articles = ['These are your recent articles', ...props.articles.map(article => {return article.title})]
.map(text => {return <div>{text}</div>})

  return (
    <section className={dashboard.section}>
        {articles}
    </section>       
  )
}

export default RecentArticles;
import React from 'react';

const articles = [
  {
    title: 'Government Schemes for Solar Energy',
    link: '#',
    summary: 'Learn about the latest government initiatives to promote solar energy in India.',
  },
  {
    title: 'How to Reduce Electricity Bills During Summer',
    link: '#',
    summary: 'Explore tips to keep your home cool while saving energy.',
  },
  {
    title: 'Energy-Efficient Appliances: What to Buy in India',
    link: '#',
    summary: 'A guide to choosing the best energy-efficient appliances available in the Indian market.',
  },
];

function Articles() {
  return (
    <div>
      <h2>Articles and Guides</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <a href={article.link}>Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;

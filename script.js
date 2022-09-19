import './article-list.js';
import articles from './articles.js';

const articleListElement = document.createElement('article-list');
articleListElement.articles = articles;

document.body.appendChild(articleListElement);

// const element = document.querySelector('image-figure');
// element.setAttribute("caption","Halo");
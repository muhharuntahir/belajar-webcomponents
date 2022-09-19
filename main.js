import './article-item.js';
import article from './article.js';

const container = document.querySelector('.container');

const articleItemElement = document.createElement('article-item');
articleItemElement.article = article;

container.appendChild(articleItemElement);

// const element = document.querySelector('image-figure');
// element.setAttribute("caption","Halo");
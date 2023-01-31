import { IArticle } from '../../interfaces/interfaces';
import './news.css';

class News {
    draw(data: IArticle[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: IArticle, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
                newsItem.classList.add('alt');
            }

            const newsPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            newsAuthor.textContent = item.author || item.source.name;

            const newsDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            newsTitle.textContent = item.title;

            const newsSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            newsSource.textContent = item.source.name;

            const newsContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            newsContent.textContent = item.description;

            const newsLink = newsClone.querySelector('.news__read-more a') as HTMLElement;
            newsLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsSection = document.querySelector('.news') as HTMLElement;
        newsSection.innerHTML = '';
        newsSection.appendChild(fragment);
    }
}

export default News;

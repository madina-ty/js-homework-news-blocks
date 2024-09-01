const news = [
    {title: 'News 1', content: "Frosts expected in two regions of KZ on the first day of autumn"},
    {title: 'News 2', content: "Ukrainian troops continue their offensive on Russian territory"},
    {title: "News 3", content: "Two tourists got lost in the fog in the Almaty mountains"},
    {title:"News 4", content: "In Russian, a man survived after receiving a 27,000-volt electric shock at a construction site"},
    {title:"News 5", content: "Bodies of six Israeli hostages kidnapped a year ago found in underground tunnel in Gaza"},
    {title:"News 6", content: "Ukraine has begun emergency power outages due to a difficult situation in the energy system"},
    {title:"News 7", content: "Telegram founder detained at Paris airport on August 24"}
]

let currentIndex = 0;
const newsPerPage = 3;
const loadMoreButton = document.getElementById('load-more');

function renderNews() {
    const newsList = document.getElementById('news-list');
    for (let i = 0; i < newsPerPage; i++) {
        if (currentIndex >= news.length) {
            loadMoreButton.disabled = true;
            return;
        }
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <h2>${news[currentIndex].title}</h2>
            <p>${news[currentIndex].content}</p>
        `;
        newsList.appendChild(newsItem);
        currentIndex++;
    }
}

loadMoreButton.addEventListener('click', () => {
    renderNews();
});

renderNews();
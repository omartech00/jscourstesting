var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status === 200) {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('news-articles');

        articles.forEach(function(article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var meta = document.createElement('p');
            meta.textContent = 'By ' + article.author + ' | ' + article.date;

            var description = document.createElement('p');
            description.textContent = article.description;

            var pointsHeader = document.createElement('h3');
            pointsHeader.textContent = 'Key Points:';

            var pointsList = document.createElement('ul');
            article.key_points.forEach(function(point) {
                var listItem = document.createElement('li');
                listItem.textContent = point;
                pointsList.appendChild(listItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(meta);
            articleDiv.appendChild(description);
            articleDiv.appendChild(pointsHeader);
            articleDiv.appendChild(pointsList);
            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.log('Request failed with status: ' + xhr.status);
    }
};

xhr.onerror = function() {
    console.log('Network error while fetching the news article data.');
};

xhr.send();

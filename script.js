const apiKey = 'BDZjDGpr1SVgzsvTYHWvezu98BeQyO7GYN6H4iAY'; 

document.querySelector('.open-button').addEventListener('click', () => {
    const selectedDate = document.getElementById('date-input').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pictureday').src = data.url;
            document.getElementById('title-2').innerText = data.title;
            document.getElementById('date').innerText = data.date;
            document.getElementById('explanation').innerText = data.explanation;

            // Hide home section and show picture section
            document.getElementById('home-section').style.display = 'none';
            document.getElementById('picture-section').style.display = 'block';
        });
});

document.getElementById('add').addEventListener('click', () => {
    const pictureData = {
        url: document.getElementById('pictureday').src,
        title: document.getElementById('title-2').innerText,
        date: document.getElementById('date').innerText,
        explanation: document.getElementById('explanation').innerText,
    };

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(pictureData);
    localStorage.setItem('favorites', JSON.stringify(favorites));
});

document.getElementById('view-favorites').addEventListener('click', () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const container = document.getElementById('favorites-container');
    container.innerHTML = '';

    favorites.forEach(favorite => {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.innerHTML = `<img src="${favorite.url}" alt="${favorite.title}"><p>${favorite.title}</p><p>${favorite.date}</p><p>${favorite.explanation}</p>`;
        container.appendChild(div);
    });

    // Hide other sections and show favorites section
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('picture-section').style.display = 'none';
    document.getElementById('favorites-section').style.display = 'block';
});

document.getElementById('clear-favorites').addEventListener('click', () => {
    localStorage.removeItem('favorites');
    alert('Favorites have been cleared!');
    document.getElementById('favorites-container').innerHTML = '';
});


document.getElementById('go-home').addEventListener('click', () => {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('picture-section').style.display = 'none';
    document.getElementById('favorites-section').style.display = 'none';
});

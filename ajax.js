function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = ''; 

    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('dataItem');
        div.textContent = `Title: ${item.title}, Body: ${item.body}`;
        dataContainer.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadData();
});

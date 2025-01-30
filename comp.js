let currentCategory;

document.addEventListener('DOMContentLoaded', () => {
    currentCategory = JSON.parse(localStorage.getItem('currentCategory'));
    if (currentCategory) {
        document.getElementById('categoryTitle').textContent = `Explore Competitions in ${currentCategory.name}`;
        updateCompetitionTiles();
    } else {
        alert('No category selected.');
        window.location.href = 'index.html';
    }
});

function updateCompetitionTiles() {
    const tilesContainer = document.getElementById('competitionTiles');
    tilesContainer.innerHTML = ''; // Clear existing tiles
    currentCategory.competitions.forEach((competition, index) => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.innerHTML = `
            <div class="info">
                <h3>${competition.name}</h3>
                <p>${competition.details}</p>
            </div>
            <button onclick="redirectToStudentDetails(${index})">View Students</button>
        `;
        tilesContainer.appendChild(tile);
    });
}

function openAddCompetitionModal() {
    document.getElementById('competitionModal').style.display = 'flex';
}

function closeAddCompetitionModal() {
    document.getElementById('competitionModal').style.display = 'none';
}

function saveCompetition() {
    const name = document.getElementById('competitionName').value.trim();
    const details = document.getElementById('competitionDetails').value.trim();
    if (name && details) {
        currentCategory.competitions.push({ name, details });
        localStorage.setItem('currentCategory', JSON.stringify(currentCategory));
        const categories = JSON.parse(localStorage.getItem('categories'));
        const categoryIndex = categories.findIndex(cat => cat.name === currentCategory.name);
        categories[categoryIndex] = currentCategory;
        localStorage.setItem('categories', JSON.stringify(categories));
        updateCompetitionTiles();
        closeAddCompetitionModal();
    } else {
        alert('Please enter competition details.');
    }
}

function redirectToStudentDetails(index) {
    localStorage.setItem('selectedCompetition', JSON.stringify(currentCategory.competitions[index]));
    window.location.href = 'data.html';
}
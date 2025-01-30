
// Array to store categories
let categories = [];

// Function to open the modal
function openModal() {
    document.getElementById('categoryModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('categoryModal').style.display = 'none';
}

// Function to save category
function saveCategory() {
    const competitionName = document.getElementById('competitionName').value.trim();
    const categoryName = document.getElementById('categoryName').value.trim();
    const collegeName = document.getElementById('collegeName').value.trim();
    if (competitionName) {
        categories.push({ name: competitionName, competitions: [] });
        updateCategoryTiles();
        closeModal();
    }
    else {
        alert('Please enter a category name.');
    }
}

// Function to update category tiles dynamically
function updateCategoryTiles() {
    const tilesContainer = document.getElementById('categoryTiles');
    tilesContainer.innerHTML = ''; // Clear existing tiles
    categories.forEach((category, index) => {
        const tile = document.createElement('div');
        tile.className = 'category-tile';
        tile.innerHTML = `
            <div class="info">
                <h3>${category.name}</h3>
                <p>${category.competitions.length} Competitions</p>
            </div>
            <button onclick="openCompetitions(${index})">View Competitions</button>
        `;
        tilesContainer.appendChild(tile);
    });
}

// Function to navigate to competition page
function openCompetitions(index) {
    const category = categories[index];
    localStorage.setItem('currentCategory', JSON.stringify(category));
    localStorage.setItem('categories', JSON.stringify(categories));
    window.location.href = 'comp.html';
}

// Initialize categories on page load (optional for persistence)
document.addEventListener('DOMContentLoaded', () => {
    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
        categories = JSON.parse(storedCategories);
        updateCategoryTiles();
    }
});

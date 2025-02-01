// Function to update category tiles dynamically
function updateCategoryTiles() {
    const tilesContainer = document.getElementById('categoryTiles');
    tilesContainer.innerHTML = ''; // Clear existing tiles

    categories.forEach((category, index) => {
        const tile = document.createElement('div');
        tile.className = 'category-tile';

        // Check if there are competitions in the category
        if (category.competitions.length > 0) {
            // Use the first competition's name as the title
            const competitionName = category.competitions[0].name;
            tile.innerHTML = `
                <div class="info">
                    <h3>${competitionName}</h3> <!-- Competition name as the title -->
                    <p>${category.competitions.length} Competitions</p>
                </div>
                <button onclick="openCompetitions(${index})">View Competitions</button>
            `;
        } else {
            // If no competitions, use the category name as the title
            tile.innerHTML = `
                <div class="info">
                    <h3>${category.name}</h3> <!-- Fallback to category name -->
                    <p>${category.competitions.length} Competitions</p>
                </div>
                <button onclick="openCompetitions(${index})">View Competitions</button>
            `;
        }

        tilesContainer.appendChild(tile);
    });
}
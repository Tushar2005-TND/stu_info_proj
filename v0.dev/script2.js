// Array to store categories
let categories = []

// Function to open the modal
function openModal() {
  document.getElementById("competitionModal").style.display = "flex"
}

// Function to close the modal
function closeModal() {
  document.getElementById("competitionModal").style.display = "none"
}

// Function to add a new competition
function addCompetition() {
  const compName = document.getElementById("compName").value.trim()
  const compCategory = document.getElementById("compCategory").value.trim()
  const compCollege = document.getElementById("compCollege").value.trim()

  if (compName && compCategory && compCollege) {
    const newCompetition = {
      name: compName,
      category: compCategory,
      college: compCollege,
    }

    // Find or create the category
    let category = categories.find((cat) => cat.name.toLowerCase() === compCategory.toLowerCase())
    if (!category) {
      category = { name: compCategory, competitions: [] }
      categories.push(category)
    }

    // Add the competition to the category
    category.competitions.push(newCompetition)

    updateCategoryTiles()
    closeModal()

    // Clear input fields
    document.getElementById("compName").value = ""
    document.getElementById("compCategory").value = ""
    document.getElementById("compCollege").value = ""
  } else {
    alert("Please fill in all fields.")
  }
}

// Function to update category tiles dynamically
function updateCategoryTiles() {
  const tilesContainer = document.getElementById("categoryTiles")
  tilesContainer.innerHTML = "" // Clear existing tiles

  categories.forEach((category, categoryIndex) => {
    // Loop through each competition in the category
    category.competitions.forEach((competition, competitionIndex) => {
      const tile = document.createElement("div")
      tile.className = "competition-tile" // Changed class name for clarity
      tile.innerHTML = `
        <div class="info">
          <h3>Competition: ${competition.name}</h3> <!-- Competition name -->
          <p>Category: ${category.name}</p> <!-- Category name -->
          <p>College: ${competition.college}</p> <!-- College name -->
        </div>
        <button onclick="viewCompetitions(${categoryIndex}, ${competitionIndex})">View Competitions</button>
      `
      tilesContainer.appendChild(tile)

      // Add fade-in animation
      setTimeout(
        () => {
          tile.style.opacity = "1"
          tile.style.transform = "translateY(0)"
        },
        50 * (categoryIndex * category.competitions.length + competitionIndex),
      )
    })
  })
}

// Function to view competitions (placeholder)
function viewCompetitions(index) {
  const category = categories[index]
  alert(`Viewing competitions for ${category.name}:\n${category.competitions.map((comp) => comp.name).join(", ")}`)
  // In a real application, you might navigate to a new page or open a modal with competition details
}

// Initialize categories on page load (optional for persistence)
document.addEventListener("DOMContentLoaded", () => {
  const storedCategories = localStorage.getItem("categories")
  if (storedCategories) {
    categories = JSON.parse(storedCategories)
    updateCategoryTiles()
  }
})

// Save categories to localStorage whenever they're updated
function saveCategories() {
  localStorage.setItem("categories", JSON.stringify(categories))
}


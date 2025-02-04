document.addEventListener("DOMContentLoaded", () => 
  {
  const usernameInput = document.getElementById("username")
  const adminNameSpan = document.getElementById("adminName")
  const loginForm = document.getElementById("loginForm")

  // Update admin name as user types
  usernameInput.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      adminNameSpan.innerHTML = `<b>${this.value}</b>`
    } else {
      adminNameSpan.innerHTML = "<b>Admin Name</b>"
    }
  })

  // Prevent form submission for this example
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Login functionality would be handled here.")
    // In a real application, you would handle login validation here
  })
})


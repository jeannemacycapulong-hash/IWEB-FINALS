// Highlight current nav link
var currentPage = window.location.pathname.split("/").pop();
if (currentPage === "") currentPage = "index.html";

document.querySelectorAll("nav a").forEach(function(link) {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Join Form handler
var joinForm = document.getElementById("joinForm");
if (joinForm) {
  joinForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for joining the Capybara Fun Club!");
    joinForm.reset();
  });
}

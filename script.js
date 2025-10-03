function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Admin Login System
function adminLogin(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "ashraful" && pass === "152007") {
    window.location.href = "dashboard.html";
  } else {
    alert("❌ ভুল ইউজারনেম বা পাসওয়ার্ড!");
  }
}

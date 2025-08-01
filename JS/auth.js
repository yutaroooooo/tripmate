const correctPassword = "32trip2025";

window.onload = function () {
  const isAuthenticated = localStorage.getItem("tripmate_authenticated") === "true";

  if (isAuthenticated) {
    showMainContent();
  } else {
    document.getElementById("passwordModal").style.display = "block";
  }
};

function submitPassword() {
  const input = document.getElementById("passwordInput").value;
  const errorMessage = document.getElementById("errorMessage");

  if (input === correctPassword) {
    localStorage.setItem("tripmate_authenticated", "true");
    showMainContent();
  } else {
    errorMessage.textContent = "パスワードが違います。";
  }
}

function showMainContent() {
  document.getElementById("passwordModal").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}

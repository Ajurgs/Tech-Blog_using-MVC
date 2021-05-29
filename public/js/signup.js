const signup = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log("SIGNING UP");
  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/");
    } else {
      if (response.path === "password") {
        alert("Password needs to be at least 8 characters in length!");
      } else {
        alert("failed to sign up");
      }
    }
  }
};

document.querySelector("#signup-form").addEventListener("submit", signup);

const logout = async () => {
  const resopnce = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (resopnce.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out!");
  }
};

document.querySelector("#logout").addEventListener("click", logout);

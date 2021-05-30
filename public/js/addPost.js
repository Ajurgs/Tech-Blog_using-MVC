const addPost = async function (event) {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const text = document.querySelector("#text").value.trim();
  const user_Id = document.querySelector("#userId").value;

  let post = { title, text, user_Id };
  await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/dashboard");
};

document.querySelector("#post-form").addEventListener("submit", addPost);

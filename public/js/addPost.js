const addPost = async function (event) {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const text = document.querySelector("#text").value.trim();
  const userId = document.querySelector("#userId").value;

  let post = {title, text, userId};
  await fetch(`/api/post`,{
      method: "PUT",
      body = JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
  })
  document.location.replace("/dashboard");

};


document.querySelector("#post-form").addEventListener("submit", addPost)
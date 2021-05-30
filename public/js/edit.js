const postId = document.querySelector("#id").value;

const editFormSubmit = async function (event) {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const text = document.querySelector("#text").value.trim();

  let post = { title, text };
  await fetch(`/api/posts/${postId}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });
  document.location.replace("/dashboard");
};

const deletePost = async function () {
  await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });
  document.location.replace("/dashboard");
};

document.querySelector("#edit-form").addEventListener("submit", editFormSubmit);
document.querySelector("#delete-btn").addEventListener("click", deletePost);

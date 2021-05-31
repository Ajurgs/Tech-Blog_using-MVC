const addComment = async function (event) {
  event.preventDefault();

  const postId = document.querySelector("#post_id").value;
  const text = document.querySelector("#text").value.trim();
  console.log(postId);
  if (text) {
    let comment = { postId, text };
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.location.replace(`/post/${postId}`);
  }
};

document.querySelector("#new-comment").addEventListener("submit", addComment);

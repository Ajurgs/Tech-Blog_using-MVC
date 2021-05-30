const addComment = async function (event) {
  event.preventDefault();

  const post_id = document.querySelector("#post_id");
  const text = document.querySelector("#comment-text");

  if (text) {
    let comment = { post_id, text };
    fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.location.replace(`/post/${post_id}`);
  }
};

document.querySelector("#new-comment").addEventListener("submit", addComment);

document.addEventListener("DOMContentLoaded", function () {
  let username = document.getElementById("username");
  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (username.value.length <= 2) {
      document.querySelector("#hide").style.display = "initial";
    } else {
      document.querySelector("#hide").style.display = "none";
    }
  });
});

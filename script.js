const password = document.getElementById("password");
let imageIcon = document.getElementById("image-icon");
let icon = document.getElementById("icon");
let passwordValue = "";
// password.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   passwordValue = e.target.value;
//   console.log(passwordValue);
// });

// function showPassword() {
//   if (password.type === "password") {
//     password.type = "text";
//     imageIcon.src = "images/show.png";
//   } else {
//     password.type = "password";
//     imageIcon.src = "images/hide.png";
//   }
// }

imageIcon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    imageIcon.src = "images/show.png";
  } else {
    password.type = "password";
    imageIcon.src = "images/hide.png";
  }
};

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/light.png";
  } else {
    icon.src = "images/night-mode.png";
  }
};

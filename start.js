let fullname = prompt("Enter Your Name");
fullname = fullname ? fullname : "No Name";
localStorage.setItem("name", fullname);

setTimeout(function () {
  window.location.href = "exam.html";
}, 30 * 1000);

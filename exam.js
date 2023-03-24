document.getElementsByTagName("h3")[0].innerHTML = localStorage.getItem("name");

let questions = [
  "Who is the president of Nigeria?",
  "Who is the local government chairman of Ghana?",
  "Who is the president candidate for the state of Lagos?",
  "Why is Ikeja a city with many people that like making money?",
  "I like to start in Ifako and also be the president of Gbagada?",
  "Who is the president of Liberia?",
  "Who is the president of USA?",
  "Who is the president of South Afrcia?",
  "Who is the president of Beligum?",
  "Who is the president of Germany?",
];

let nos = 0;
setInterval(function () {
  document.getElementById("question").innerHTML = questions[nos++];
}, 5 * 1000);

setTimeout(function () {
  window.location.href = "stop.html";
}, 10 * 5 * 1000);

function checkPassword() {
  const password = document.getElementById("password").value;

  if(password === "AkhanloveKRajbhar") {

    document.getElementById("popup").classList.remove("hidden");

    setTimeout(() => {
      document.getElementById("popup").classList.add("hidden");
      document.getElementById("password-screen").style.display = "none";
      document.getElementById("main-content").classList.remove("hidden");
    }, 2500);

  } else {
    document.getElementById("error").innerText = "Wrong password baccha 💔";
  }
}

function startExperience() {

  document.getElementById("music").play();

  document.getElementById("split-screen").classList.remove("hidden");

  document.querySelector(".hero").style.display = "none";
}

function openLetter() {

  document.getElementById("letter").classList.remove("hidden");

  document.querySelector(".envelope-wrapper").style.display = "none";
}

/* FALLING ROSES */
setInterval(() => {

  const rose = document.createElement("div");
  rose.classList.add("rose");
  rose.innerHTML = "🌹";

  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = (Math.random() * 3 + 4) + "s";

  document.querySelector(".rose-container").appendChild(rose);

  setTimeout(() => {
    rose.remove();
  }, 7000);

}, 300);
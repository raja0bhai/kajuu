const gif = document.getElementById("gif");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

let hasRunAway = false;
let isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

// Make no-btn fixed and move it to a random spot
function runAway() {
  if (!hasRunAway) {
    const rect = noBtn.getBoundingClientRect();
    noBtn.style.position = "fixed";
    noBtn.style.width = rect.width + "px";
    noBtn.style.height = rect.height + "px";
    noBtn.style.top = rect.top + "px";
    noBtn.style.left = rect.left + "px";
    hasRunAway = true;
  }

  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;
  const maxX = window.innerWidth - btnW - 8;
  const maxY = window.innerHeight - btnH - 8;

  noBtn.style.left = Math.floor(Math.random() * maxX) + "px";
  noBtn.style.top = Math.floor(Math.random() * maxY) + "px";
}

// PC — hover pe bhaago
noBtn.addEventListener("mouseover", () => {
  if (!isMobile) runAway();
});

// Mobile — touch pe seedha sad gif, button gayab
noBtn.addEventListener(
  "touchstart",
  (e) => {
    e.preventDefault();
    noBtn.hidden = true;
    yesBtn.hidden = false;
    question.innerHTML = "PLSSSS 😭💔";
    gif.src =
      "https://i.pinimg.com/originals/03/a4/28/03a428ee705240475480c7722c6c2b3b.gif";
  },
  { passive: false },
);

// PC — agar koi pakad le
noBtn.addEventListener("click", () => {
  if (!isMobile) {
    noBtn.hidden = true;
    question.innerHTML = "Noooo 😭💔";
    gif.src =
      "https://i.pinimg.com/originals/03/a4/28/03a428ee705240475480c7722c6c2b3b.gif";
  }
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YAYYYYYYY ❤✨";
  gif.src =
    "https://i.pinimg.com/originals/ce/63/c2/ce63c26f8747e2181594d2db8787c026.gif";
  noBtn.hidden = true;
  yesBtn.hidden = true;
});

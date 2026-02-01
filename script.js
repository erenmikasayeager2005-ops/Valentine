const noBtn = document.getElementById("no");
const text = document.getElementById("runText");

noBtn.addEventListener("mouseover", run);
noBtn.addEventListener("touchstart", run);

function run() {
  text.style.display = "block";
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.drawImage(document.getElementById("polkadotmanmom"), 0, 0);

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

ctx.lineWidth = 10;
const mouse = {
  x: undefined,
  y: undefined,
};
canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  let randomColor = (((1 << 24) * Math.random()) | 0).toString(16);
  ctx.fillStyle = "#" + randomColor;
  drawCircle();
});
function drawCircle() {
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
  ctx.fill();
}


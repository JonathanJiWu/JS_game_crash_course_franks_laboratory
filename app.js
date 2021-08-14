const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(10, 20, 150, 50);
});

console.log(canvas);
console.log(ctx);
ctx.fillStyle = "white";
ctx.fillRect(10, 20, 150, 50);

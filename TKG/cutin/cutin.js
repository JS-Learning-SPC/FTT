const mov = document.getElementById("cutin_place");
const $count = document.getElementById('count');
let idx = 0;
let counter = 0;

count = counter;
$count.textContent = count;

document.getElementById("cutin_button").onclick = function changeCutin() {
  idx++;
  if (idx > 2) {
    idx = 1;
  }
  mov.src = "./mov/cutin_" + idx + ".mp4";
  mov.load();
  mov.play();
  counter++
  count = counter;
  $count.textContent = count;
}

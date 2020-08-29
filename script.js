const slot0View = document.getElementById("slot0");
const slot1View = document.getElementById("slot1");
const slot2View = document.getElementById("slot2");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const images = [
  "./images/small_star8_red.png",
  "./images/small_star6_orange.png",
  "./images/small_star7_yellow.png",
  "./images/small_star9_green.png",
  "./images/small_star2_skyblue.png",
  "./images/small_star1_blue.png",
  "./images/small_star5_purple.png",
]
let timer = null;

start.onclick = () => {
  runslot();
  // スタートボタンを連続で押せないようにする
  start.disabled = true;
}
stop.onclick = () => {
  stopSlot();
  // スタートボタンを押せるようにする
  start.disabled = false;
}

// スロットを回す
function runslot() {
    slot0View.src = images[Math.floor(Math.random() * images.length)];
    slot1View.src = images[Math.floor(Math.random() * images.length)];
    slot2View.src = images[Math.floor(Math.random() * images.length)];
    timer = setTimeout(() => {
      runslot();
    }, 135);
    
  }
// スロットを止める
function stopSlot() {
  clearTimeout(timer);
}
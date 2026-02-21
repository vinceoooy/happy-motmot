// Messages in order (looping)
const messages = [
  "Wait… karon ba? humana naman cguru? 🤔",
  "the 14th oi!💍🏝️ just kidding, no pressure 😜",
  "the 19th? 😎 pero ga bulag man ta hahaha kadaghan bai dates!",
  "25? 📱 hahahaha TINDER!",
  "It’s the 22nd! HAPPY BIRTHDAY🎂 Hahahaa joke… but who cares? ❤️",
  "Anyways, Its never too early or too late to celebrate us! 💻--🌍--💻",
  "Happy Mot Mot Bebu ❤️"
];

let index = -1;
let firstClick = true;

// ---- MEDIA DECK (1..43, with specific mp4 numbers) ----
const videoNums = new Set([7, 9, 16, 24, 26, 36, 39, 43]);

const allMedia = [];
for (let i = 1; i <= 43; i++) {
  const ext = videoNums.has(i) ? "mp4" : "jpg";
  allMedia.push(`images/${i}.${ext}`);
}

let mediaQueue = [];

// Fisher-Yates shuffle
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getNextMedia() {
  if (mediaQueue.length === 0) {
    mediaQueue = [...allMedia];
    shuffle(mediaQueue);
  }
  return mediaQueue.pop();
}

function nextMessage() {
  const card = document.getElementById("card");
  const msg = document.getElementById("message");
  const frame = document.getElementById("imageFrame");
  const title = document.getElementById("titleText");

  const img = document.getElementById("memoryImage");
  const video = document.getElementById("memoryVideo");

  // Hide title only on first click
  if (firstClick && title) {
    title.classList.add("hide-title");
    setTimeout(() => { title.style.display = "none"; }, 400);
    firstClick = false;
  }

  // Fade out
  card.classList.add("fade-out");

  setTimeout(() => {
    // Next message in order
    index = (index + 1) % messages.length;
    msg.innerText = messages[index];

    // Next media (no repeats until all 43 shown)
    const media = getNextMedia();
    frame.style.display = "block";

    // Reset displays
    img.style.display = "none";
    video.style.display = "none";

    // Stop any currently playing video
    video.pause();
    video.removeAttribute("src");
    video.load();

    if (media.endsWith(".mp4")) {
      video.src = media;
      video.style.display = "block";
      video.play().catch(() => {});
    } else {
      img.src = media;
      img.style.display = "block";
    }

    // Fade in
    card.classList.remove("fade-out");
  }, 400);
}
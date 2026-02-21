// Messages in order (looping)
const messages = [
  "Wait… karon ba? humana naman cguru? 🤔",
  "the 14th oi!💍🏝️ just kidding, no pressure 😜",
  "the 19th? 😎 pero ga bulag bulag man 💔 ta hahaha kadaghan bai dates!",
  "25? 📱 hahahaha TINDER! guitarist yarn?",
  "7th wahahaha first date ba or 8th or 9th 😂? 🍝🍲",
  "It’s the 22nd! HAPPY BIRTHDAY🎂 Hahahaa joke… but who cares? ❤️",
  "Anyways, Its never too early or too late to celebrate us! 💻--🌍--💻",
  "Happy Mot Mot Bebu ❤️"
];

let index = -1;
let firstClick = true;

// ---------- BUILD PHOTO + VIDEO POOLS ----------
const allPhotos = [];
for (let i = 1; i <= 35; i++) {
  allPhotos.push(`images/${i}.jpg`);
}

const allVideos = [];
for (let i = 36; i <= 43; i++) {
  allVideos.push(`images/${i}.mp4`);
}

// ---------- SHUFFLE DECK HELPERS ----------
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// photo deck (no repeat until all shown)
let photoQueue = [];
function getNextPhoto() {
  if (photoQueue.length === 0) {
    photoQueue = [...allPhotos];
    shuffle(photoQueue);
  }
  return photoQueue.pop();
}

// video deck (no repeat until all played)
let videoQueue = [];
function getNextVideo() {
  if (videoQueue.length === 0) {
    videoQueue = [...allVideos];
    shuffle(videoQueue);
  }
  return videoQueue.pop();
}

// ---------- MAIN ----------
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

    frame.style.display = "block";

    // Reset displays
    img.style.display = "none";
    video.style.display = "none";

    // Stop any currently playing video
    video.pause();
    video.removeAttribute("src");
    video.load();

    // FIRST message -> VIDEO
    if (index === 0) {
      const vid = getNextVideo();
      video.src = vid;
      video.style.display = "block";
      video.play().catch(() => {});
    }
    // All other messages -> PHOTO
    else {
      const pic = getNextPhoto();
      img.src = pic;
      img.style.display = "block";
    }

    // Fade in
    card.classList.remove("fade-out");
  }, 400);
}
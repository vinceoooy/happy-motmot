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

// ---------- IMAGE DECK SYSTEM ----------

// create list images/1.jpg ... images/18.jpg
const allImages = [];
for (let i = 1; i <= 18; i++) {
  allImages.push(`images/${i}.jpg`);
}

let imageQueue = [];

// shuffle function (Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// get next image without repeats
function getNextImage() {
  // refill & reshuffle when empty
  if (imageQueue.length === 0) {
    imageQueue = [...allImages];
    shuffle(imageQueue);
  }

  return imageQueue.pop();
}

// ---------- MAIN FUNCTION ----------

function nextMessage() {
  const card = document.getElementById("card");
  const msg = document.getElementById("message");
  const img = document.getElementById("memoryImage");
  const frame = document.getElementById("imageFrame");
  const title = document.getElementById("titleText");

  // hide title on first click
  if (firstClick && title) {
    title.classList.add("hide-title");
    setTimeout(() => title.style.display = "none", 400);
    firstClick = false;
  }

  // fade out
  card.classList.add("fade-out");

  setTimeout(() => {

    // message order stays fixed
    index = (index + 1) % messages.length;
    msg.innerText = messages[index];

    // image never repeats until all shown
    img.src = getNextImage();
    frame.style.display = "block";

    // fade in
    card.classList.remove("fade-out");

  }, 400);
}
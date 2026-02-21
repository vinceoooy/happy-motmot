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

// Random image pool: images/1.jpg ... images/18.jpg
const imagePool = [];
for (let i = 1; i <= 18; i++) {
  imagePool.push(`images/${i}.jpg`);
}

let index = -1;
let lastImage = "";
let firstClick = true;

// Random image, but don't repeat twice in a row
function getRandomImage() {
  let img;
  do {
    img = imagePool[Math.floor(Math.random() * imagePool.length)];
  } while (img === lastImage && imagePool.length > 1);

  lastImage = img;
  return img;
}

function nextMessage() {
  const card = document.getElementById("card");
  const msg = document.getElementById("message");
  const img = document.getElementById("memoryImage");
  const frame = document.getElementById("imageFrame");
  const title = document.getElementById("titleText");

  // Hide the title only once (first click)
  if (firstClick && title) {
    title.classList.add("hide-title");
    setTimeout(() => {
      title.style.display = "none";
    }, 400);
    firstClick = false;
  }

  // Fade out
  card.classList.add("fade-out");

  setTimeout(() => {
    // Advance message in order
    index = (index + 1) % messages.length;
    msg.innerText = messages[index];

    // Random image each click
    img.src = getRandomImage();
    frame.style.display = "block";

    // Fade in
    card.classList.remove("fade-out");
  }, 400);
}
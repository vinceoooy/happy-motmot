const messages = [
  {
    text: "Wait… karon ba? humana naman cguru? 🤔",
    img: "" // add link
  },
  {
    text: "the 14th oi!💍🏝️ just kidding, no pressure 😜",
    img: ""
  },
  {
    text: "the 19th? 😎 pero ga bulag man ta hahaha kadaghan ba!",
    img: ""
  },
  {
    text: "It’s the 22nd! HAPPY BIRTHDAY🎂 Hahahaa joke… but who cares? ❤️",
    img: ""
  },
  {
    text: "Anyways, Its never too early or too late to celebrate us! 💻❤️",
    img: ""
  }
];

let index = -1;

function nextMessage() {
  const card = document.getElementById("card");
  const msg = document.getElementById("message");
  const img = document.getElementById("memoryImage");

  // fade out
  card.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % messages.length;

    msg.innerText = messages[index].text;

    if (messages[index].img) {
      img.src = messages[index].img;
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }

    // fade in
    card.classList.remove("fade-out");
  }, 400);
}
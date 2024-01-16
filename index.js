const addBtn = document.getElementById("add-btn");
const output = document.querySelector(".output-container");
const body = document.querySelector("body");

addBtn.addEventListener("click", createObject);

const objectArr = [];

// construct object function
function ConstructObject(item, id, star) {
  this.item = item;
  this.itemId = id;
  this.star = star;
}

// create object function

function createObject() {
  getRandomId();
  let item = document.getElementById("input-item").value;
  let itemId = newId.join(" ");
  let star = false;
  const newObject = new ConstructObject(item, itemId, star);
  objectArr.push(newObject);
  clearInputValues();
  renderObject();
  console.log(objectArr);
  console.log(newId);
}

// render object

function renderObject() {
  output.innerHTML = "";
  objectArr.forEach((item) => {
    output.innerHTML += `
    <div class="item-output-container" id=${item.itemId}>
      <p>${item.item}</p>
      <div class="star-state">${item.star ? "★" : "☆"}</div>
    </div>
    `;
  });

  deleteObject();
}

// delete object
function deleteObject() {
  const itemBoxes = document.querySelectorAll(".item-output-container");
  itemBoxes.forEach((box) => {
    box.addEventListener("click", handleDelete);
  });
}

// handle delete function
function handleDelete(e) {
  let targetId = e.currentTarget.id;
  let index = objectArr.findIndex((item) => item.itemId === targetId);
  if (index !== -1) {
    objectArr.splice(index, 1);
    renderObject(); // Move the renderObject call here
  }
}

// filter object function
function filterObject() {}

// clear input values
function clearInputValues() {
  let itemInput = document.getElementById("input-item");
  itemInput.value = "";
}

// create random id;
let newId = [];

const randomChars = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "A",
  "J",
  "S",
  "P",
  "R",
  "D",
  "M",
  "!",
  "@",
  "£",
  "$",
  "%",
  "&",
  "?",
  "+",
];

function getRandomId() {
  newId = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * randomChars.length);
    let randomId = randomChars[randomNumber];
    newId.push(randomId);
  }
}

// dark mode

const toggleEl = document.querySelector(".toggle-el");

toggleEl.addEventListener("click", toggleMode);

function toggleMode() {
  let toggleItem = document.getElementById("toggle-item");

  if (toggleItem.textContent === "🌙") {
    toggleItem.textContent = "☀️";
    body.classList.toggle("dark");
  } else if (toggleItem.textContent === "☀️") {
    toggleItem.textContent = "🌙";
    body.classList.toggle("dark");
  }
}

const addBtn = document.getElementById("add-btn");
const output = document.querySelector(".output-container");

addBtn.addEventListener("click", createObject);

const objectArr = [];

// construct object function
function ConstructObject(item, id, star) {
  this.item = item;
  this.id = id;
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
}

// render object

function renderObject() {
  output.innerHTML = "";

  objectArr.forEach((item) => {
    output.innerHTML += `
    <div class="item-output-container" id="{item.id}">
      <p>${item.item}</p>
      <div>${item.star ? "★" : "☆"}</div>
    </div>
    `;
  });
}

// delete object

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

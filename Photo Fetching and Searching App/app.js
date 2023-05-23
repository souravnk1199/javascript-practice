const imageContainer = document.querySelector(".container");
const searchBtn = document.querySelector(".search-btn");
const clearBtn = document.querySelector(".clear-btn");
const inputText = document.getElementById("search-input");
const noImageDisplay = document.getElementById("no-image");
const showResult = document.querySelector(".show-result");
const images = [];

async function getImages() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data;
}

function createImage(imageUrl, imageId) {
  const urlSplit = imageUrl.split("/");
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = urlSplit[urlSplit.length - 2];
  img.id = `image${imageId}`;
  console.log(imageId + " " + img.alt);
  images.push(img);
  imageContainer.appendChild(img);
}

function start(times, i = 1) {
  if (times === 0) {
    return;
  }
  getImages()
    .then((res) => {
      const url = res.message;
      createImage(url, i);
    })
    .catch((err) => {
      console.log(err);
    });
  start(times - 1, i + 1);
}

function updateImage(arr) {
  imageContainer.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    imageContainer.append(arr[i]);
  }
}

function filterImage() {
  noImageDisplay.classList.add("close-message");
  noImageDisplay.classList.remove("open-message");

  const showInput = inputText.value.trim();

  if (showInput === "") {
    return;
  }

  const input = showInput.toLowerCase().replace(/[^a-z]/g, "");
  const filteredImageArray = images.filter((img) => {
    const dogName = img.alt.toLowerCase().replace(/[^a-z]/g, "");
    return dogName.includes(input);
  });

  if (filteredImageArray.length === 0) {
    noImageDisplay.classList.remove("close-message");
    noImageDisplay.classList.add("open-message");
  }

  let resultMessage = "";

  for (let i = 0; i < filteredImageArray.length; i++) {
    resultMessage += filteredImageArray[i].alt + ", ";
  }

  resultMessage = resultMessage.slice(0, -2);

  showResult.innerHTML = `
    <p>Showing result for ${
      resultMessage === "" ? showInput : resultMessage
    }</p>
  `;

  updateImage(filteredImageArray);
}

function clear() {
  inputText.value = "";
  showResult.innerHTML = "";
  noImageDisplay.classList.add("close-message");
  noImageDisplay.classList.remove("open-message");
  updateImage(images);
}

searchBtn.addEventListener("click", filterImage);
clearBtn.addEventListener("click", clear);
inputText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    filterImage();
  }
});

start(30);

/************  CODING CHALLENGE  ***********/

//1).

let arr2d = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

function flatten2DArray(arr2d) {
  return [].concat(...arr2d).sort((a, b) => a - b);
}

let arr1d = flatten2DArray(arr2d);
console.log(arr2d);
console.log(arr1d);

//2).

let obj1 = [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
];

console.log([...obj1]);

const sortProperty = "a";

function sortObject(prop) {
  console.log(obj1.sort((x, y) => y[prop] - x[prop]));
}

sortObject(sortProperty);

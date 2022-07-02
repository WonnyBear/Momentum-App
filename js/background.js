const dayimages = ["d0.jpg", "d1.jpg", "d2.jpg", "d3.jpg", "d4.jpg", "d5.jpg", "d6.jpg", "d7.jpg"];

const nightimages = ["n0.jpg", "n1.jpg", "n2.jpg", "n3.jpg", "n4.jpg", "n5.jpg", "n6.jpg", "n7.jpg"];

const now = new Date();
const nowhour = now.getHours();

let chosenImage;

if (nowhour<= 19 && nowhour>= 7) {
    chosenImage = dayimages[Math.floor(Math.random() * dayimages.length)];
} else {
    chosenImage = nightimages[Math.floor(Math.random() * nightimages.length)];
}

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
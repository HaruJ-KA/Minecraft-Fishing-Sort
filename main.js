// Functionize Minecraft Fishing Start Code

// HTML Varibles
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let sortFishBtn = document.getElementById("sortFish");
let fishImgEl = document.getElementById("fishImg");
let sortFish = document.getElementById("sortFish");
let autoFish = document.getElementById("timesFished");

let inventory = document.getElementById("fishImg");

//Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
autoFish.addEventListener("change", autoFishFunction);
sortFish.addEventListener("click", sortFishFunction);

function fishBtnClicked() {
  //Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    //Steve Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      inventory.innerHTML += "<img width=15px src=img/Raw-Cod.png>";
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      inventory.innerHTML += "<img width=15px src=img/Raw-Salmon.png>";
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      inventory.innerHTML += "<img width=15px src=img/Tropical-Fish.png>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      inventory.innerHTML += "<img width=15px src=img/Pufferfish.png>";
    }
  } else if (character === "alex") {
    //Alex Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      inventory.innerHTML += "<img width=15px src=img/Raw-Cod.png>";
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      inventory.innerHTML += "<img width=15px src=img/Raw-Salmon.png>";
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      inventory.innerHTML += "<img width=15px src=img/Tropical-Fish.png>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      inventory.innerHTML += "<img width=15px src=img/Pufferfish.png>";
    }
  } else {
    //Villager Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      inventory.innerHTML += "<img width=15px src=img/Raw-Cod.png>";
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      inventory.innerHTML += "<img width=15px src=img/Raw-Salmon.png>";
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      inventory.innerHTML += "<img width=15px src=img/Tropical-Fish.png>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      inventory.innerHTML += "<img width=15px src=img/Pufferfish.png>";
    }
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
  console.log(count);
}

function autoFishFunction() {
  let fishTarget = autoFish.value;
  let count = 0;
  while (count < fishTarget) {
    fishBtnClicked();
    count++;
  }
  console.log(count);
}

function sortFishFunction() {
  inventory.innerHTML = " ";

  countCod = 0;
  countSalmon = 0;
  countTropical = 0;
  countPuffer = 0;

  while (countCod < numCod) {
    inventory.innerHTML += "<img width=15px src=img/Raw-Cod.png>";
    countCod++;
  }

  while (countSalmon < numSalmon) {
    inventory.innerHTML += "<img width=15px src=img/Raw-Salmon.png>";
    countSalmon++;
  }

  while (countTropical < numTropical) {
    inventory.innerHTML += "<img width=15px src=img/Tropical-Fish.png>";
    countTropical++;
  }

  while (countPuffer < numPuffer) {
    inventory.innerHTML += "<img width=15px src=img/Pufferfish.png>";
    countPuffer++;
  }
}

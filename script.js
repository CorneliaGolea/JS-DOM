// Activity 1

// let toggleImgBtn = document.querySelector("#toggleImgBtn");
// let imgToToggle = document.getElementById("imgToToggle");

// let toggle = true;

// toggleImgBtn.addEventListener("click", () => {
//   //   console.log(imgToToggle.style.display);

//   if (toggle) {
//     imgToToggle.style.display = "none";
//     toggle = false;
//   } else {
//     imgToToggle.style.display = "block";
//     toggle = true;
//   }
// });

// --Activity 2

// const imgChange = document.getElementById("imgChange");
// const imgInput = document.getElementById("imgInput");
// const imgSubmit = document.getElementById("imgSubmit");

// imgSubmit.addEventListener(`click`, () => {
//   imgChange.src = imgInput.value;
// });

// <!--Activity 3-->
// let header = document.getElementById("heading");
// header.style.color = "blue"
// let button = document.getElementById("SubmitButton");
// let input = document.getElementById("InputBox");

// button.addEventListener(`click`, () =>{
//   header.style.color = input.value
// });

//  -- KeyCodeGenerator--

// const headerChange = document.getElementById("headerChange");
// let code = document.getElementById("code");
// let header = document.getElementById("heading");
// let key = document.getElementById("key");
// let keycode = document.getElementById("keyCode");
// document.addEventListener("keypress", (event) => {
//   console.log(event);
//   code.textContent = event.code;
//   key.textContent = event.key;
//   keycode.textContent = event.keyCode;
//   header.textContent = "Press any key to get the JavaScript event keycode info";
// });

// --Dice game--

// const newDiceBtn = document.getElementById("newDiceBtn");
// const winMsg = document.getElementById("isCorrectMsg");
// const allboxes = document.querySelectorAll(".box");

// let score = 0;
// Done-event listeners applied to all boxes
// check if its the right mes

// if is the right number to display the win mes
// if wrong display the lose mes

// Reset Function
//Done -randomly generate a number
// randomly generate sum
// Done-do this steps when the new dice roll is clicked

// const resetGame = () => {
//   let randomNb = Math.ceil(Math.random() * 6);
//   allboxes[0].src = "./images/dice" + randomNb + ".png";

//   score += randomNb;
//   winMsg.textContent = score;
//   if (score > 21) {
//     winMsg.textContent = "winner start again ";
//     score = 0;
//   } else if (randomNb == 1) {
//     winMsg.textContent = "you lost start again ";
//     score = 0;
//   }
// };

// resetGame();

// newDiceBtn.addEventListener("click", resetGame);

// --Guess the number-

// let input = document.getElementById("guessInput");
// let button = document.getElementById("submit");
// let message = document.getElementById("message");

// button.addEventListener("click", () => {
//   console.log(typeof parseInt(input.value));
//   if (randomNb == parseInt(input.value)) {
//     message.textContent = "Congratulation you guess right!";
//   } else if (randomNb > parseInt(input.value)) {
//     message.textContent = "Guess higher";
//   } else {
//     message.textContent = " Guess lower";
//   }
// });
// let randomNb = Math.ceil(Math.random() * 100);

// --DrumKit--

const newsoundBtn = document.getElementById("newSoundBtn");
const allboxes = document.querySelectorAll(".nav");

let keyA = document.getElementById("keyA");
let keyS = document.getElementById("keyS");
let keyD = document.getElementById("keyD");
let keyF = document.getElementById("keyF");
let keyG = document.getElementById("keyG");
let keyH = document.getElementById("keyH");
let keyJ = document.getElementById("keyJ");
let keyK = document.getElementById("keyK");
let keyL = document.getElementById("keyL");

let newSoundBtn = document.querySelector("#newSoundBtn");

document.addEventListener("keypress", (sound) => {
  console.log(sound);

  if (sound.code == "KeyA") {
    let audio = new Audio("./images/boom.wav");
    audio.play();
  } else if (sound.code == "KeyS") {
    let audio = new Audio("./images/clap.wav");
    audio.play();
  } else if (sound.code == "KeyD") {
    let audio = new Audio("./images/hihat.wav");
    audio.play();
  } else if (sound.code == "KeyF") {
    let audio = new Audio("./images/kick.wav");
    audio.play();
  } else if (sound.code == "KeyG") {
    let audio = new Audio("./images/openhat.wav");
    audio.play();
  } else if (sound.code == "KeyH") {
    let audio = new Audio("./images/ride.wav");
    audio.play();
  } else if (sound.code == "KeyJ") {
    let audio = new Audio("./images/snare.wav");
    audio.play();
  } else if (sound.code == "KeyK") {
    let audio = new Audio("./images/tink.wav");
    audio.play();
  } else if (sound.code == "KeyL") {
    let audio = new Audio("./images/tom.wav");
    audio.play();
  }

  newSoundBtn.addEventListener("click", () => {
    let audio = new Audio("./images/boom.wav");
    audio.play();
  });

  keyA.addEventListener("click", () => {
    let audio = new Audio("./images/boom.wav");
    audio.play();
  });
  keyS.addEventListener("click", () => {
    let audio = new Audio("./images/clap.wav");
    audio.play();
  });
  keyD.addEventListener("click", () => {
    let audio = new Audio("./images/hihat.wav");
    audio.play();
  });
  keyF.addEventListener("click", () => {
    let audio = new Audio("./images/kick.wav");
    audio.play();
  });
  keyG.addEventListener("click", () => {
    let audio = new Audio("./images/openhat.wav");
    audio.play();
  });
  keyH.addEventListener("click", () => {
    let audio = new Audio("./images/ride.wav");
    audio.play();
  });
  keyJ.addEventListener("click", () => {
    let audio = new Audio("./images/snare.wav");
    audio.play();
  });
  keyK.addEventListener("click", () => {
    let audio = new Audio("./images/tink.wav");
    audio.play();
  });
  keyL.addEventListener("click", () => {
    let audio = new Audio("./images/tom.wav");
    audio.play();
  });
});

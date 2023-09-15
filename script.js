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

// const newSoundBtn = document.getElementById("newSoundBtn");

// let boom.wav = document.getElementById("boom.wav");
// let keyS = document.getElementById("keyS");
// let keyD = document.getElementById("keyD");
// let keyF = document.getElementById("keyF");
// let keyG = document.getElementById("keyG");
// let keyH = document.getElementById("keyH");
// let keyJ = document.getElementById("keyJ");
// let keyK = document.getElementById("keyK");
// let keyL = document.getElementById("keyL");

// let newSoundBtn = document.querySelector("newSoundBtn");

//    document.addEventListener("keypress", (sound)) => {
//     console.log(sound);
//     boom.wav.soundContent=boom.wov.sound;

//    }

//    button.addEventListener("click", () => {

//     if(newSoundBtn =)
//    })

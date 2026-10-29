// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

const characters = [
    "an angry drummer",
    "a guitarist with a massive ego",
    "a bass player who forgot how to play"
];

const places = [
    "a sold-out concert",
    "a sketchy recording studio",
    "a music festival"
];

const events = [
    "launched a drumstick into the crowd",
    "accidentally destroyed $10,000 worth of equipment",
    "started a fight with the sound guy"
];

// Partial return random string function

function returnRandomStoryString() {
 const character = randomValueFromArray(characters);
 const place = randomValueFromArray(places);
 const event = randomValueFromArray(events);

 const storyText = `It was 94 Fahrenheit outside when ${character} showed up at ${place}. Everything was going fine until they ${event}. Bob watched the whole thing happen and couldn't believe his eyes. Somehow, ${character} still managed to finish the show, despite weighing 300 pounds.`;

 return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
}
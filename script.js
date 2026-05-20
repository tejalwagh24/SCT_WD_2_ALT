const cursor =
document.querySelector(".cursor");

const input =
document.getElementById("display");

const result =
document.getElementById("result");

const history =
document.getElementById("history");

const systemMessage =
document.getElementById("system-message");


// CURSOR FOLLOW

document.addEventListener("mousemove", e => {

  cursor.style.left =
  e.clientX + "px";

  cursor.style.top =
  e.clientY + "px";

});


// LIVE COMPUTATION

input.addEventListener("input", () => {

  const expression =
  input.value.trim();

  if(expression === ""){

    result.innerHTML = "—";

    systemMessage.innerHTML =
    "waiting for computation...";

    resetEnvironment();

    return;

  }

  compute(expression);

});


// ENTER SAVES MEMORY

input.addEventListener("keydown", e => {

  if(e.key === "Enter"){

    saveMemory();

  }

});


// COMPUTE

function compute(expression){

  try{

    const output =
    eval(expression);

    result.innerHTML =
    output;

    react(expression,output);

  }

  catch{

    result.innerHTML = "...";

    glitch();

  }

}


// SAVE MEMORY

function saveMemory(){

  if(result.innerHTML === "..." ||
     result.innerHTML === "—"){

    return;

  }

  const item =
  document.createElement("div");

  item.classList.add("history-item");

  item.innerHTML =

  `${input.value} = ${result.innerHTML}`;

  history.prepend(item);

}


// ENTITY REACTION

function react(expression,output){

  const complexity =
  expression.length;


  // CALM STATE

  if(complexity < 8){

    document.body.style.background =
    "#020202";

    result.style.color =
    "white";

    result.style.transform =
    "scale(1)";

    systemMessage.innerHTML =
    "stable computation";

  }


  // ACTIVE STATE

  if(complexity >= 8){

    document.body.style.background =
    "#04110d";

    result.style.color =
    "#8bffcf";

    result.style.transform =
    "scale(1.05)";

    systemMessage.innerHTML =
    "pattern complexity increasing";

  }


  // OVERLOAD STATE

  if(complexity >= 18){

    document.body.style.background =
    "#120404";

    result.style.color =
    "#ff8b8b";

    result.style.transform =
    "scale(1.12)";

    document.body.style.filter =
    "contrast(1.2)";

    systemMessage.innerHTML =
    "WARNING: unstable computation";

  }


  // HUGE NUMBERS

  if(String(output).length > 12){

    systemMessage.innerHTML =
    "THIS VALUE SHOULD NOT EXIST.";

  }


  // SPECIAL REACTIONS

  if(expression.includes("/0")){

    result.innerHTML =
    "VOID";

    systemMessage.innerHTML =
    "division by void detected";

    glitch();

  }

  if(expression.includes("999")){

    systemMessage.innerHTML =
    "OVERFLOW PATTERN DETECTED.";

  }


  // RANDOM ENTITY THOUGHTS

  const thoughts = [

    "THE MACHINE IS THINKING.",

    "COMPUTATION ACCEPTED.",

    "UNKNOWN SEQUENCE DETECTED.",

    "THE SYSTEM REMEMBERS.",

    "THIS FEELS WRONG.",

    "PATTERN STORED.",

    "WHY THIS CALCULATION?"

  ];

  if(complexity > 10){

    const randomThought =

    thoughts[
      Math.floor(
      Math.random() *
      thoughts.length
      )
    ];

    setTimeout(() => {

      systemMessage.innerHTML =
      randomThought;

    },800);

  }

}


// GLITCH EFFECT

function glitch(){

  result.style.transform =
  "translateX(10px)";

  result.style.letterSpacing =
  "10px";

  result.style.opacity =
  "0.4";

  setTimeout(() => {

    result.style.transform =
    "translateX(-10px)";

  },100);

  setTimeout(() => {

    result.style.transform =
    "translateX(0)";

    result.style.letterSpacing =
    "-8px";

    result.style.opacity =
    "1";

  },200);

}


// RESET ENVIRONMENT

function resetEnvironment(){

  document.body.style.background =
  "#020202";

  document.body.style.filter =
  "contrast(1)";

  result.style.color =
  "white";

  result.style.transform =
  "scale(1)";

}
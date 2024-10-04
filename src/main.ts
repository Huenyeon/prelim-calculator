//creating Calculator
type Calculator = {
  isOn: boolean;
};


//my consts
const calculator: Calculator = {
  isOn: true,
};
//screen
const input = document.getElementById("content") as HTMLDivElement;
const result = document.getElementById("result") as HTMLDivElement;

//special buttons
const bye = document.getElementById("byeButton") as HTMLButtonElement;
const hb = document.getElementById("helloButton") as HTMLButtonElement;

// buttons
const ac = document.getElementById("clear") as HTMLButtonElement;

const parent = document.getElementById("operationsAndNum") as HTMLDivElement; //gets parent div
const buttons = parent?.querySelectorAll("div") as NodeListOf<HTMLDivElement>; //gets children div of parent div
const calcuButtons = Array.from(buttons); //turn buttons into array

//additional
const status = document.getElementById("status") as HTMLDivElement;

//additional design for better ux
status.innerHTML = `Power: ${calculator.isOn ? "ON" : "OFF"}`;

function updateStatus() {
  status.innerHTML = `Power: ${calculator.isOn ? "ON" : "OFF"}`;
}

//my root functions
//bye and ac

//ac function
ac.addEventListener("click", () => {
  console.log(calculator.isOn);
  if (calculator.isOn) {
    input.innerHTML = "";
    result.innerHTML = "";
  } else {
    calculator.isOn = true;
  }
  updateStatus();
});

//function for each button
calcuButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!calculator.isOn)return;

    const buttonText = (e.target as HTMLElement)?.innerHTML;
    console.log(buttonText);
    switch (buttonText) {
      case "AC":
        result.innerHTML = "";
        input.innerHTML = "";
        break;

      case "Del":
        if (input.innerHTML) {
          input.innerHTML = input.innerHTML.slice(0, -1);
        }
        break;

      case "=":
        if (input.innerHTML == "") {
          result.innerHTML = "Nothing to solve";
        } else {
          try {
            const newvalue = eval(input.innerHTML)


            if (newvalue == Infinity || isNaN(newvalue)) {
              throw Error;
            }
            result.innerHTML = newvalue;

          } catch {
            result.innerHTML = "";
            result.innerHTML += "MATH ERROR!";
          }
          
        }
        input.style.color = "gray";

      
        break;

      default:
        input.style.color = "black";
        const totalChar = input.innerHTML.length;
        if (totalChar > 30) {
          input.innerHTML += "";
          console.log("greater than sixty chars");
        } else {
          input.innerHTML += buttonText;
        }
    }
  });
});

//hello function
hb?.addEventListener("click", () => {
  if (!calculator.isOn) return;
  const hellos = [
    "Hello",
    "Hola",
    "안녕하세요",
    "こんにちは",
    "你好",
    "Καλημέρα",
    "नमस्ते।",
    "สวัสดี",
    "Bonjour",
    "Kamusta",
  ];
  const randomNum = Math.floor(Math.random() * hellos.length);
  const randomizedHello = hellos[randomNum];
  console.log(randomizedHello);
  result.innerHTML = randomizedHello;

  input.innerHTML = "";
  console.log("hello");
});

//bye function
bye?.addEventListener("click", () => {
  if (!calculator.isOn) return;
  calculator.isOn = false;
  updateStatus();
  result.innerHTML = "";
  input.innerHTML = "";
  const byeText = document.createTextNode("Goodbye~");
  const div = document.createElement("div");
  div.appendChild(byeText);

  div.setAttribute("class", "goodbyeText");

  result.appendChild(div);

  setTimeout(() => {
    result.removeChild(div);
  }, 3000);
  calcuButtons.forEach((button) => {
    button.onclick = null; 
  });

  hb.onclick = null;

});


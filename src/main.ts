// import '../index.html'

//import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


//disregard for now cuz this is just an additional feature





type Calculator ={
  isOn: boolean
}

const calculator: Calculator ={
  isOn: true
}
const input = document.getElementById("content") as HTMLDivElement
const bye = document.getElementById("byeButton")
const result = document.getElementById("result") as HTMLDivElement
const parent = document.getElementById("operationsAndNum");
const buttons = parent?.querySelectorAll("div") as NodeListOf<HTMLDivElement>
const hb = document.getElementById("helloButton") as HTMLButtonElement
const ac = document.getElementById("clear") as HTMLButtonElement
const calcuButtons = Array.from(buttons)
const status = document.getElementById("status") as HTMLDivElement

status.innerHTML = `Power: ${calculator.isOn ? "ON" : "OFF"}`;

function updateStatus() {
  status.innerHTML = `Power: ${calculator.isOn ? "ON" : "OFF"}`;
}


//my root functions
//bye and ac


//ac function
ac.addEventListener("click", () =>{
  console.log(calculator.isOn)
  if (calculator.isOn) {
    input.innerHTML = '';
    result.innerHTML = '';
  } else {
    calculator.isOn = true
  }
  updateStatus()

})

calcuButtons.forEach((button) => {
  button.addEventListener("click", (e) => { 
    if (!calculator.isOn) return ;

    const buttonText = (e.target as HTMLElement)?.innerHTML; 
    console.log(buttonText)
    switch(buttonText){
      case 'AC':
        result.innerHTML ="";
        input.innerHTML = "";
        break

      case 'Del':
        if(input.innerHTML){
          input.innerHTML = input.innerHTML.slice(0, -1);
        }
        break

      case '=':
        if (input.innerHTML == ""){
          result.innerHTML = "Nothing to solve"
        } else{
          try{ 
            result.innerHTML = eval(input.innerHTML)
  
  
          } catch {
            result.innerHTML = ""
            result.innerHTML += ("MATH ERROR!")}

        }
        input.style.color = "gray"
        
        
        break

      default:
        input.style.color = "black"
        const totalChar = input.innerHTML.length
        if (totalChar > 30){
          input.innerHTML+='';
          console.log("greater than sixty chars")

        }
        else{
          input.innerHTML += buttonText;
          console.log('printed')
        }
    }
  })
});

//hello function
hb?.addEventListener("click", ()=>{
  if (!calculator.isOn) return;
  const hellos = ["Hello", "Hola", "안녕하세요", "こんにちは", "你好", "Καλημέρα", "नमस्ते।", "สวัสดี", "Bonjour", "Kamusta"]
  const randomNum = Math.floor(Math.random() * hellos.length);
  const randomizedHello = hellos[randomNum]
  console.log(randomizedHello)
  result.innerHTML = randomizedHello
  let inp = (input as HTMLElement); 
  inp.innerHTML = '';
  console.log("hello")
});

//bye function
bye?.addEventListener("click", ()=>{
  calculator.isOn = false
  updateStatus()
  result.innerHTML="";
  input.innerHTML="";
  const byeText = document.createTextNode("Goodbye~")
  const div = document.createElement("div") 
  div.appendChild(byeText) 

  div.setAttribute("class", "goodbyeText")
  
  result.appendChild(div)

  setTimeout(() => {
    result.removeChild(div)
  }, 3000)
  calcuButtons.forEach((button) => {
    button.onclick = null; // Remove all event listeners
  });

  hb.onclick = null; 
})




document.getElementById("one")?.addEventListener("click", () =>{
  console.log("HALP HUHU")
})



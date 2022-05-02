const screen = document.querySelector("#calc_screen");
const keys = document.querySelectorAll(".key");
const Dots = document.querySelectorAll(".radio-buttons input");
let value = "";
//  themes
const calcBG = document.querySelector(".calculator-bg");
const keyBG = document.querySelector(".cal-keypad");
const del = document.querySelectorAll("#Delete");
const reset = document.querySelectorAll("#reset");
const result = document.querySelectorAll("#result");

// theme controls

Dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    let theme = e.target.value;
    if (theme == "theme1") {
      document.body.classList.remove("theme-2");
      document.body.classList.remove("theme-3");
      // calcBG.style.backgroundColor = "hsl(222, 26%, 31%)";
      // screen.style.backgroundColor = "hsl(224, 36%, 15%)";
      // keyBG.style.backgroundColor = "hsl(223, 31%, 20%)";
      // calcBG.style.color = " hsl(221, 14%, 31%)";
      // del.style.backgroundColor = "hsl(225, 21%, 49%)";
      // del.style.color = "red";
    } else if (theme == "theme2") {
      document.body.classList.add("theme-2");
      document.body.classList.remove("theme-1");
      document.body.classList.remove("theme-3");
      // calcBG.style.backgroundColor = "hsl(0, 0%, 90%)";
      // screen.style.backgroundColor = "hsl(0, 0%, 93%)";
      // keyBG.style.backgroundColor = "hsl(0, 5%, 81%)";
      // calcBG.style.color = "hsl(222, 26%, 31%)";
      // del.style.backgroundColor = "hsl(185, 42%, 37%)";
    } else if (theme == "theme3") {
      document.body.classList.add("theme-3");
      document.body.classList.remove("theme-1");
      document.body.classList.remove("theme-2");
      // calcBG.style.backgroundColor = "hsl(268, 75%, 9%)";
      // screen.style.backgroundColor = "hsl(268, 71%, 12%)";
      // keyBG.style.backgroundColor = "hsl(268, 71%, 12%)";
      // calcBG.style.color = "hsl(222, 26%, 31%)";
    }
  });
});

// calculations

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    value = e.target.innerText;
    if (value == "RESET") {
      screen.value = "";
    } else if (value == "DEL") {
      screen.value = screen.value.slice(0, -1);
    } else if (value == "=") {
      screen.value = eval(screen.value);
    } else if (value == "x") {
      value = "*";
      displaysign(value);
    } else if (value == "%" || value == "/" || value == "+" || value == "-") {
      displaysign(value);
    } else {
      screen.value += value;
    }
  });
});

function displaysign(num) {
  console.log(screen.value.length);
  let index1 = screen.value.length - 1;
  console.log(index1);
  let sign1 = screen.value.charAt(index1);
  console.log(sign1);

  if (
    sign1 == "%" ||
    sign1 == "/" ||
    sign1 == "*" ||
    sign1 == "+" ||
    sign1 == "-"
  ) {
    screen.value = screen.value.slice(0, -1);
  }
  screen.value += num;
}

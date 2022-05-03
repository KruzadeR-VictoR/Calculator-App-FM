const screen = document.querySelector("#calc_screen");
const keys = document.querySelectorAll(".key");
const Dots = document.querySelectorAll(".radio-buttons input");
let value = "";
const buttons = document.querySelectorAll(".button");
let arr = [...Dots];
//  themes
const calcBG = document.querySelector(".calculator-bg");
const keyBG = document.querySelector(".cal-keypad");
const del = document.querySelectorAll("#Delete");
const reset = document.querySelectorAll("#reset");
const result = document.querySelectorAll("#result");

// theme controls
arr[0].style.opacity = "1";
arr.forEach((dot) => {
  dot.addEventListener("click", () => {
    dot.style.opacity = "1";

    arr.filter((item) => {
      return item != dot;
    }).forEach((item) => {
      item.style.opacity = "0";
    });
  });
});

Dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    let theme = e.target.value;
    if (theme == "theme1") {
      document.body.classList.remove("theme-2");
      document.body.classList.remove("theme-3");
    } else if (theme == "theme2") {
      document.body.classList.add("theme-2");
      document.body.classList.remove("theme-1");
      document.body.classList.remove("theme-3");
    } else if (theme == "theme3") {
      document.body.classList.add("theme-3");
      document.body.classList.remove("theme-1");
      document.body.classList.remove("theme-2");
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

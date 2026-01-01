const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleInput(button.innerText);
  });
});

function handleInput(value) {
  if (value === "C") {
    display.value = "";
  } else if (value === "⌫") {
    display.value = display.value.slice(0, -1);
  } else if (value === "=") {
    calculate();
  } else {
    display.value += value;
  }
}

function calculate() {
  try {
    let expression = display.value
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-");
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}

/* 🎹 Keyboard Support */
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    display.value += key;
  } else if (key == "Enter") {
    calculate();
  } else if (key =="Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key == "Escape") {
    display.value = "";
  }
});

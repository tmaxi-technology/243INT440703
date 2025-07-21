const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            try {
                display.value = eval(display.value.replace("×", "*").replace("÷", "/").replace("−", "-"));
            } catch {
                display.value = "Error";
            }
        } else if (value === "C") {
            display.value = "0";
        } else if (value === "⌫") {
            display.value = display.value.slice(0, -1) || "0";
        } else {
            if (display.value === "0") {
                display.value = value;
            } else {
                display.value += value;
            }
        }
    });
});

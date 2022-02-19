let operator = "";
let num1 = "";
let num2 = "";
let result;
let button_container = document.querySelector(".button_container");
let memory = document.querySelector('.memory p');
let main_area = document.querySelector('.input_container input');


button_container.addEventListener('click', function(e) {

    // Number clicks
    if (e.target.classList.contains("numbers")) {
        if (operator.length === 0) {
            num1 += e.target.innerHTML;
            memory.innerHTML = num1;
            main_area.value = num1;

        } else {
            num2 += e.target.innerHTML;
            memory.innerHTML = `${num1} ${operator} ${num2}`; // Changing to num1 operator num2
            main_area.value = operation(num1, num2, operator);

        }

    }

    // Adding operators and brackets to memory 
    if ((e.target.classList.contains("operators") || (e.target.classList.contains("modulus"))) && !e.target.classList.contains("equal")) {

        if (operator.length !== 0) {
            result = operation(num1, num2, operator);
            num1 = result;
            num2 = "";
            operator = "";
        }
        operator = e.target.innerHTML;
        if (e.target.innerHTML === "x" || e.target.innerHTML === "÷" || e.target.innerHTML === "%") {
            memory.innerHTML = `(${memory.innerHTML})`; // Changing to (num1 operator num2)
        }
        memory.innerHTML += ` ${operator}`;
        main_area.value = "";
    }

    // Operations for AC, =, ±
    if (e.target.classList.contains("ac") || e.target.classList.contains("plus_minus") || e.target.classList.contains("equal")) {
        operator = "";

        switch (e.target.innerHTML) {
            case "AC":
                num1 = "";
                num2 = "";
                memory.innerHTML = "";
                main_area.value = "";
                break;
            case "=":
                num1 = main_area.value;
                num2 = "";
                memory.innerHTML = `${num1}`;
                main_area.value = `${num1}`;
                num2 = "";
                break;
            case "±":
                num1 = -Number(main_area.value);
                num2 = "";
                memory.innerHTML = `${num1}`;
                main_area.value = `${num1}`;
                num2 = "";
                break;
            default:
                break;
        }
    }

});

// Operations for +, -, *, /, %
function operation(number1, number2, operator) {
    number1 = Number(number1);
    number2 = Number(number2);

    switch (operator) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "x":
            return number1 * number2;
        case "÷":
            return number1 / number2;
        case "%":
            return number1 % number2;
        default:
            return;
    }
}
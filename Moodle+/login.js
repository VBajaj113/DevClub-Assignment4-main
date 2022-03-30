console.log("Moodle+ successfully loaded!");
const login_element = document.getElementById("login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;
let arr = login_text.split("\n");

let question = arr[3].split(" "); // Use split and array operations on the login_text string to extract the question

let num1 = Number(question[question.length - 5]);
let num2 = Number(question[question.length - 3]);
let answer = ""; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

if (question.includes("add")) {
    answer = String(num1 + num2);
}
else if (question.includes("subtract")) {
    answer = String(num1 - num2);
}
else if (question.includes("first")) {
    answer = String(num1);
}
else {
    answer = String(num2);
}

const captcha_input_element = document.getElementById("valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;

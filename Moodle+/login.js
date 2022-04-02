console.log("Moodle+ successfully loaded!");
const login_element = document.getElementById("login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;
let arr = login_text.split("\n");

let question = arr[3].split(" "); // Use split and array operations on the login_text string to extract the question

let num1 = parseInt(question[question.length - 5]);
let num2 = parseInt(question[question.length - 3]);
let answer = 0; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

if (question.includes("add")) {
    answer = num1 + num2;
}
else if (question.includes("subtract")) {
    answer = num1 - num2;
}
else if (question.includes("first")) {
    answer = num1;
}
else {
    answer = num2;
}

document.getElementById("valuepkg3").value = answer;


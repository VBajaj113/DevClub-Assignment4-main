console.log("Loaded script.js");

let summary = new XMLHttpRequest;
summary.open("GET", "https://api.covid19api.com/summary");
summary.send();

let parsed_summary = JSON.parse(summary.responseText);

let global_new = parsed_summary.Global.NewConfirmed;
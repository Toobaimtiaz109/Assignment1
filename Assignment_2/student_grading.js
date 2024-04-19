"use strict";
let marks = 72;
if (marks >= 90) {
    console.log("A+");
}
else if (marks <= 90 && marks >= 80) {
    console.log("A");
}
else if (marks <= 80 && marks >= 70) {
    console.log("B");
}
else if (marks <= 70 && marks >= 60) {
    console.log("C");
}
else if (marks <= 60 && marks >= 50)
    console.log("D");
else {
    console.log("fail");
}

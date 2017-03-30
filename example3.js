var grade = "C";
var result;

if (grade == "A") {
    result = "Great job!";
} else if (grade == "B") {
    result = "Pretty good!";
} else if (grade == "C") {
    result = "Could be better!";
} else if (grade == "D") {
    result = "Pretty bad...";
} else if (grade == "F") {
    result = "Better study more!";
} else {
    result = "Invalid grade";
}

document.write(result);
var grade = 95;
var result;

switch (grade) {
    case "A":
        result = "Great job";
        break;
    case "B":
        result = "Pretty good!";
        break;
    case "C":
        result = "Could be better!";
        break;
    case "D":
        result = "Pretty bad...";
        break;
    case "F":
        result = "Better study more!";
        break;
    default:
        result = "Invalid grade";
}

document.write(result);
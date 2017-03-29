var myNumber = 27;
var x = 0;

if (myNumber > 5) {
    x += 5;
} else if (myNumber > 10) {
    x += 10;
} else if (myNumber > 20) {
    x += 20;
} else {
    x += 30;
}

document.write("The final value of x is " + x);
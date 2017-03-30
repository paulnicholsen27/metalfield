var x = 10;

if (x < 20) {
    x *= 5;
} else if (x == 20) {
    x += 3;
} else {
    x -= 10
}

document.write(x);   // what will the value of x be here?
document.write("<br/>");

if (x < 30) {
    x += 5; 
} else if (x == 30) {
    x -= 10;
} else {
    x = 42;
}

document.write(x);   // How about here?

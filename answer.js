var a;
var b;
var c;

document.write("A=" + a + ", B=" + b + ", C=" + c + "<br/>");

if (a >= b) {
    if (a > c) {
        document.write("A is the biggest number");
    } else {
        document.write("C is the biggest number");
    }
} else if (b >= c) {
    document.write("B is the biggest number");
} else {
    document.write("C is the biggest number");
}
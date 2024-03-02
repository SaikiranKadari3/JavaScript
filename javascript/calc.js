function appendToDisplay(a) {
  disp = document.getElementById("display");
  disp.value += a;
}
function equal() {
  disp = document.getElementById("display");
  disp.value = eval(disp.value);
}
function clearDisplay() {
  disp = document.getElementById("display");
  disp.value = "";
}
function del() {
  disp = document.getElementById("display");
  output = disp.value;
  disp.value = output.slice(0, -1);
}

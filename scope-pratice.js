// var varFun = "a";
// let letFun = "b";
// const constFun = "c";


// function smt() {
// var inFunction = "jestem";
// let varFun = 0;
// console.log(varFun);
// }
// smt();

const urzadzenie = "EKG"; // Zakres globalny

function wykonajBadanie() {
  const wynik = "Rytm zatokowy"; // Zakres lokalny funkcji
  console.log(`Badanie urządzeniem: ${urzadzenie}`); // Czy to zadziała?
  console.log(`Wynik: ${wynik}`); // Czy to zadziała?
}

wykonajBadanie();

console.log(wynik); // A co się stanie tutaj?
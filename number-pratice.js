const praticeNumber = 421.576;
decimalExaple = 12.22;
integreExample = 222;
// praticeNumber.toFixed();
// praticeNumber.toFixed(1);

// 123.toFixed(1); - błąd, nie ma liczby po przecinku poprawnie ---> 123.1.toFixed(1);
// lub 123..toFixed(1);

// praticeNumber.toString();
// praticeNumber.toString(2);

// 421.toString(16); - źle
// 421..toString(16); - dobrze

// praticeNumber.toExponential(); - zmiana na notacje naukową

// integer numbers examples - liczby całkowite, decimal numbers example - liczby dziesiętne

// Number.isInteger(decimalExaple);
// Number.isInteger(12.22)
// Number.isInteger(integreExample);
// Number.isInteger(222)

// sprawdzanmie czyu dana liczba jest skończona. (prawidłowa)
// Number.isFinite(2);
// Number.isFinite(NaN);
// Number.isFinite(Infinity);
// Number.isFinite(3e4000); // false, ponieważ, maksymalna liczba to 1e308, najmniejsza licza -1e308
// Number.isFinite(3e300); // true

// typeof NaN;

// Działania arytrmetyczne - przykłady

// Reszta z dzielenia - modulo

// console.log(20 % 2); 0
// console.log(20 % 3); 2
// console.log(20 % 21); 20

// Potęgowanie
// 2 ** 8
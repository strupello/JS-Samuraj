// OBIEKTY - WPROWADZENIE

// -- Nieuporządkowana lista właściwości złożonych z nazwy (klucza) i wartości (para key - value). Nazwa jest łańcuchem a wartość może być dowolnym typem. Jeśli wartością jest funkcja mówimy wtedy, że dana własciwość jest metodą.


// TWORZENIE OBIEKTU

//operator new i konstruktor obiektu (funkcja)

// 1 - tworzymy obiekt
const cat = new Object();

// 2 - przypisujemy mu właściwości
cat.name = "Gacek";
cat['age'] = 2;
// cat.age = 2; // dokładnie to sam
cat['eye color'] = 'red';
cat.meow = function() {
 console.log("miau miau");
}


//literał obiektu {} - efekt jest taki sam co przy konstruktorze

//  1 - tworzymy obiekt i od razu przypisujemy własciwości
const hamster = {};


const dog = {

 name: ['Fafik', "Azor"],

 age: 9,

 'eye color': 'black',

 barking: function() {
  console.log("hau hau");
 },

 // ES6
 squeaking() {
  console.log('aaaa uuu eee');
 },
}

// 2 - możemy dynamicznie dodwać (zmieniać) własciwości
dog.castrated = false;
dog.childrens = ['bobik', 'jagódka', 'muszka']
dog.castrated = true;

// DOSTĘP DO WŁAŚCIWOŚCI I METOD

// console.log(dog.name);
// dog.barking()
// dog.squeaking()

// USUWANIE

delete dog.childrens;

// PRZYKŁAD1
//Odwołanie do obiektu w innej funkcji

let value = 1;

const result = {
 value: 1,
}

function plus() {
 value++;
 result.value++;
 // return "dodane"
}

// PRZYKŁAD2
//Odwołanie do obiektu w metodzie (this)

const counter = {
 score: 0,

 increment: function() {
  this.score++;
  console.log(this.score);
 }
}

counter.increment()

// TEMPLATE STRING - LITERAŁ SZABLONU

//grawis, lewy apostrof
`tekst`;
"tekst";
'tekst';

//Użycie pojedyńczych i podwójnych cudzysłowów w środku jest możliwe
`"I'm only human" - Alexander The Great`;
// "\"I'm only human\" - Alexander The Great";
// '"I\'m only human" - Alexander The Great';

// wielowierszowe stringi
// ES5
const text1 = "tekst\ntekst\ntekst";
// ES6
const text2 = `tekst
tekst
tekst`;


// ${} - osadzanie kodu JS wewnatrz stringa

const yourName = "Jagienka";

//Możliwość wstrzykiwania kodu wewnatrz stringa
const greeting = `Cześć ${yourName}!`;

// Podobny efekt możemy uzyskać za pomocą konkatenacji
const greeting2 = "Cześć " + yourName + "!";


//Możliwość użycia wyrażenia (wyrażenie jest wykonywane i zwracany jest wynik)

const user1 = 29;
const user2 = 45;
const user3 = 34;

// console.log(`Średni wiek użytkowników to: ${(user1 + user2 + user3) / 3}, a łączny wiek to ${user1 + user2 + user3} lat`);


// Pobranie i wyświetlenie aktualnej daty

// console.log(`Obecnie zegarek wskazuje ${new Date().toLocaleString()}`);

// Obliczenie

const price = 76.0;
const tax = 23;

// console.log(`Do zapłaty: ${price + (price * tax) / 100} złotych`)

// console.log(`Do zapłaty: ${(price + (price * tax) / 100).toFixed(2)} złotych`)


// Często wykorzystujemy w wyrażeniu operator trójargumentowy

// console.log(`Dzisiejsza cena netto jest ${price >= 80 ? "wysoka" : "niska"}.`)


// Inkrementacaj/dekrementacja

let itemName = "lcd"
let items = 20;
console.log(`Własnie sprzedałem jeden ${itemName}. Na stanie jest jeszcze ${--items}`)

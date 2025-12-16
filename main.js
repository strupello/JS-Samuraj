
/* console.log(3 * 9);

2 + 2;
let result = 2 + 2;


let prymitiveType1 = 20;
let prymitiveType2 = prymitiveType1;
prymitiveType1 = 40;
console.log(prymitiveType2);


let referenceValue1 = [1, 2, 3];
let referenceValue2 = referenceValue1;
referenceValue1[3] = 4;
console.log(referenceValue2);


let firstLetterUserName;
firstLetterUserName = 'JP';


let nickName = "Bzyku";
let showFullName = function (){
    console.log(nickName + firstLetterUserName);
} */

/* let name, age, address;
let position = [200, 100], score = null, time = 20.2, ipAddress;
const firstUser = "Ania", secondUser = "Tomasz"; */

/* let example1 = 333;
example1 = example1 + 333;
console.log(example1);

const example2 = 333;
console.log(example2);

let example3 = example2;
example3 = example3 * 3;
console.log(example3); */

/* let arrayExample1 = [1];
arrayExample1 = [1, 2];

const arrayExample2 = [1];
// arrayExample2 = [1];
arrayExample2[1] = 2, 3;

let letVariable = 1;
console.log(letVariable);
 */

/* let result;
result = 1;
result++; */

// let position = 2;
// inkrementacja
// position++;
// dekrementacja
// position--;
// preinkrementacja
// ++position;
// predekrementacja
// --position;
// przypisanie

// position += 10;
// position -= 16.5;
// position *= 4;
// position /= 2;

/* console.log(position);

let newPosition = 5;
newPosition *= position;
console.log(newPosition); */

// Modulo reszta z dzielenia
// 10 % 9;
// 20 % 4;

// Potęgowanie
// 2 ** 5;

/* Operator Logiczny */
// Operator porównania (większy/mniejszy)

// 20 > 40;
// "teskst".length > 3;
// 20 <= 20;

//operator porówania (czy są równe)

// "tekst" == "tekst";
// "tekst" == "tekst1";

// "2" == 2;  dokonuje konwersji typów
// "2" === 2;  bez konwersji typów, a więc porównuje też typy

// operator różne od
// 100 != 101;
// 100 != 100;
// 100 !== 100;

// logiczne zaprzeczenie (negacja) zamienia na typ boolean i odwraca
// !("coś");
// !!(2 - 2); // podówjna negacja
// !!200;

// Suma logiczna  (logiczne "lub")
// true || false;
// false || true;
// true || true;
// false || false;
// (true || false);
// (null || 200);

// Iloczyn logcziny (logiczne "i")

// true && false;
// 200 && 0;
// "1" && "2";
// "1" && "";
// (20 > 10 && 10 < 20);

// KOLEJNOŚĆ OPERATORÓW

// 2 + 3 * 5  = 17
//(2 + 3) * 5 = 25;
// "2" + 3 * 5 = 215;

// Literały:
/* "jakiś tekst"; 1222; true; null; undefined; - Każdy typ prosty (poza Symbolem) można stworzyć za pomocą literału. Literał to zestaw znaków które zostaną rozpoznane przez interpreter. */
// literał łańcucha, literał liczby
// na przyszłość: literał obiekut '{}', literał tablic '[]';

// Typy proste nie śa obiektami, to jednak możemy na nich (number, string, boolean) wykonywać metody i właściwości, które to są domeną obiektów

// właściwość - informacja o stanie (wartości np:długość)
// metoda - działanai (na wartości), które najcześciej zwraca nową wartość w oparciu o działanie na wartości.

// Własciowść

// let nickName = "Bzyku";
// nickName.length;
// nickName[2];

// Metody ( nie dokonują zmian, tylko zwracają). Metody muszą być wywowałane (()), bez wywołania zobaczymy tylko czym są a nie ich działanie.
// metoda(argument)
// const firstText = "przykładowy tekst dla meteody";
// let score = 12.56;

// firstText.toUpperCase;
// firstText.toUpperCase();
// score.toFixed();
// firstText.indexOf('p');


// Dlatego te nowe wartości gdzieś powinniśmy przypisać

// const newTxt = firstText.toUpperCase();
// const fixedNumber = score.toFixed();

// Typy proste nie mają właściwości i metod. Jak to się więc dzieje, że możemy pobrać ich właściwości czy wykonać na nich metody (jak na obiektach)?
// 1 - tworzymy zmienną i wartość string
// const name = "Janek";
// name.length; //właściwość której nie ma w typie prostym, i teraz zaczyna pracować silnik, który robi sobie mniej więcej coś takiego jak ponizej by pobrać wartość tej właściwości
// 2- SILNIK TWORZY OBIEKT NA TYM ETAPIE (nazwa zmiennejj tylko dla przykładu)
//Tworzy obiekt String np.
// const nameTemporary = new String(name);
//nameTemporary.length
// 3 - Zwraca 5 (bo taką ma długość "Janek") i usuwa obiekt String (w przykłądzie znajduje się w nameTemporary)

/* Reasumując: Jeżeli wywołujemy metody, czy chcemy dostać sie do zawartości własciwości, to w tle tworzony jest tymaczowy obiekt danego typu, który "opakowuje" nasz typ prosty na czas dotarcia do właściwości czy wywowłania metody.*/

// Możemy też tworzyć takie obiekty sami (abstachując już od opakowania typów prostych). Ale bardzo rzadko ma to sens, ponieważ takie obiekty mają częstoi inne zachowania niż typy proste np. każdy obiekt zwraca np. true, a operator typeof zwróci "object", a nie rodzaj typu prostego. problemy pojawią się także przy operatorze porównania "==="). Tworzenie obektu (String, Number, Boolean) jest trudniejsze niż prosty literał.
// const userName = new String("Jagienka");
// const userID = new Number(2);
// const famale = new Boolean(true);

//Na przyszłość: String, Number i Boolean to przykłady konstrukturów czyli funkcji, które są używane do tworzenie instancji (niezależnej kopii) obiektów. Operator "new" tworzy nowy obiekt. Na tym etapie nie masz jeszcze szans tego zrozumieć, to zaawasnowany koncept programowania w JS, ale kiedy dojdziemy do programowania obiektowego będę to dobrze wyjaśniał i zrozumiesz ten mechanizm.


// Operator truargmentowy :
// const userName = "irek";

// console.log( userName === "irek" ? 'Witaj Blantonogi i palcokręcocy' : 'SPierdalaj podriabiańcu');

// const swordName = ["Rozpierdalator", "Wdowi Koszmar", "Supuścizna Zła", "Krwawy Płacz", "Pochłaniacz Dusz", "Spaczony Metal", "Złoty Naganiacz", "Krwawy Podżygacz", "Baroński Osąd"]

// swordName.push("Gdowi wrzask"); // dodajemy element na końcu tablicy
// swordName.push("Ostateczne Rozwiązanie");

// swordName.unshift("Pocałunek Narodzin"); // dodajemy element na początku tablicy
// swordName.unshift("Pierwszy Argument");

// // swordName.pop(); // usuwamy ostatni element - stale, z lenght również ! - nie ukrywamy.
// // swordName.shift(); // usuwamy pierwszy element
// // delete swordName[2]; // usuwa dany element - zmienia na pusty-udenfined
// console.log(swordName);

// const removedLastOneOfTheSwords = swordName.pop(); // zwraca ostatni element do zmiennej - wyjęty z tablicy
// const removedFirstOneOfTheSwords = swordName.shift(); // zwraca pierwszy element do zmiennej - wyjęty z tablicy

// console.log(removedLastOneOfTheSwords);
// console.log(removedFirstOneOfTheSwords);

// const lenghtArrayAfterPush = swordName.push ("Kozik Mamuta"); // dodaje element na końcu oraz odsyła informacje o dodanym obiekcie w tablicy
// const lenghtArrayAfterUnshift = swordName.push ("Mityczna Rękojęść"); // dodaje element napoczątku oraz odsyła informacje o dodanym obiekcie w tablicy

// console.log(lenghtArrayAfterPush);
// console.log(lenghtArrayAfterUnshift);
// console.log(swordName);

// Metoda Concat

// łącznie tablic z innymi:
// - operator concat

// const teamPlayersRed = ["RedAlbert", "RedFrank", "Red Louis", "Red Elvis", "RedJohn"];
// const teamPlayersBlue = ["BlueAlbert", "BlueFrank", "BlueLouis", "BlueElvis", "BlueJohn"];

// const bothTeams = teamPlayersBlue.concat(teamPlayersRed);
// const bothTeamsAndNewPlayers = bothTeams.concat("RedJanusz", "BlueJanusz");

// console.log(teamPlayersBlue);
// console.log(teamPlayersRed);
// console.log(bothTeams);
// console.log(bothTeamsAndNewPlayers);
// console.log(teamPlayersBlue,bothTeams);\

// operator spread

// const bothTeamsPlayers = [...teamPlayersBlue, ...teamPlayersRed];
// const bothTeamsPlayersAndNewPlayer = [...teamPlayersBlue, ...teamPlayersRed,"RedKazik"];
// console.log(bothTeamsPlayers);
// console.log(bothTeamsPlayersAndNewPlayer);


//Metoda SLICE - nie zmienia metody na której pracujemy

// //const numbersSlice = ["first", "second", "third", "fourth", "fifth", "sixth", "seventy","eighth","ninth", "tenth"];
// const newNumberSlice = numbersSlice.slice(2); // od tego indexu do końca
// const newNumberSlice = numbersSlice.slice(7, 10); // od elementu 7 do 10, index 0 - to pierwszy element
// const newNumberSlice = numbersSlice.slice(7, numbersSlice.length); // od danego elementu do ostatniego
// const newNumberSlice = numbersSlice.slice(7, numbersSlice.length);

// const newNumberSlice = numbersSlice.slice(-2); // będzie działać na nim od końca

// console.log(numbersSlice);
// console.log(newNumberSlice);

// MEtoda splice - zmienia metode


// const typeOfPlayers = ["NOOB", "CASUAL", "PRO", "HARDCORE", "TRYHARD", "SMURF"];
// console.log(typeOfPlayers);


//const newTypeOfPlayers = typeOfPlayers.splice(1,3 ); // zostawia w tym wypadku od indeksu 2 do 3.
// const newTypeOfPlayers = typeOfPlayers.splice(3); // zostawia wszystko od indeksu 4
// const newTypeOfPlayers = typeOfPlayers.splice(0); // zeruje nam tablice - ale zwraca zawartość
// const newTypeOfPlayers = typeOfPlayers.length; // usuwa cała tablice i nie zwraca nic
// const newTypeOfPlayers = typeOfPlayers.splice(3, 1, 'NIGHT PLAYERS'); // podmnienia dany argumenty na inny, w tym wypadku index 4 na night players z hardcore
// const newTypeOfPlayers = typeOfPlayers.splice(0, 2, "NIGHT PLAYERS", "DAY PLAYERS"); // tutaj podmienilismy jeden argument na dwa z pozycji 1 - czyli 0.
// const newTypeOfPlayers = typeOfPlayers.splice(0, 1, "NIGHT PLAYERS", "DAY PLAYERS"); // tutaj podmienilismy jeden argument na dwa z pozycji 1 - czyli 0.
// const newTypeOfPlayers = typeOfPlayers.splice(2, 0, "NIGHT PLAYERS", "DAY PLAYERS"); // tutaj dodalismy dwa argumenty od indeksu 3.
// console.log(newTypeOfPlayers);
// console.log(typeOfPlayers);


// METODA SORT

// INDEXOF
// const typeOfPlayers = ["NOOB", "CASUAL", "PRO", "HARDCORE", "TRYHARD", "SMURF"];
//  typeOfPlayers.sort(); // - zmienia tablice alfabetycznie, również jako obiekt
// typeOfPlayers.indexOf('CASUAL') // - pokazuję nam czy jest dany index w tablicy i na której pozycji.
// typeOfPlayers.indexOf('CASUA') // - pokazuję nam czy jest dany index w tablicy i na której pozycji - w tym wypadku pokaze nam -1 - czyli brak - musi być 1:1.
// console.log(typeOfPlayers);

// INCLUDES
// console.log(typeOfPlayers.includes("CASUAL")); // bardzo podobna metoda do indexof, ale includes zwraca nam po prostu informacje true/false czy jest w danej tablicy a indexof pozycje jak jest.

// METODA JOIN
// typeOfPlayers.join() // tworzy nam stringa z obiektów, dodajac przecinki miedzy indeksami
// typeOfPlayers.join("  i tak to są jebane nerdy; ") // tworzymy stringa z obiektów i dodajemy tekst między. - oddzielający tekst - bez ingerencji w ostatni obiekt.

// typeOfPlayers.join("  i tak to są jebane nerdy; \n ") - to samo co wyżej, ale uporządkowane od nowej linijki.

// typeOfPlayers.reverse(); - odwracamy kolejność

// METODA SPLIT KTÓRA TWORZY NAM TABLIE Z STRINGÓW

// const letters = "Marek Adam Justyna Teresa".split('');

// "Marek Adam Justyna Teresa".split(' ');
// "Gdańsk,Elbląg,Gdynia,Sopot,Władysławowo,Hel".split(',')
//  ;
// "Gdańsk, Elbląg, Gdynia, Sopot, Władysławowo, Hel".split(',', 3);
// "Gdańsk, Elbląg, Gdynia, Sopot, Władysławowo, Hel".split(', ', 3);

// const datesOfBirth = "1967,1982, 1990, 1998, 1976"
// datesOfBirth.split(',')
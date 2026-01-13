const userName = "Irek;"
const age = 34;
const isAdmin = false;

if ( age >= 18 ) {
    console.log("No ten prze chuj jest pełnoletni");
} else {
    console.log("A ta małoletnia jebana pała.");
}

const scores = [12, 55, 8, 101, 33];

if ( scores[0] >= scores[scores.length - 1] ) {
    console.log("pierwszy wygrywa");
} else {
    console.log("ostatni wygrywa");
}


const kills = [0, 3, 15, 22, 1, 18];
for (let proCount = 0; )



const text = "dota lol cs valorant".split(' ');
console.log(text[0]);
console.log(text[text.length - 1]);
console.log(text.includes("cs"));


const hasGold = true;
const hasSword = true;

if (hasGold && hasSword) {
    console.log("gotowy do walki");
} else {
    console.log("prawie gotowy");
}
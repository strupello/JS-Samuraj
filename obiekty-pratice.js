// const player = {
//     name: "Bzyku",
//     power: 700,
//     level: 555,
//     profesion: "Mag",
//     transformiation: true,


//     showPlayer: function(){
//         console.log("Gracz " + this.name + "jest na poziomie: " + this.level + ", jego moc wynosi " + this.power + " jednostek. Jest to " + this.profesion + " po" + this.transformiation + ".");
//     }
// }
// player.showPlayer();

const player = {
    name: "Bzyku",
    power: 700,
    level: 555,
    profesion: "Mag",
    transformation: false, // poprawiłem literówkę w nazwie ;)

    showPlayer: function() {
        // Używamy operatora warunkowego (tzw. ternary operator), żeby było ładniej
        const transformStatus = this.transformation ? "transformacji" : "braku transformacji";

        console.log(`Gracz ${this.name} jest na poziomie ${this.level}. Moc: ${this.power}. Zawód: ${this.profesion}. Status: po ${transformStatus}.`);
    }
}

player.showPlayer(); // Nie zapomnij wywołać funkcji, żeby zobaczyć efekt!
function verificarLetraA(str) {
    const regex = /a/gi; 
    const matches = str.match(regex); 

    if (matches) {
        console.log(`A letra 'a' aparece ${matches.length} vezes.`);
    } else {
        console.log("A letra 'a' não foi encontrada.");
    }
}

const exemplo = "Felipe";
verificarLetraA(exemplo);

function verificarLetraA(str) {
    let contador = 0;
   for(let i = 0 ; i< str.length ; i++) {
        if(str[i] === 'A' || str[i] === 'a'){
            contador ++;
        }
   }

   if(contador > 0){
    console.log("Existem " + contador + " 'a' presnetes na palavra " + str)
   }
   else{
    console.log("Não existe a letra a na palavra " + str)
   }
}

const exemplo = "Felipe";
verificarLetraA(exemplo);

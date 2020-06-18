const alturas = [147, 169, 200, 182, 150, 230, 187, 154, 177, 161];
let aux = alturas[0];
let aux2 = alturas[0];

const alturasOrdenadas = [];


for(i = 0; i < alturas.length; i++){
   if(alturas[i] < aux){
       aux = alturas[i];
   }
   if(alturas[i] > aux2){
        aux2 = alturas[i];
   }

}

console.log("Menor altura: " + aux);
console.log("Maior altura: " + aux2);



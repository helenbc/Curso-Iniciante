function ehImpar(num){
    if(num % 2 != 0){
        return true;
    }
    return false;
}

function somaImpares(num1 , num2){

   let aux = 0;
   let maior = 0;
   let menor = 0;

   if(num1 <= num2){
        menor = num1;
        maior = num2;
   }else{
        menor = num2;
        maior = num1;

   }

    for(i = menor + 1; i < maior; i++){

        if(ehImpar(i)){

            aux += i;
        }
    }

    return aux;
}

console.log("A soma dos números ímapres é: " + somaImpares(-5,6))
console.log("A soma dos números ímapres é: " + somaImpares(15,12))
console.log("A soma dos números ímapres é: " + somaImpares(12,12))
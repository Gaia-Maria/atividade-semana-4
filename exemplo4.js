//04) Imprima na tela os números pares existentes entre 0 e 100.

function numerosPares(num){

    while (num <= 100){
        num++

        if ((num % 2) == 0) {
        console.log(`Números pares = ${num}`);
        }
    }
}
numerosPares(0)

//2) Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos
//numeros 60 e 90 imprima a palavra "CONTINUE".

function todosOsDez(x){

    while(x < 100) {
      x += 10
      
      if(x === 60 || x === 90) {
        console.log('CONTINUE')
        continue
      }
      console.log(x)
    }
  }
  todosOsDez (10)
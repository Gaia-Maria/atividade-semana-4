//1) Utilize a estrutura de repetição for para imprimir no console conforme instruções:
//A) números de 1 a 50
//B) quando chegar no número 25 interrompa a instrução e pare o loop
//C) quando chegar no número 10 pule a instrução 

//A) 
console.log('inicio do a)')

for(let i = 1; i <= 50 ; i++){

    console.log(i)
  }
  console.log('fim do exercicio A')

//B)
  console.log('inicio B')

  for(let x = 1; x <= 50 ; x++){
    if(x === 25){
        break

    }
    console.log(x)
}
  console.log('fim do exercicio B')

//C)  
  console.log('inicio C')

  for(let y = 1; y <= 50 ; y++){
    if(y === 10){
        continue
    }
    console.log(y)
}
  console.log('fim do exercicio C')




  

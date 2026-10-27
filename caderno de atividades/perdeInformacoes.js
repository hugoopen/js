let nomes = ["Ana", "Bruno", "Carla"];
let status = [false, true, false];
nomes.push("Daniel");
status.push(true);
nomes.splice(3, 1); 
status.splice(1, 1)
console.log(nomes);
console.log(status);

//precisei chamar nomes e status separaradamente e depois coloquei .splice, chamei as 2 listas e escolhi o item que devia remover  
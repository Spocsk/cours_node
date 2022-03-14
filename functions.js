function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

function isValidDate() {
    for (let index = 2014; index < 2050; index++) {
        let date = `${index}/01/1`
        if (date instanceof Date && !isNaN(date)) {
            return index;
        }
    }
}

function getFirstFibonacciNumber(nbr) {

    var n1 = 0;
    var n2 = 1;
    var somme = 0;
  
    for(let i = 2; i <= nbr; i++){
       somme = n1 + n2; 
       n1 = n2; 
       n2 = somme; 
    }
    return nbr ? n2 : n1;
 }


console.log(f)
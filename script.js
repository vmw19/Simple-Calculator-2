console.log("Script");
let myGlobal=2;
//display the number from 1 to 100, 10 by 10
//10, 20, 30, 40, 50


// for (var input =1; input<=10; input++){
//     console.log(input)
// }

// for (var input =10; input<=100; input++){
//     console.log(input)
// }

// for (var input =10*10; input<=1000; input++){
//     console.log(input)
// }

// for (var input =10/10; input<=100; input++){
//     console.log(input)
// }

// for (x=0;x<110;x+=10){
//   console.log(x)
// }

//create the function
// function hello(parameter1, parameter2){
//     console.log("Hello");
//     let total=parameter1+parameter2;
//     console.log(total);
//     return total;
// }
function calculatingTotal(price, qty){
    let subtotal=price*qty;
    return subtotal;
}
function calculatingTaxes(subtotalParam){
    let taxes=subtotalParam*0.16;
    let total=subtotalParam+taxes;
    myGlobal=5;
    return total;
}
//use the function
let laptop=calculatingTotal(1000,3);
let speakers=calculatingTotal(200,2);


console.log(calculatingTaxes(laptop));//3480
console.log(calculatingTaxes(speakers));//464

console.log(myGlobal);//2
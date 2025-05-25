/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/
function sumNum(number1,number2) {
  return new Promise (function(res,rej){
    setTimeout(() => {
      (number1 < 0 || number2<0)? rej("errore"):res(number1 + number2);//فکر میکنم اگه با ایف و الس مینوشتم خوانایی بیشتر میشد
    }, 500);
  })
}
sumNum(-5,80).then((date)=>{
  console.log(date);
}).catch((err)=>{
  console.log(err);
})
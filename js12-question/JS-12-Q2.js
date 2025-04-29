// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

function outerFunc(num1,num2,callBack) {

return callBack(num1,num2);
    
}


function innerFunc(a ,b) {
    
return a * b ;
}




outerFunc(21,2,innerFunc)


// or

function outerFunc(func) {
    console.log(func(21, 2));
}

function innerFunc(num1, num2) {
    return num1 * num2;
}

outerFunc(innerFunc);
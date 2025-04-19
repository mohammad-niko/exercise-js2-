// * ===============================1========================================

/*
 ? look at the code below:
 ? make a sentence by concatenating the object keys 
*/
const object1 = {
  ali: 'name',
  writes: 'does what',
  novels: 'kind of book',
};

// output => 'ali writes novels'
//بار اول این به ذهنم اومد حالا فکر میکنم درست نباشه
const sentence = Object.keys(object1)
console.log(...sentence);

//اینم روش دوم
const makeSen = (obj)=> Object.keys(obj).join(" ");
console.log(makeSen(object1));

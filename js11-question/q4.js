// ? 4. Change two or more values of this object .
// todo : one of the values that you change must be the skills property // example: ['python', 'css', 'js']
let key = "skills";
const obj2 = {
  id: 'kd455',
  age: 24,
  username: 'john2000',
  skills: ['html', 'css', 'js'],
};

//  !   Answer:
// 1:
obj2.skills = ["python","css","js"]
console.log(obj2);
// 2:
obj2[key][0]= "python"
console.log(obj2);


//maybe badpractice =)
let {skills:[first,...others]} = obj2;//این طوری هم میشه ولی خب روی ابجکت اصلی تاثیر ندارد.
first = "python"
console.log(first);
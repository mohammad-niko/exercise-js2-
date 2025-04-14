/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsByIndexRaw` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

const pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, 'whoops'];

// let pairsByIndex = pairsByIndexRaw.filter(chr => isNaN(chr) && typeof chr !== "string" ); // Complete this statement
// کد بالا نتیجه درست رو میده ولی فکرنکنم درست باشه که همیشه دنبال این باشم که فقط به جواب برسم 
// حالا کد بالا چرا درسته کار میکنه ؟چون متد فیلتر خودش فالسی ها رو فیلتر میکنه بصورت دیفالت بعد استرینگ رو شرط تایپ اف فیلتر میکنه واری یک رو اون شرط && پاک میکنه
// 🙂این پاینن کدد درستشو مینویسم
let pairsByIndex = pairsByIndexRaw.filter(chr => Array.isArray(chr) && chr.length > 1  );
console.log(pairsByIndex);
const students = ['Javad', 'Anahid', 'Mina', 'Atena'];
const mentors = ['Shirin', 'Bahar', 'Maryam', 'Ayda'];

const pairs = pairsByIndex.map(function (indexes) {
  const student = students[indexes[0]];
  const mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);


//پ.ن:نمیدونم بالا چرا توضیح دادم ولی خب فکر کردم نیازه اگه خوندید متشکرم ازتون❤️❤️🔥

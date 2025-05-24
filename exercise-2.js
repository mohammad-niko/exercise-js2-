const pro = new Promise((res, rej) => {
  const rand = Math.random();
  if (rand > 0.5) {
    return res("mmad")
  } else {
   throw rej("none mmad")
   
  }
});
pro.then(res => console.log(res)).catch(err => console.log(err))

// synchoronus and assynchronous
let a = 10;
let b = 20;
const waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});
waitingData.then((data) => {
  const b = data;
  console.log("a+b", a + b);
});

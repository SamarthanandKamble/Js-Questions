function customPromise(value) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(value);
    }, value * 1000);
  });
}

let p1 = customPromise(1.5);
let p2 = customPromise(2);
let p3 = customPromise(3);
let p4 = new Promise((_, rej) => rej("Error"));

Promise.all([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.allSettled([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.race([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.any([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

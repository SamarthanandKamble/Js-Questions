/*
const p1 = new Promise((res, rej) => {
  console.log("Static promise 1");
  res("p1");
});
setTimeout(() => console.log("timeout 1"), 2000);
const p2 = new Promise((res, rej) => {
  rej("p2");
  console.log("Static promise 2");
});
setTimeout(() => console.log("timeout 2"), 1000);
const p3 = new Promise((res, rej) => {
  res("p3");
  console.log("Static promise 3");
});
setTimeout(() => console.log("timeout 3"), 500);

p1.then(
  (res) => {
    console.log("Simply 1", res);
    return res;
  },
  (err) => {
    console.log("this is ERROR response from p1");
  }
)
  .then((res) => {
    console.log("Simply 2", res);
    return res;
  }) // Simply
  .then((res) => {
    console.log("Simply 3", res);
    return res;
  }) // Simply
  .then((res) => {
    console.log("Simply 4", res);
    return res;
  }) // Simply
  .then((res) => {
    console.log("Simply 5", res);
  }); // Simply

p2.then(
  (res) => {
    console.log("this is response from p2", res);
  },
  (err) => {
    console.log("this is ERROR response from p2", err); //this is ERROR response from p2 ,p2
  }
)
  .then((res) => console.log("he is simply idiot 1")) //he is simply idiot
  .catch((err) => console.log("this is CATCH ERROR response from p1"))
  .then((res) => console.log("he is simply idiot 2")); //he is simply idiot

p3.then((res) => {
  console.log("Promise 1", res);
  return res;
})
  .then((res) => {
    console.log("Promise 2", res);
    return res;
  })
  .then((res) => {
    console.log("Promise 3", res);
    return res;
  })
  .then((res) => {
    console.log("Promise 4", res);
    return res;
  })
  .then((res) => {
    console.log("Promise 5", res);
  });
*/
/*
const promise1 = new Promise((resolve, reject) => {
  resolve("Hello");
});

promise1.then((value) => console.log(value));
console.log("World");
*/

/*
const promise1 = Promise.resolve("First");

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Second"), 2000);
});

Promise.all([promise1, promise2]).then((values) => console.log(values.length));
*/

/*
const promise = new Promise((resolve, reject) => {
  reject("Error");
});

promise
  .then((value) => console.log("Success:", value))
  .catch((error) => console.log("Error:", error));

  */

/*
async function fetchData() {
  return Promise.resolve("Data");
}

fetchData().then((result) => console.log(result));
*/

/*
const promise = new Promise((resolve) => {
  console.log("Inside Promise");
  resolve("Resolved");
});

promise.then((value) => console.log(value));
console.log("Outside Promise");
*/

/*
function delayedPromise(time) {
  return new Promise((res, rej) => {
    setTimeout(res("Delayed resolve!"), time);
  });
}

delayedPromise(2000).then((message) => console.log(message));
*/
/*
function fetchData() {
  return new Promise((res) => {
    setTimeout(() => {
      res({ data: "Fetched Data" });
    }, 2000);
  });
}

function processData(data) {
  return data.toString().toUpperCase();
}

fetchData()
  .then((result) => processData(result.data))
  .then((processedData) => console.log(processedData));
*/
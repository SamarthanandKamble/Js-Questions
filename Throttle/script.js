const inputValue = document.querySelector(".input-value");
let count = 0;
let startTime = Date.now();

const throttle = (fn, time) => {
  let flag = true;
  return () => {
    console.log("the flag is", flag);
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, time);
    }
  };
};

const fetchData = () => {
  console.log(`made an api call after... ${Date.now() - startTime}ms`, ++count);
};

const throttledFn = throttle(fetchData, 500);

inputValue.addEventListener("keydown", throttledFn);

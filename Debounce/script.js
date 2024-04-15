const inputValue = document.querySelector(".input-value");
var startTime = Date.now();
const fetchData = () => {
  console.log(`Made an api call after... ${Date.now() - startTime}ms`);
};
const debounce = (fn, time) => {
  let timerId;
  return () => {
    console.log("Timer id is:", timerId);
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn();
    }, time);
  };
};

let debouncedFn = debounce(fetchData, 500);

inputValue.addEventListener("keydown", debouncedFn);

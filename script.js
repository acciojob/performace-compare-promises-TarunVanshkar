// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
  // Function to fetch api data and return time taken to fetch data
  function fetchUrlData(url){
    const startTime = performance.now();    // Took current time in ms
    // console.log(startTime)
    const promise = fetch(url);
    // console.log(promise)
    const finalPromise = promise.then((data) => {
        return data.json()
    })
    // console.log(finalPromise)
    return performance.now() - startTime;
  }

 
const outputAll = document.querySelector("#output-all");
const outputAny = document.querySelector("#output-any");

const allPromises = Promise.all(apiUrls.map(fetchUrlData))
// console.log(allPromises)
allPromises.then((times) => {
    times.forEach((time) => {
        // outputAll.innerText += time+"ms ";
        outputAll.innerHTML += `<tr><td>${time.toFixed(2)} ms</td></tr>`;
    })
})


const anyPromise = Promise.any(apiUrls.map(fetchUrlData))

anyPromise.then((time) => {
    // console.log(time)
    // outputAny.innerText += time + "ms ";
    outputAny.innerHTML += `<tr><td>${time.toFixed(2)} ms</td></tr>`;
})

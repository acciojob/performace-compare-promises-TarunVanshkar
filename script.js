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
async function fetchApiTime() {
    const startAllTime = performance.now();
    const allResponses = await Promise.all(
      apiUrls.map(url => fetch(url))
    );
    const endAllTime = performance.now();

    const startAnyTime = performance.now();
    const anyResponse = await Promise.any(
      apiUrls.map(url => fetch(url))
    );
    const endAnyTime = performance.now();

    const outputAll = document.getElementById("output-all");
    const outputAny = document.getElementById("output-any");
    outputAll.innerText = endAllTime - startAllTime;
    outputAny.innerText = endAnyTime - startAnyTime;
  }

fetchApiTime();

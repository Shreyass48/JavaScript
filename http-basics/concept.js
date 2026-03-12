// fetch api call example
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.status === 200) {
      throw new Error("Error" + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

// async/await example with fetch
async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    if (!response.status === 200) {
      throw new Error("Error" + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

fetchTodo();

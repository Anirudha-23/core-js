function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello from async/await!");
      }, 2000);
    });
  }
  
  async function showData() {
    let data = await getData();
    console.log(data); // Output after 2 seconds: "Hello from async/await!"
  }
  
  showData();
  
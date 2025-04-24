function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data received!");
      }, 2000);
    });
  }
  
  fetchData().then(data => {
    console.log(data); // Output after 2 seconds: "Data received!"
  });
  
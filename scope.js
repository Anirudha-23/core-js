let fullName = "Anirudha"; // global

function sayHi() {
  let a = "Hi"; // local
  console.log(a + " " + fullName);
}

sayHi();       // Output: Hi Anirudha
console.log(fullName);     // works
console.log(a); // Error: greeting is not defined



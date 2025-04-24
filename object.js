let person = {
    fullName: "Anirudha",
    age: 21,
    Hello : function() {
      console.log("Hello, my name is " + this.fullName);
    }
  };
  
  console.log(person.fullName);    // Output: Anirudha
  console.log(person.age);     // Output: 21
  person.Hello();              // Output: Hello, my name is Anirudha
  
try {
    let num = prompt("Enter a number:");
    if (isNaN(num))  //isNan use to check the imput is a number or not
         {
                throw "Not a valid number!";
         }
    console.log("You entered:", num);
  } 
  catch (error) {
    console.log("Error:", error);
  }
  
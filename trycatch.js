try {
    let num = prompt("Enter a number:");
    if (isNaN(num))  
         {
                throw "Not a valid number!";
         }
    console.log("You entered:", num);
  } 
  catch (error) {
    console.log("Error:", error);
  }
  

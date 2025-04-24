//for all even number
let num = prompt("Enter The Number");
let num1=num;
let total=0;
console.log("THE MAX NUM= ",num);
for(num=0 ; num <= num1 ; num++) //we use for loop
{
    if(num % 2 == 0)
        {
        console.log(num);
        total=total+1
        
        }
}
console.log("The Total Number Of Even Number is: ",total);

//game 
let randNo=25;
let chooseNo= prompt("Enter The Number ");
console.log("The fast number is ",chooseNo);
while(chooseNo != randNo) //while loop
    {
        chooseNo= prompt("Enter The Number ");
        console.log("The Number Is  not Right ",chooseNo);


    }
console.log("The Number Is Right ",chooseNo);
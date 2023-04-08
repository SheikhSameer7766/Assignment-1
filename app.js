              // Question01


              let num1 = prompt ("Enter the first number : ");
              let num2 = prompt ("Enter the Second number ; ");
              
              
              if (num1 > num2) {
                  console.log(num1+ "is larger.");
              }else if(num2 > num1) {
                  console.log(num2 + " is larger.");
              }
              
              
                      //    Question02
              
              
              let num = prompt("Enter a number:");
              
              if (num > 0) {
                  alert("The sign is +");
              }else if (num < 0) { 
                  alert ("The sign is -");
              }else{
                  alert("The num is 0.");
              }
              
              
              
                          //  Qustion03
              
              
              
              let firstNum = Number(prompt("Enter Number"))
              let secondNum = Number(prompt("Enter Number"))
              let thirdNum = Number(prompt("Enter Number"))
              let fourthNum = Number(prompt("Enter Number"))
              let fifthNum = Number(prompt("Enter Number"))
              
              let largest = firstNum;
              
              if(secondNum>largest){
                  largest = secondNum;
              }
              if(thirdNum > largest){
                  largest = thirdNum;
              }
              if(fourthNum > largest){
                  largest = fourthNum;
              }
              if(fifthNum > largest){
                  largest = fifthNum;
              }
              console.log("The largest number is " + largest)
              
              
                        //  Question04
              
              
              for (let i = 0 ; i <= 15; i++) {
                  if (i % 2 == 0) {
                      console.log(i + " is even");
                  }else {
                      console.log(i + " is odd");
                  }
              }
              
              
                            // Qustion05
              
              
              let userMarks = Number(prompt("Enter your marks to calculate grade"));
              if(userMarks < 60){
                  alert("F")
              }else if(userMarks < 70){
                  alert("D")
              }else if(userMarks < 80){
                  alert("C")
              }else if(userMarks < 90){
                  alert("B")
              }else if(userMarks < 100){
                  alert("A")
              }
              
              
              
                          // Qustion06
              
              console.log("The average marks are " + averageMarks.toFixed(2) + " and the grade is " + grade);
              for (let i = 1; i <= 100; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                  console.log("FizzBuzz");
                } else if (i % 3 === 0) {
                  console.log("Fizz");
                } else if (i % 5 === 0) {
                  console.log("Buzz");
                } else {
                  console.log(i);
                }
              }
              
                
                      //  Qustion07
              
              
              for (let i = 1; i<= 5; i++) {
                let row ="";
                for(let j= 1; j<= i; j++) {
                  row += "*"
                }
                console.log(row)
              }
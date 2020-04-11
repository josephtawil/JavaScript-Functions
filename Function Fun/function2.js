function createMessage(str)
{
    var message = "Good morning " + str;
    return message; 
}

var myCustomMessage = createMessage("Joseph");

console.log(myCustomMessage + " wow isnt that cool");

numArray = [1,2,3,4,5,6,7];
counter = 0;
function greaterThan(num1 , arr1)
{
    for(var i = 0; i < arr1.length; i++)
    {
        // console.log(arr1[i]);
        
        if(arr1[i] > num1)
        {
            console.log(arr1[i]);
            console.log("This number is greater than " + num1);
            counter++;
        }
        else if(arr1[i]== num1)
        {
            console.log(arr1[i]);
            console.log("This number is " + num1);
        }
        else
        {
            console.log(arr1[i]);
            console.log("This number is less than " + num1);
        }

    }
    console.log("There are " + counter + " numbers greater than " + num1);
}
greaterThan(4,numArray);

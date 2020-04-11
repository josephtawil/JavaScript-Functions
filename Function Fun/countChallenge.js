numArray = [1,2,3,4,5,6,7];
counter = 0;

// The greater than function should have two arguments. The first is a number, the second is an array
// return the number of all the items greater than the first argument(num1).
function greaterThan(num1 , arr1)
{
    for(var i = 0; i < arr1.length; i++)
    {
        // console.log(arr1[i]);
        
        if(arr1[i] > num1)
        {
            // console.log(arr1[i]);
            // console.log("This number is greater than " + num1);
            //returns the count of numbers that are greater than num1.
            counter++;
        }
        // else if(arr1[i]== num1)
        // {
        //     console.log(arr1[i]);
        //     console.log("This number is " + num1);
        // }
        // else
        // {
        //     console.log(arr1[i]);
        //     console.log("This number is less than " + num1);
        // }

    }
    //return brings the value outside of the scope for future manipulation.
    return counter;
}

console.log(greaterThan(4,numArray));

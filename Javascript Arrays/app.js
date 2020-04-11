//we are creating an array 
var fName = ["Thomas", "Jay"];
//this is a good way to overwrite data in an array
//Chrissy will replace Jay in th array
fName[1] = "Chrissy";
//prints out the array on console
console.log(fName);
//this would return an error because there isn't a index 2 element in the array 
console.log(fName[2]);
//Pop and Push work the same as in Java when dealing with stacks
//push adds an item to the end of an array
fName.push("Jay");
//Jay will be added to the end of the array
console.log(fName);
//pop is used to remove an item from the end of the array
console.log(fName.pop());
//Jay isn't in the list anymore
console.log(fName);
//indexOf locates the index of the object Thomas in the array
//it will return 0 because Thomas is index 0 in the array.
console.log(fName.indexOf("Thomas"));
//shift would remove the first item in the beginning of the arrya and return it.
fName.shift("Thomas");
//unshift would add Jay to the beginning of the array
fName.unshift("Jay");
//this would return ["Jay","Chrissy"]
console.log(fName);

var array = ["Joseph","Farid","Abdul","Samy"];
//making a variable with the index of Jay
var myIndex = array.indexOf("Abdul");
//Splice would delete items of the index of Jay and the number 1 is the number of items to delete after the index.
// it will delete an item from an array
array.splice(myIndex,2);

console.log(array);

for(var i = 0; i < array.length;i++)
{
    console.log(array[i]);
}
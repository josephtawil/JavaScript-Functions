console.log("Hello World");
//making variable for h1 id. we are storing it in memory
//document grabs the whole document
//querySelector looks for
var myH1 = document.querySelector("#message");

console.log(myH1);

//assigning the string to the myH1 variable.
myH1.textContent = "Hello World";

//assign the class name to the variable as red
// myH1.className = "red";
// myH1.className = "blue";
//the # looks for the id
var myBtn = document.querySelector("#btnSubmit");

//myBtn is a variable and we are saying that if myBtn is clicked
//addEventListener checks to see if a click is happening to myBtn
var counter = 0;
var toggleColor = true;
if(toggleColor === true)
{
    myH1.className="blue";
    toggleColor = false;
}

myBtn.addEventListener("click", function()
{
    console.log("oh wow");
    counter ++;
    console.log("My counter is " + counter);
    
    if(toggleColor === false)
    {
        myH1.className = "red";
        toggleColor = true;
    }
    else
    {
        myH1.className = "blue";
        toggleColor = false;
    }
});
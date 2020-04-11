// A function is a reusable block of code that can take arguments.
// we are creating a function called sayHello that console logs Hello World.
// sayHello is the name of the function.
//function says that sayHello is a function.
function sayHello()
{
    console.log("Hello World");
}
//say hello world 10 times
for(var i = 0; i <= 10; i++)
{
    sayHello();
}

function sayHi(str)
{
    console.log("Hello " + str);
}

sayHi("Joseph");
//we can have many parameters(arguments) in the function
//message and name are just placeholders. they aren't variables 
//use type of, if statements, or switch
function sayMessage(message, name)
{
    if(typeof message === "string" && typeof name === "string") 
    {
        console.log(message,name); 
        //console.log('${message} ${name}');
    }
    else
    {
        console.log("Inputs of function must be a string");
    }
}

//a function can have multiple arguments
sayMessage("Hi there","Joseph");
sayMessage(1,2);
sayMessage("This is not correct",false);
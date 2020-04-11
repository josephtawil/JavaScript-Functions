//create object and assigning values

var car =
{
    doors: 2,
    mileage: 0,
    mph: 0,
    showMiles: function()
        {
            console.log(this.mileage);

        },
    honkHorn: function()
        {
            console.log("HONKKKKKK!!!!");
        },
    //drive to Work function 
    //adds 10 miles to mileage
    driveToWork: function()
    {
        this.mileage= this.mileage+10;
        this.showMiles();
    },
    //drive function adds miles to mileage
    drive: function(miles)
    {
        this.mileage = this.mileage + miles;
        this.showMiles();
    }

};

//you are accessing door value by using car.doors
car.doors;
//prints out the number of doors
console.log(car.doors);
//accessing mileage of car
// car.mileage;
// //printing out value of mileage
// console.log(car.mileage);
car.showMiles();
//create a method that honks a horn
car.honkHorn();
//create a drive to work function
car.driveToWork();
//create a drive function
car.drive(15);

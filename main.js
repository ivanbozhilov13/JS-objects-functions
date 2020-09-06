//Arrays
let myArray = [20, 50, 10, 33];
myArray.push('hello');
myArray.pop('hello');
myArray.push('this is an array'); 
myArray.push('kokooooo');
myArray.pop([7]);
myArray.push('Never ever again');
myArray.pop([20]);
console.log('This are the result' + myArray);

/*Creating an Object. In this case a hotel with booked and free rooms
Keys are in front before the two dots, cant have the same name. Values follow
after the two dots*/
var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin','double','suite'],
    //We create a method which contais a functions to execute comands.
    //'This' keyword indicates that we are using the rooms and booked belonging to this object
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
};
hotel.pool = true; //This is one way to add properties by using literal notation
hotel.restaurat = true; //This is one way to add properties by using literal notation
hotel.gymFacilities = ['bench press','dreadmill','pull bar','dip bar']; //This is one way to add properties by using literal notation
hotel.emploeyees = 'A lot of them' //We want to remove this property
delete hotel.emploeyees; //We use the keyword delete to remove a propery from the Object
console.log(hotel);


var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
document.write('');

//Creating an Object using constructor syntax thus the word 'new'
var hotel = new Object();
hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function (){
    return this.rooms - this.booked;
};
var elName = document.getElementById('hotelName');
elName.textContent = hotel.checkAvailability();

//Global Objects - String Objects
var saying = 'Home sweet home'; 
var msg1 = '<h3>Length is:</h3>' + saying.length;
msg1 += '<h3>Uppercase:</h3>' + saying.toUpperCase();
msg1 += '<h3>Lowercase:</h3>' + saying.toLowerCase();
msg1 += '<h3>First:</h3>' + saying.indexOf('ee');
msg1 += '<h3>Replacement:</h3>' + saying.replace('me','e');

var el1 = document.getElementById('info');
el1.innerHTML = msg1;

//Global Objects: Math. Object. Creating a random number
var randomNumber = Math.floor((Math.random() * 10) +1 );
var elNumber = document.getElementById('math-object');
elNumber.innerHTML = '<p>Randon number is:</p>' + randomNumber;
console.log(randomNumber);
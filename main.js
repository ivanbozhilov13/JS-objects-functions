//Functions and their 'functions'
/*This is a very basic functions but illustrates how one works. The perform an action
and can be called at any time during the code. 
You declare the function using the keyword then assign a name to it called identifier
Statements sit in a code block, inside the curly braces.*/

function sayHello(greeting){
    var greeting;
    return greeting;
}
console.log('Hello World!');    

function getArea(width, height){    
    var area = width * height;
    return area;
}
var size = getArea(5, 5);
console.log(size);

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

//DOM = Document Object
var msg = document.title + '</br>';
msg += '<b>Page adress is:</b>' + " " + document.URL + '</br>';
msg += '<b>Last modified:</b>' + " " + document.lastModified;
var el = document.getElementById('footer');
el.innerHTML = msg;

//Global Objects - String Objects
var saying = 'Home sweet home'; 
var msg1 = '<h3>Length is:</h3>' + saying.length;
msg1 += '<h3>Uppercase:</h3>' + saying.toUpperCase();
msg1 += '<h3>Lowercase:</h3>' + saying.toLowerCase();
msg1 += '<h3>First:</h3>' + saying.indexOf('ee');
msg1 += '<h3>Replacement:</h3>' + saying.replace('me','e');

var el1 = document.getElementById('info');
el1.innerHTML = msg1;
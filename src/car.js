function Car(make, model, color){

this.make = make;
this.model = model;
this.year = new Date().getFullYear();
this.previous_owners = [];
this.current_owner = "manufacturer";
this.color = color;
this.state = "off";
this.passengers = [];

}

Car.prototype.sale = function(newOwner){
// make previous owner to current owner

this.previous_owners.push(this.current_owner);
this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
// take new color and make it the color of the car
this.color = newColor;
};
Car.prototype.start = function (){
this.state = "on";
};
Car.prototype.off = function () {
this.state = "off";
};

Car.prototype.driveto = function (destination) {
	if (this.state === "on")
		{console.log("driving to " + destination );
	}
};

Car.prototype.park = function () {
	if (this.state === "off")
	{console.log("parked!!");
	return "parked";
	}
};


Car.prototype.pickup = function () {
	if (this.state === "on") {
	var name = "Maia";
	console.log ( "driving to pick up "+ name);
	this.passengers.push(name);
	}
};

Car.prototype.dropoff = function (name) {

if (this.state === "on" && this.passengers.indexOf(name) !== -1 ) {
	this.passengers.splice(this.passengers.indexOf(name),1) ;
}

};


module.exports=Car;
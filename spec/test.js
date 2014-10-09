// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('myCar', function(){

var myCar;
  beforeEach(function(){
    // create a new myCar object each time

myCar = new Car("mercedez", "c_class", "silver");

  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
      expect(myCar.year).to.equal(2014);
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previous_owners).to.be.empty;
    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.current_owner).to.equal("manufacturer");
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers).to.be.empty;
    });
  });

  describe('#sale', function(){

    it('should move currentOwner to previousOwners array', function(){
      myCar.sale("Yoni");
      expect(myCar.previous_owners[0]).to.eql("manufacturer");
    });

    it('should update currentOwner with the new owner', function(){
      myCar.sale("Yoni");
      expect(myCar.current_owner).to.eql("Yoni");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      myCar.paint("red");
      expect(myCar.color).to.equal("red");
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      myCar.start("on");
      expect(myCar.state).to.equal("on");
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      myCar.off("off");
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      myCar.park(true);
      expect(myCar.state).to.equal("off");
    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      myCar.pickup(true);
      expect(myCar.passengers).to.equal("maia");
    });

    it('should not modify the passengers array if car is off', function(){
      myCar.pickup(false);
      expect(myCar.passengers).to.be.empty;
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      myCar.dropOff(false);
      expect(myCar.passengers)
    });

    it('should leave passenger in the passengers array if car is off', function(){

    });
  });

});



const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');


let park;
let dinosaur1;
let dinosaur2;
let dinosaur3;
let dinosaur4;
let dinosaurs;

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-Rex', 'Carnivore', 100);
    dinosaur2 = new Dinosaur('Velociraptor', 'Carnivore', 75);
    dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 50);
    dinosaur4 = new Dinosaur('Triceratops', 'Herbivore', 80);
    park = new Park('Jurassic Park', 10, [dinosaur1, dinosaur2, dinosaur3]);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual = (actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual = (actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual = (actual, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur4)
    const actual = park.dinosaurs.length;
    assert.strictEqual = (actual, 4)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.deleteDinosaur()
    const actual = park.dinosaurs.length;
    assert.strictEqual = (actual, 3)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to remove all dinosaurs of a particular species');

});

const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs
};


Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur)
};

Park.prototype.deleteDinosaur = function(dinosaur){
  this.dinosaurs.shift()
};

Park.prototype.mostVisitors = function(){
  let dinosaurs = this.dinosaurs
  const result = Math.max(dinosaurs.guestsAttractedPerDay)
    for (dinosaur of dinosaurs){
      if (dinosaur.guestsAttractedPerDay === result){
      return dinosaur.species
    }
    console.log(result);
  }
};

Park.prototype.findDinosaurs = function(species){
  for(dinosaur of this.dinosaurs){
    if (species === dinosaur.species){
      return dinosaur
    }
  }
};

Park.prototype.findDinosaurs = function(){};


module.exports = Park

const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};


Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur)
};

Park.prototype.deleteDinosaur = function(dinosaur){
  const index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1)
};

Park.prototype.mostVisitors = function(){
  let sorted = this.dinosaurs.sort(function(dinosaura, dinosaurb){
    return dinosaurb.guestsAttractedPerDay - dinosaura.guestsAttractedPerDay
  });
  return sorted[0];
};

Park.prototype.findSpecies = function(species){
  const result = []
  for(let dinosaur of this.dinosaurs){
    if (species === dinosaur.species){
      result.push(dinosaur)
    }
  }
  return result;
};

Park.prototype.numberOfDailyVisitors = function(){
  let total = 0
  for (let dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.numberOfYearlyVisitors = function(){
  return this.numberOfDailyVisitors() * 365;
}

Park.prototype.calculateYearlyRevenue = function(){
  return this.numberOfYearlyVisitors() * this.ticketPrice;
}

Park.prototype.removeBySpecies = function(species){
  const allSpecies = this.findSpecies(species);
  for (let dinosaur of allSpecies){
    this.deleteDinosaur(dinosaur);
  }
}
module.exports = Park;

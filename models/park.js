const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = []
};


Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur)
};

Park.prototype.deleteDinosaur = function(dinosaur){
  this.dinosaurs.unshift()
};

Park.prototype.mostVisitors = function(){
  let dinosaurs = this.dinosaurs
  const result = this.dinosaurs.max
   for (dinosaur of dinosaurs){
    if (dinosaur.guestsAttractedPerDay === result){
    return result.species
    }
  }
};
module.exports = Park

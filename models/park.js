const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = []
};


Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur)
}

Park.prototype.deleteDinosaur = function(dinosaur){
  this.dinosaurs.unshift()
}
module.exports = Park

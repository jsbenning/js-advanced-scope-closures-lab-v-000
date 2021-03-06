function produceDrivingRange(blockRange){
  
  return function(start, end){
    let p1 = parseInt(start);
    let p2 = parseInt(end);
    let dist = Math.abs(p1 - p2);
    if (dist > blockRange) {
      return ((dist - blockRange) + " blocks out of range");
    } else {
      return ("within range by " + (blockRange - dist));
    }
  };
}

function produceTipCalculator(tip){
  return function(fare){
    return (fare * tip);
  };
}

function createDriver(){
  let driverId = 0;
  
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  };
}
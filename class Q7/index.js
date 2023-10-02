class Thermostat{
    constructor(F){
      this._temperature = 5/9 * (F - 32)  
    }
    
    get temperature(){
      return this._temperature;
    }
    
    set temperature(F){
      this._temperature = 5/9 * (F - 32)  
    }
  
  };
 
  const thermos = new Thermostat(76); 
  console.log("Thermostat:", thermos.temperature);
  thermos.temperature = 10;
  console.log("Thermostat:", thermos.temperature);

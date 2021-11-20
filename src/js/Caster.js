export default class Caster {
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.attack = 0;
      this.stoned = false;
      this.x = 1;
    }
  
    get stoned() {
      return this.stoneds;
    }
  
    set stoned(value) {
      this.stoneds = !!value;
    }
  
    get attack() {
      let reduction = 1 - (this.x - 1) * 0.1;
      reduction -= this.stoned ? Math.log2(this.x) * 0.05 : 0;
      reduction = (reduction > 0) ? reduction : 0;
      return Math.round(this.attacks * reduction);
    }
  
    set attack(value) {
      this.attacks = value > 0 ? value : 0;
    }
  }
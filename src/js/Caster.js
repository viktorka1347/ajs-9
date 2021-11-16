export default class Caster {
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.attack = 0;
      this.stoned = false;
      this.x = 1;
    }
  
    get stoned() {
      return this._stoned;
    }
  
    set stoned(value) {
      this._stoned = !!value;
    }
  
    get attack() {
      let reduction = 1 - (this.x - 1) * 0.1;
      reduction -= this.stoned ? Math.log2(this.x) * 0.05 : 0;
      reduction = (reduction > 0) ? reduction : 0;
      return Math.round(this._attack * reduction);
    }
  
    set attack(value) {
      this._attack = value > 0 ? value : 0;
    }
  }
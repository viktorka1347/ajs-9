import Caster from './Caster';

export default class Magician extends Caster {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 100;
  }
}
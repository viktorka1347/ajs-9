import Caster from './Caster';

export default class Daemon extends Caster {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 50;
  }
}
import Caster from '../Caster';

test('Должен создаваться объект', () => {
    expect(new Caster('Изя', 'Daemon')).toBeDefined();
});
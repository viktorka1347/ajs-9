import Magician from '../Magician';

const magician = new Magician('Петя');

test('Должен создаваться маг', () => {
    const result = {
        name: 'Петя',
        type: 'Magician',
        attacks: 100,
        stoneds: false,
        x: 1,
    };
    expect(magician).toEqual(result);
});

test.each([
    [1, 100],
    [2, 90],
    [3, 80],
    [11, 0],
])(
    'Атака мага должна ослабляться с расстоянием', (x, attack) => {
        magician.x = x;
        expect(magician.attack).toBe(attack);
    },
);

test.each([
    [1, 100],
    [2, 85],
    [3, 72],
    [11, 0],
])(
    'Атака одурманенного мага должна дополнительно ослабляться', (x, attack) => {
        magician.stoned = true;
        magician.x = x;
        expect(magician.attack).toBe(attack);
    },
);
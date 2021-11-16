import Daemon from '../Daemon';

const daemon = new Daemon('Вася');

test('Должен создаваться демон', () => {
  const result = {
    name: 'Вася',
    type: 'Daemon',
    _attack: 50,
    _stoned: false,
    x: 1,
  };
  expect(daemon).toEqual(result);
});

test.each([
  [1, 50],
  [2, 45],
  [3, 40],
  [11, 0],
])(
  'Атака демона должна ослабляться с расстоянием', (x, attack) => {
    daemon.x = x;
    expect(daemon.attack).toBe(attack);
  },
);

test.each([
  [1, 50],
  [2, 43],
  [3, 36],
  [11, 0],
])(
  'Атака одурманенного демона должна дополнительно ослабляться', (x, attack) => {
    daemon.stoned = true;
    daemon.x = x;
    expect(daemon.attack).toBe(attack);
  },
);
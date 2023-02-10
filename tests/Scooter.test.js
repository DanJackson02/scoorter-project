const Scooter = require('../src/Scooter')
const User = require('../src/User')
const scooter = new Scooter("West end");
const scooter2 = new Scooter("Coppenhall");


//typeof scooter === object
describe('scooter integrity checks', () => {
  test('Instance has correct properties', () => {
    expect(scooter).toHaveProperty("user", null);
    expect(scooter).toHaveProperty("charge");
    expect(scooter).toHaveProperty("serial");
    expect(typeof scooter.isBroken).toBe("boolean");
  });
});
describe('scooter instance serial incremental', () => {
  test('serial number increments by 1', () => {
    const initialSerial = Scooter.serial;
    expect(Number(Scooter.serial)).toBe(Number(initialSerial+1));
  });
});


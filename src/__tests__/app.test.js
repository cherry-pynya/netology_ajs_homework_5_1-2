import Character from "../app";
import {Bowerman, Swordsman, Magician, Daemon, Undead, Zombie} from '../app.js'

test('повышение уровня', ()=>{
    const mage = new Magician('vladimir');
    mage.levelUp();
    expect(mage.level).toEqual(2);
});

test('повышение уровня мертвеца', ()=>{
    const mage = new Magician('vladimir');
    mage.health = -10;
    expect(mage.levelUp).toThrowError();
});

test('повышение уровня раненого', ()=>{
    const mage = new Magician('vladimir');
    mage.health = 30;
    mage.levelUp();
    expect(mage.health).toEqual(100);
});

test('повышение уровня атаки', ()=>{
    const mage = new Magician('vladimir');
    mage.levelUp();
    expect(mage.attack).toEqual(12);
});

test('повышение уровня брони', ()=>{
    const mage = new Magician('vladimir');
    mage.levelUp();
    expect(mage.defence).toEqual(48);
});

test('несмертельный урон', ()=>{
    const mage = new Magician('vladimir');
    mage.damage(40);
    expect(mage.health).toEqual(76);
});

test('смертельный урон', ()=>{
    const mage = new Magician('vladimir');
    mage.damage(500);
    expect(mage.health).toEqual(-200);
});

test('урон мертвому', ()=>{
    const mage = new Magician('vladimir');
    mage.health = 0;
    mage.damage(500);
    expect(mage.health).toEqual(0);
});



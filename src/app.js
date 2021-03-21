export default class Character {
    constructor(name, type) {
      if (typeof name === 'string' && name.length > 2 && name.length < 10) {
        this.name = name;
      } else {throw new Error('invalid name')};
      this.health = 100;
      this.level = 1;
    };
    
    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.health = 100;
            this.defence = (this.defence * 1.2);
            this.attack = (this.attack * 1.2);
        } else {
            throw new Error ('YOU DIED!')
        };
    };

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    };
};

export class Bowerman extends Character {
    constructor(name) {
        super(name);
        this.type = 'Bowerman';
        this.attack = 25;
        this.defence = 25;
    };
};

export class Swordsman extends Character {
    constructor(name) {
        super(name);
        this.type = 'Swordsman';
        this.attack = 40;
        this.defence = 10;
    };
};

export class Magician extends Character {
    constructor(name) {
        super(name);
        this.type = 'Magician';
        this.attack = 10;
        this.defence = 40;
    };
};

export class Daemon extends Character {
    constructor(name) {
        super(name);
        this.type = 'Daemon';
        this.attack = 10;
        this.defence = 40;
    };
};

export class Undead extends Character {
    constructor(name) {
        super(name);
        this.type = 'Undead';
        this.attack = 25;
        this.defence = 25;
    };
};

export class Zombie extends Character {
    constructor(name) {
        super(name);
        this.type = 'Zombie';
        this.attack = 40;
        this.defence = 10;
    };
};



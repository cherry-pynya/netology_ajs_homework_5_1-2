export default class Character {
    constructor(name, type) {
      if (typeof name === 'string' && name.length > 2 && name.length < 10) {
        this.name = name;
      } else {throw new Error('invalid name')};
      
      let array = this.classes;
      
      if (array.includes(type)) {
          this.type = type
      } else {throw new Error('invalid type')};
   
      this.health = 100;
      this.level = 1;
      if (this.type === 'Bowerman') {
          this.attack = 25;
          this.defence = 25;
      };
      if (this,type === 'Swordsman') {
          this.attack = 40;
          this.defence = 10;
      };
      if (this,type === 'Magician') {
          this.attack = 10;
          this.defence = 40;
      };
      if (this,type === 'Daemon') {
          this.attack = 10;
          this.defence = 40;
      };
      if (this,type === 'Undead') {
          this.attack = 25;
          this.defence = 25;
      };
          if (this,type === 'Zombie') {
          this.attack = 40;
          this.defence = 10;
      };
    }
      get classes() {
        return ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
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



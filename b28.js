"use strict";

let family = {
  address: "Seoul",
  members: {},
  addFamily: function (age, name, role) {
    this.members[role] = {
      age: age,
      name: name,
    };
  },
  getHeadcount: function () {
    return Object.keys(this.members).length;
  },
};

family.addFamily(45, "sunny", "mother");
family.addFamily(50, "suck", "father");
family.addFamily(35, "chloe", "aunt");
console.log(family.getHeadcount());

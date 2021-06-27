"use strict";

let greeting_expression = function (name) {
  console.log(`hi ${name}`);
};

function greeting_declaration(name) {
  console.log(`hi ${name}`);
}

greeting_expression("Chloe");
greeting_declaration("-- Chloe");

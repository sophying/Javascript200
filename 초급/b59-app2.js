import * as add from "./b59-add.js";
import "./b59-sideeffect.js";

console.log(add.version);
const added = add.default(1, 2);
console.log(added);

hello("harin");
